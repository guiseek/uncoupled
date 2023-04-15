import { BehaviorSubject, Observable, catchError, take } from 'rxjs';
import { UserRepository } from '../ports/user.repository';
import { UserFacade } from '../ports/user.facade';
import { User } from '../entities/user';

export class UserFacadeImpl implements UserFacade {
  #error = new BehaviorSubject<string[]>([]);
  error$ = this.#error.asObservable();

  #data = new BehaviorSubject<User[]>([]);
  data$ = this.#data.asObservable();

  constructor(private readonly service: UserRepository) {}

  load() {
    this.service
      .findAll()
      .pipe(take(1), this.catchError())
      .subscribe((users) => this.#data.next(users));
  }

  save(value: User) {
    if (value.id) {
      this.service
        .update(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => this.load());
    } else {
      this.service
        .create(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => this.load());
    }
  }

  remove(value: User) {
    this.service
      .remove(value)
      .pipe(take(1), this.catchError())
      .subscribe(() => this.load());
  }

  catchError = <R>() => {
    return catchError<R, Observable<R>>((err, caught) => {
      if (err) this.#error.next(err.message);
      if (err) throw err;
      return caught;
    });
  };
}
