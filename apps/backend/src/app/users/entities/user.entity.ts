import { User } from '@workspace/user/data-access';

export class UserEntity implements User {
  id: number;
  name: string;
}
