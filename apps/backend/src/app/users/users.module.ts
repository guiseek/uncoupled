import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Di } from '@uncoupled/shared/util-core';
import { UsersService } from './services/users.service';
import { UsersMockService } from './services/users-mock.service';

Di.add(UsersService, UsersMockService);

@Module({
  controllers: [UsersController],
})
export class UsersModule {}
