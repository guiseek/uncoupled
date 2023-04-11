import { Test, TestingModule } from '@nestjs/testing';
import { LibrariesController } from './libraries.controller';
import { Di } from '@uncoupled/shared/util-core';
import { PlaylistsService } from './services/playlists.service';
import { PlaylistsMockService } from './services/playlists-mock.service';

Di.add(PlaylistsService, PlaylistsMockService);

describe('LibrariesController', () => {
  let controller: LibrariesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibrariesController],
    }).compile();

    controller = module.get<LibrariesController>(LibrariesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
