import { UserRepository } from '../ports/user.repository';
import { Http } from '@uncoupled/shared/data-access';
import { User } from '../entities/user';
import {
  CreateDto,
  DeleteDto,
  FindOneDto,
  UpdateDto,
} from 'libs/shared/data-access/src/lib/types';

export class UserRepositoryImpl implements UserRepository {
  constructor(private http: Http<User>) {}

  findAll() {
    return this.http.get<User[]>('users');
  }

  findOne(value: FindOneDto<User>) {
    return this.http.get<User>(`users/${value.id}`);
  }

  create(value: CreateDto<User>) {
    return this.http.post<User, CreateDto<User>>('users', value);
  }

  update(value: UpdateDto<User>) {
    return this.http.put<User, UpdateDto<User>>(`users/${value.id}`, value);
  }

  remove(value: DeleteDto<User>) {
    return this.http.delete<User>(`users/${value.id}`);
  }
}
