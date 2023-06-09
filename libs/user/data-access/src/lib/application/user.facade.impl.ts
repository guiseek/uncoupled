import {Observable, catchError, take} from 'rxjs'
import {Store} from '@uncoupled/shared/data-access'
import {UserRepository, UserFacade} from '../ports'
import {CreateUserDto, UpdateUserDto} from '../dto'
import {User} from '../entities/user'

interface UserState {
  data: User[]
  error: string[]
  loading: boolean
}

const initialState = Object.freeze<UserState>({
  data: [],
  error: [],
  loading: false,
})

export class UserFacadeImpl extends Store<UserState> implements UserFacade {
  loading$ = this.select((state) => state.loading)
  error$ = this.select((state) => state.error)
  data$ = this.select((state) => state.data)

  constructor(private readonly repository: UserRepository) {
    super(initialState)
  }

  create(value: CreateUserDto): void {
    this.repository
      .create(value)
      .pipe(take(1), this.catch())
      .subscribe(() => {
        this.load()
      })
  }

  update(value: UpdateUserDto): void {
    this.repository
      .update(value.id, value)
      .pipe(take(1), this.catch())
      .subscribe(() => {
        this.load()
      })
  }

  load() {
    this.repository
      .findAll()
      .pipe(take(1), this.catch())
      .subscribe((data) => {
        this.setState({data})
      })
  }

  remove(value: User) {
    this.repository
      .remove(value.id)
      .pipe(take(1), this.catch())
      .subscribe(() => {
        this.load()
      })
  }

  catch = <R>() => {
    return catchError((err, caught: Observable<R>) => {
      if (err) {
        this.setState({error: err.message})
        throw err
      }
      return caught
    })
  }
}
