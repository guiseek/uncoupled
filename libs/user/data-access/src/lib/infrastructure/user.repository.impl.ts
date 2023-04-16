import {Http, FindOptions} from '@uncoupled/shared/data-access'
import {UserRepository} from '../ports/user.repository'
import {User} from '../entities/user'

export class UserRepositoryImpl implements UserRepository {
  constructor(private http: Http<User>) {}

  findAll() {
    return this.http.get<User[]>('users')
  }
  findOne(value: FindOptions<User>) {
    return this.http.post<User, FindOptions<User>>('users', value)
  }
  find(value: FindOptions<User>) {
    return this.http.post<User[], FindOptions<User>>('users', value)
  }
  create(value: Omit<User, 'id'>) {
    return this.http.post<User, Omit<User, 'id'>>('users', value)
  }
  findById(id: number) {
    return this.http.get<User>(`users/${id}`)
  }
  update(id: number, value: Partial<User>) {
    return this.http.put<User, Partial<User>>(`users/${id}`, value)
  }
  remove(id: number) {
    return this.http.delete<User>(`users/${id}`)
  }
}
