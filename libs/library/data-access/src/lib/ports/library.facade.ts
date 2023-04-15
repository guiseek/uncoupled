import { Facade } from '@uncoupled/shared/data-access';
import { Playlist } from '../entities/playlist';

export abstract class LibraryFacade extends Facade<Playlist> {}
