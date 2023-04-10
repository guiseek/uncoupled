import { LibraryDataService } from '../ports/library-data.service';
import { Http } from '@workspace/shared/util-core';
import { Playlist } from '../entities/playlist';

export class LibraryDataServiceImpl implements LibraryDataService {
  constructor(private http: Http<Playlist>) {}

  getPlaylists() {
    return this.http.get<Playlist[]>('users');
  }

  createPlaylist(value: Playlist) {
    return this.http.post<Playlist>('users', value);
  }

  updatePlaylist(value: Playlist) {
    return this.http.put<Playlist>(`users/${value.id}`, value);
  }

  deletePlaylist(value: Playlist) {
    return this.http.delete<Playlist>(`users/${value.id}`);
  }
}
