import {MockRepository, Repository} from '@uncoupled/shared/data-access'
import {UserEntity} from '../entities/user.entity'

export class UsersMockRepository
  extends MockRepository<UserEntity>
  implements Repository<UserEntity>
{
  constructor() {
    super([{id: 1, name: 'Gui', email: 'gui@seek.dev', username: 'guiseek'}])
  }
}
