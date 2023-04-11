import { Observable } from 'rxjs';
import { Playlist } from '../entities/playlist';

export abstract class LibraryDataService {
  abstract findAll(): Observable<Playlist[]>;
  abstract create(value: Playlist): Observable<Playlist>;
  abstract update(value: Playlist): Observable<Playlist>;
  abstract remove(value: Playlist): Observable<Playlist>;
}
