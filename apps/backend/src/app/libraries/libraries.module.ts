import {Module, OnModuleInit, Provider} from '@nestjs/common'
import {Di} from '@uncoupled/shared/util-core'
import {LibrariesController} from './libraries.controller'
import {PlaylistsRepository} from './services/playlists.repository'
import {PlaylistsMockRepository} from './services/playlists-mock.repository'

@Module({
  controllers: [LibrariesController],
})
export class LibrariesModule implements OnModuleInit {
  onModuleInit() {
    Di.add(PlaylistsRepository, PlaylistsMockRepository)
  }
}
