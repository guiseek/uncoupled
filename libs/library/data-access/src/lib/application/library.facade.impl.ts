import { BehaviorSubject, Observable, catchError, take } from 'rxjs';
import { LibraryRepository } from '../ports/library.repository';
import { LibraryFacade } from '../ports/library.facade';
import { Playlist } from '../entities/playlist';

export class LibraryFacadeImpl implements LibraryFacade {
  #error = new BehaviorSubject<string[]>([]);
  error$ = this.#error.asObservable();

  #data = new BehaviorSubject<Playlist[]>([]);
  data$ = this.#data.asObservable();

  constructor(private readonly service: LibraryRepository) {}

  load() {
    this.service
      .findAll()
      .pipe(take(1), this.catchError())
      .subscribe((users) => {
        this.#data.next(users);
      });
  }

  save(value: Playlist) {
    if (value.id) {
      this.service
        .update(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.load();
        });
    } else {
      this.service
        .create(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.load();
        });
    }
  }

  remove(value: Playlist) {
    this.service
      .remove(value)
      .pipe(take(1), this.catchError())
      .subscribe(() => {
        this.load();
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
