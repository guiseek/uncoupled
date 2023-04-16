import {MockRepository} from '@uncoupled/shared/data-access'
import {Di, Token} from '@uncoupled/shared/util-core'
import {UserRepository} from '../ports/user.repository'
import {UserFacadeImpl} from './user.facade.impl'
import {UserFacade} from '../ports/user.facade'
import {User} from '../entities/user'

const USERS_TOKEN = new Token<User[]>('users.token')

const USER_MOCK = {id: 1, name: 'Gui', email: 'gui@seek.dev', username: 'guiseek'}

Di.add(USERS_TOKEN, [USER_MOCK])
Di.add(UserRepository, MockRepository, [USERS_TOKEN])
Di.add(UserFacade, UserFacadeImpl, [UserRepository])

describe('UserFacadeImpl', () => {
  let repository: MockRepository<User>
  let facade: UserFacade

  beforeAll(() => {
    repository = Di.use<MockRepository<User>>(UserRepository)
    facade = Di.use(UserFacade)
  })

  it('should users to be greater than or equal 2', () => {
    jest.spyOn(repository, 'findAll')

    facade.create({name: 'João', email: 'john@seek.dev', username: 'johnseek'})
    expect(repository['collection'].length).toBe(2)
  })

  it('should users to be greater than or equal 2', () => {
    jest.spyOn(repository, 'findAll')

    const user = repository['collection'][1]
    facade.remove(user)
    expect(repository['collection'].length).toBe(1)
  })

  it('should users to be greater than or equal 2', () => {
    jest.spyOn(repository, 'update')

    const seek = {id: 1, name: 'Seek'}
    facade.update(seek)

    expect(repository.update).toBeCalledWith(seek.id, seek)
  })
})
