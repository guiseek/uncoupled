import { Observable } from 'rxjs';
import { User } from '../entities/user';

export abstract class UserDataService {
  abstract getUsers(): Observable<User[]>;
  abstract createUser(value: User): Observable<User>;
  abstract updateUser(value: User): Observable<User>;
  abstract deleteUser(value: User): Observable<User>;
}
