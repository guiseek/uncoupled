import { Observable } from 'rxjs';
import { Playlist } from '../entities/playlist';

export abstract class LibraryFacade {
  abstract error$: Observable<string[]>;
  abstract playlists$: Observable<Playlist[]>;

  abstract loadPlaylists(): void;
  abstract savePlaylist(user: Playlist): void;
  abstract removePlaylist(user: Playlist): void;
}
