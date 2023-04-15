import {UsersMockRepository} from './users-mock.repository'
import {UsersRepository} from './users.repository'
import {Di} from '@uncoupled/shared/util-core'

Di.add(UsersRepository, UsersMockRepository)

describe('UsersRepository', () => {
  let service: UsersRepository

  beforeEach(async () => {
    service = Di.use(UsersRepository)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
