import { LibraryDataService } from '../ports/library-data.service';
import { Http } from '@workspace/shared/util-core';
import { Playlist } from '../entities/playlist';

export class LibraryDataServiceImpl implements LibraryDataService {
  constructor(private http: Http<Playlist>) {}

  findAll() {
    return this.http.get<Playlist[]>('libraries');
  }

  create(value: Playlist) {
    return this.http.post<Playlist>('libraries', value);
  }

  update(value: Playlist) {
    return this.http.put<Playlist>(`libraries/${value.id}`, value);
  }

  remove(value: Playlist) {
    return this.http.delete<Playlist>(`libraries/${value.id}`);
  }
}
