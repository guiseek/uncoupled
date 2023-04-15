import {Repository} from '@uncoupled/shared/data-access'
import {User} from '../entities/user'

export abstract class UserRepository extends Repository<User> {}
