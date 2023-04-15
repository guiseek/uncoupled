import {MockRepository, Repository} from '@uncoupled/shared/data-access'
import {PlaylistEntity} from '../entities/playlist.entity'

export class PlaylistsMockRepository
  extends MockRepository<PlaylistEntity>
  implements Repository<PlaylistEntity>
{
  constructor() {
    super([
      {
        id: 1,
        title: 'Jazz / Soul / Blues / Funk',
        cover: '/assets/library-cover-jazz.jpg',
        kind: 'Playlist',
        owner: 'Gui Seek',
        created: new Date(),
        lastPlay: new Date(),
        playing: false,
      },
      {
        id: 2,
        title: 'A Compreensão Absoluta',
        cover: '/assets/library-cover-wu-hsin.jpg',
        kind: 'Playlist',
        owner: 'Gui Seek',
        created: new Date(),
        lastPlay: new Date(),
        playing: true,
      },
      {
        id: 3,
        title: 'Agnes Obel',
        cover: '/assets/library-cover-agnes.jpg',
        kind: 'Playlist',
        owner: 'Gui Seek',
        created: new Date(),
        lastPlay: new Date(),
        playing: false,
      },
    ])
  }
}
