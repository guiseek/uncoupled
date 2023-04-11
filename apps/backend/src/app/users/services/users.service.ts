import { DataService } from '@uncoupled/shared/data-access';
import { UserEntity } from '../entities/user.entity';

export abstract class UsersService extends DataService<UserEntity> {}
