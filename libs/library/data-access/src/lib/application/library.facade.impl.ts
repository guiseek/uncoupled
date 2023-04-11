import { BehaviorSubject, Observable, catchError, take } from 'rxjs';
import { LibraryDataService } from '../ports/library-data.service';
import { LibraryFacade } from '../ports/library.facade';
import { Playlist } from '../entities/playlist';

export class LibraryFacadeImpl implements LibraryFacade {
  #error = new BehaviorSubject<string[]>([]);
  error$ = this.#error.asObservable();

  #users = new BehaviorSubject<Playlist[]>([]);
  playlists$ = this.#users.asObservable();

  constructor(private readonly service: LibraryDataService) {}

  loadPlaylists() {
    this.service
      .getPlaylists()
      .pipe(take(1), this.catchError())
      .subscribe((users) => {
        this.#users.next(users);
      });
  }

  savePlaylist(value: Playlist) {
    if (value.id) {
      this.service
        .updatePlaylist(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.loadPlaylists();
        });
    } else {
      this.service
        .createPlaylist(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.loadPlaylists();
        });
    }
  }

  removePlaylist(value: Playlist) {
    this.service
      .deletePlaylist(value)
      .pipe(take(1), this.catchError())
      .subscribe(() => {
        this.loadPlaylists();
      });
  }

  catchError = <R>() => {
    return catchError((err, caught: Observable<R>) => {
      if (err) {
        this.#error.next(err.message);
        throw err;
      }
      return caught;
    });
  };
}
