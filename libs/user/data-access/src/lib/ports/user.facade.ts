import {Facade} from '@uncoupled/shared/data-access'
import {CreateUserDto, UpdateUserDto} from '../dto'
import {User} from '../entities'

export abstract class UserFacade extends Facade<User> {
  abstract create(value: CreateUserDto): void
  abstract update(value: UpdateUserDto): void
  abstract remove(value: User): void
}
