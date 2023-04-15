import { Facade } from '@uncoupled/shared/data-access';
import { User } from '../entities/user';

export abstract class UserFacade extends Facade<User> {}
