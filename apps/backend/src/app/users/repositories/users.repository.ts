import {Repository} from '@uncoupled/shared/data-access'
import {UserEntity} from '../entities/user.entity'

export abstract class UsersRepository extends Repository<UserEntity> {}
