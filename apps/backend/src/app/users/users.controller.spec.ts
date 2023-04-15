import {Test, TestingModule} from '@nestjs/testing'
import {UsersController} from './users.controller'
import {Di} from '@uncoupled/shared/util-core'
import {UsersRepository} from './repositories/users.repository'
import {UsersMockRepository} from './repositories/users-mock.repository'

Di.add(UsersRepository, UsersMockRepository)

describe('UsersController', () => {
  let controller: UsersController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile()

    controller = module.get<UsersController>(UsersController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
