import {Playlist} from '../entities'

export interface UpdatePlaylistDto extends Partial<Playlist> {
  id: number
}
