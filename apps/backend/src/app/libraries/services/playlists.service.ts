import { DataService } from '@uncoupled/shared/data-access';
import { PlaylistEntity } from '../entities/playlist.entity';

export abstract class PlaylistsService extends DataService<PlaylistEntity> {}
