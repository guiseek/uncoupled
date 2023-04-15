import {Module, OnModuleInit} from '@nestjs/common'
import {Di} from '@uncoupled/shared/util-core'
import {UsersController} from './users.controller'
import {UsersRepository} from './repositories/users.repository'
import {UsersMockRepository} from './repositories/users-mock.repository'

@Module({
  controllers: [UsersController],
})
export class UsersModule implements OnModuleInit {
  onModuleInit() {
    Di.add(UsersRepository, UsersMockRepository)
  }
}
