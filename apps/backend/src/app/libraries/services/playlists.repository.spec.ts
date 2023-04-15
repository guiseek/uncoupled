import {PlaylistsMockRepository} from './playlists-mock.repository'
import {PlaylistsRepository} from './playlists.repository'
import {Di} from '@uncoupled/shared/util-core'

Di.add(PlaylistsRepository, PlaylistsMockRepository)

describe('LibrariesRepository', () => {
  let service: PlaylistsRepository

  beforeEach(async () => {
    service = Di.use(PlaylistsRepository)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
