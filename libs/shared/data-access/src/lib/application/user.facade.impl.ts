import { BehaviorSubject, Observable, catchError, take } from 'rxjs';
import { UserDataService } from '../ports/user-data.service';
import { UserFacade } from '../ports/user.facade';
import { User } from '../entities/user';

export class UserFacadeImpl implements UserFacade {
  #error = new BehaviorSubject<string[]>([]);
  error$ = this.#error.asObservable();

  #users = new BehaviorSubject<User[]>([]);
  users$ = this.#users.asObservable();

  constructor(private readonly service: UserDataService) {}

  loadUsers() {
    this.service
      .findAll()
      .pipe(take(1), this.catchError())
      .subscribe((users) => {
        this.#users.next(users);
      });
  }

  saveUser(value: User) {
    if (value.id) {
      this.service
        .update(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.loadUsers();
        });
    } else {
      this.service
        .create(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.loadUsers();
        });
    }
  }

  removeUser(value: User) {
    this.service
      .remove(value)
      .pipe(take(1), this.catchError())
      .subscribe(() => {
        this.loadUsers();
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
