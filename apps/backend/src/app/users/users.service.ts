import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  #users: UserEntity[] = [{ id: 1, name: 'Gui' }];

  create(createUserDto: CreateUserDto) {
    const id = this.#users.length + 1;
    const user = { ...createUserDto, id };
    this.#users.push(user);
    return user;
  }

  findAll() {
    return this.#users;
  }

  findOne(id: number) {
    return this.#users.find((user) => user.id == id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.#findIndex(id);
    const user = { ...this.#users[index], ...updateUserDto };
    this.#users[index] = user;
    return user;
  }

  remove(id: number) {
    const index = this.#findIndex(id);
    this.#users.splice(index, 1);
  }

  #findIndex(id: number) {
    return this.#users.findIndex((user) => user.id === id);
  }
}
