import {Facade} from '@uncoupled/shared/data-access'
import {Playlist} from '../entities/playlist'
import {CreatePlaylistDto, UpdatePlaylistDto} from '../dto'

export abstract class PlaylistFacade extends Facade<Playlist> {
  abstract create(value: CreatePlaylistDto): void
  abstract update(value: UpdatePlaylistDto): void
  abstract remove(value: Playlist): void
}
