import { UserDataService } from '../ports/user-data.service';
import { Http } from '@workspace/shared/util-core';
import { User } from '../entities/user';

export class UserDataServiceImpl implements UserDataService {
  constructor(private http: Http<User>) {}

  getUsers() {
    return this.http.get<User[]>('users');
  }

  createUser(value: User) {
    return this.http.post<User>('users', value);
  }

  updateUser(value: User) {
    return this.http.put<User>(`users/${value.id}`, value);
  }

  deleteUser(value: User) {
    return this.http.delete<User>(`users/${value.id}`);
  }
}
