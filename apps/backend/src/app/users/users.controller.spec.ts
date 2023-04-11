import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { Di } from '@uncoupled/shared/util-core';
import { UsersService } from './services/users.service';
import { UsersMockService } from './services/users-mock.service';

Di.add(UsersService, UsersMockService);

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
