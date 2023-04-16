import {User} from '../entities'

export interface CreateUserDto extends Omit<User, 'id'> {}
