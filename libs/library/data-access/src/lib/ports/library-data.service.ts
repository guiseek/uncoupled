import { Observable } from 'rxjs';
import { Playlist } from '../entities/playlist';

export abstract class LibraryDataService {
  abstract getPlaylists(): Observable<Playlist[]>;
  abstract createPlaylist(value: Playlist): Observable<Playlist>;
  abstract updatePlaylist(value: Playlist): Observable<Playlist>;
  abstract deletePlaylist(value: Playlist): Observable<Playlist>;
}
