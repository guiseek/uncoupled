import { UserDataService } from '../infrastructure/user-data.service';
import { BehaviorSubject, Observable, catchError, take } from 'rxjs';
import { User } from '../entities/user';

export class UserFacade {
  #error = new BehaviorSubject<string[]>([]);
  error$ = this.#error.asObservable();

  #users = new BehaviorSubject<User[]>([]);
  users$ = this.#users.asObservable();

  constructor(private readonly service: UserDataService) {}

  loadUsers() {
    this.service
      .getUsers()
      .pipe(take(1), this.catchError())
      .subscribe((users) => {
        this.#users.next(users);
      });
  }

  saveUser<T extends User>(value: T) {
    if (value.id) {
      this.service
        .updateUser(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.loadUsers();
        });
    } else {
      this.service
        .createUser(value)
        .pipe(take(1), this.catchError())
        .subscribe(() => {
          this.loadUsers();
        });
    }
  }

  removeUser<T extends User>(value: T) {
    this.service
      .deleteUser(value)
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
