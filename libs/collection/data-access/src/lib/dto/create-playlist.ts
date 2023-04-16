import {Playlist, PlaylistKind} from '../entities'

export interface CreatePlaylistDto extends Omit<Playlist, 'id' | 'created'> {
  title: string
  cover?: string
  description?: string
  kind: PlaylistKind
  playing: boolean
  lastPlay?: Date
  owner: string
}
