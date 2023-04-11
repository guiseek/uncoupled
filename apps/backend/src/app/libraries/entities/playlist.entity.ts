import { Playlist, PlaylistKind } from '@workspace/library/data-access';

export class PlaylistEntity implements Playlist {
  id: number;
  title: string;
  cover?: string;
  description?: string;
  kind: PlaylistKind;
  playing: boolean;
  owner: string;
  created: Date;
  lastPlay?: Date;
}
