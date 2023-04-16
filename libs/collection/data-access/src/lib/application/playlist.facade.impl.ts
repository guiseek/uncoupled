import {Observable, catchError, take} from 'rxjs'
import {Store} from '@uncoupled/shared/data-access'
import {CreatePlaylistDto, UpdatePlaylistDto} from '../dto'
import {PlaylistRepository, PlaylistFacade} from '../ports'
import {Playlist} from '../entities'

interface PlaylistState {
  data: Playlist[]
  error: string[]
  loading: boolean
}

const initialState = Object.freeze<PlaylistState>({
  data: [],
  error: [],
  loading: false,
})

export class PlaylistFacadeImpl
  extends Store<PlaylistState>
  implements PlaylistFacade
{
  loading$ = this.select((state) => state.loading)
  error$ = this.select((state) => state.error)
  data$ = this.select((state) => state.data)

  constructor(private readonly repository: PlaylistRepository) {
    super(initialState)
  }

  create(value: CreatePlaylistDto): void {
    this.repository
      .create(value)
      .pipe(take(1), this.catch())
      .subscribe(() => {
        this.load()
      })
  }

  update(value: UpdatePlaylistDto): void {
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

  remove(value: Playlist) {
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
