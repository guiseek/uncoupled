import {Http, FindOptions} from '@uncoupled/shared/data-access'
import {PlaylistRepository} from '../ports/playlist.repository'
import {Playlist} from '../entities/playlist'

export class PlaylistRepositoryImpl implements PlaylistRepository {
  constructor(private http: Http<Playlist>) {}

  findAll() {
    return this.http.get<Playlist[]>('collection/playlists')
  }
  findOne(value: FindOptions<Playlist>) {
    return this.http.post<Playlist, FindOptions<Playlist>>('collection/playlists', value)
  }
  find(value: FindOptions<Playlist>) {
    return this.http.post<Playlist[], FindOptions<Playlist>>('collection/playlists', value)
  }
  create(value: Omit<Playlist, 'id'>) {
    return this.http.post<Playlist, Omit<Playlist, 'id'>>('collection/playlists', value)
  }
  findById(id: number) {
    return this.http.get<Playlist>(`collection/playlists/${id}`)
  }
  update(id: number, value: Partial<Playlist>) {
    return this.http.put<Playlist, Partial<Playlist>>(`collection/playlists/${id}`, value)
  }
  remove(id: number) {
    return this.http.delete<Playlist>(`collection/playlists/${id}`)
  }
}
