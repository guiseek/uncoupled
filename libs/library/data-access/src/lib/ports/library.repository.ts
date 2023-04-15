import {Repository} from '@uncoupled/shared/data-access'
import {Playlist} from '../entities/playlist'

export abstract class LibraryRepository extends Repository<Playlist> {}
