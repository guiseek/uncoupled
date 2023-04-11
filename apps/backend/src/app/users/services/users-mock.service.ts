import { DataService } from '@uncoupled/shared/data-access';
import { UserEntity } from '../entities/user.entity';
import { MockService } from '../../shared/mock.service';

export class UsersMockService
  extends MockService<UserEntity>
  implements DataService<UserEntity>
{
  constructor() {
    super([
      { id: 1, name: 'Gui' },
      { id: 2, name: 'João' },
    ]);
  }
}
