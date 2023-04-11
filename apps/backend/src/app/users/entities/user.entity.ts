import { User } from '@uncoupled/user/data-access';

export class UserEntity implements User {
  id: number;
  name: string;
}
