import { Module, Provider } from '@nestjs/common';
import { Di } from '@uncoupled/shared/util-core';
import { LibrariesController } from './libraries.controller';
import { PlaylistsService } from './services/playlists.service';
import { PlaylistsMockService } from './services/playlists-mock.service';

Di.add(PlaylistsService, PlaylistsMockService);

@Module({
  controllers: [LibrariesController],
})
export class LibrariesModule {}
