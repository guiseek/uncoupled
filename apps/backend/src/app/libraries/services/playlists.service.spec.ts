import { PlaylistsMockService } from './playlists-mock.service';
import { PlaylistsService } from './playlists.service';
import { Di } from '@uncoupled/shared/util-core';

Di.add(PlaylistsService, PlaylistsMockService);

describe('LibrariesService', () => {
  let service: PlaylistsService;

  beforeEach(async () => {
    service = Di.use(PlaylistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
