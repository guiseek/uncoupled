import { Repository } from '@uncoupled/shared/data-access';
import { UserEntity } from '../entities/user.entity';
import { MockService } from '../../shared/mock.service';

export class UsersMongoService
  extends MockService<UserEntity>
  implements Repository<UserEntity>
{
  constructor() {
    super([
      { id: 1, name: 'Gui' },
      { id: 2, name: 'João' },
    ]);
  }
}
