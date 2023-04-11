import { Observable } from 'rxjs';
import { User } from '../entities/user';

export abstract class UserFacade {
  abstract error$: Observable<string[]>;
  abstract users$: Observable<User[]>;

  abstract loadUsers(): void;
  abstract saveUser(user: User): void;
  abstract removeUser(user: User): void;
}
