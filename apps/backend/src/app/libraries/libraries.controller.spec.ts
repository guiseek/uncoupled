import {Test, TestingModule} from '@nestjs/testing'
import {LibrariesController} from './libraries.controller'
import {Di} from '@uncoupled/shared/util-core'
import {PlaylistsRepository} from './services/playlists.repository'
import {PlaylistsMockRepository} from './services/playlists-mock.repository'

Di.add(PlaylistsRepository, PlaylistsMockRepository)

describe('LibrariesController', () => {
  let controller: LibrariesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibrariesController],
    }).compile()

    controller = module.get<LibrariesController>(LibrariesController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
