import { User } from '@workspace/shared/data-access';

export class UserEntity implements User {
  id: number;
  name: string;
}
