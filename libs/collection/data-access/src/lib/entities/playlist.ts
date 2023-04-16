export type PlaylistKind = 'Artist' | 'Playlist'

export interface Playlist {
  id: number
  title: string
  cover?: string
  description?: string
  kind: PlaylistKind
  playing: boolean
  owner: string
  created: Date
  lastPlay?: Date
}
