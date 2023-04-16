import {User} from '../entities'

export interface UpdateUserDto extends Partial<User> {
  id: number
}
