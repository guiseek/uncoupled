import { Observable } from 'rxjs';
import { Playlist } from '../entities/playlist';

export abstract class LibraryFacade {
  abstract error$: Observable<string[]>;
  abstract users$: Observable<Playlist[]>;

  abstract loadUsers(): void;
  abstract saveUser(user: Playlist): void;
  abstract removeUser(user: Playlist): void;
}
