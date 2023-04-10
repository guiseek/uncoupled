import { Http } from '@workspace/shared/util-core';
import { User } from '../entities/user';

export class UserDataService {
  constructor(private http: Http<User>) {}

  getUsers() {
    return this.http.get('users');
  }

  createUser(value: User) {
    return this.http.post<User>('users', value);
  }

  updateUser(value: User) {
    return this.http.put<User>('users', value);
  }

  deleteUser(value: User) {
    return this.http.delete<User>('users');
  }
}
