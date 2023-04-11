import { Observable } from 'rxjs';
import { User } from '../entities/user';

export abstract class UserDataService {
  abstract findAll(): Observable<User[]>;
  abstract create(value: User): Observable<User>;
  abstract update(value: User): Observable<User>;
  abstract remove(value: User): Observable<User>;
}
