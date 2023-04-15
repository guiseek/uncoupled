import {Http, FindOptions} from '@uncoupled/shared/data-access'
import {LibraryRepository} from '../ports/library.repository'
import {Playlist} from '../entities/playlist'

export class LibraryRepositoryImpl implements LibraryRepository {
  constructor(private http: Http<Playlist>) {}

  findAll() {
    return this.http.get<Playlist[]>('libraries')
  }
  findOne(value: FindOptions<Playlist>) {
    return this.http.post<Playlist, FindOptions<Playlist>>('libraries', value)
  }
  find(value: FindOptions<Playlist>) {
    return this.http.post<Playlist[], FindOptions<Playlist>>('libraries', value)
  }
  create(value: Omit<Playlist, 'id'>) {
    return this.http.post<Playlist, Omit<Playlist, 'id'>>('libraries', value)
  }
  findById(id: number) {
    return this.http.get<Playlist>(`libraries/${id}`)
  }
  update(id: number, value: Partial<Playlist>) {
    return this.http.put<Playlist, Partial<Playlist>>(`libraries/${id}`, value)
  }
  remove(id: number) {
    return this.http.delete<Playlist>(`libraries/${id}`)
  }
}
