import { UsersMockService } from './users-mock.service';
import { UsersService } from './users.service';
import { Di } from '@uncoupled/shared/util-core';

Di.add(UsersService, UsersMockService);

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    service = Di.use(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
