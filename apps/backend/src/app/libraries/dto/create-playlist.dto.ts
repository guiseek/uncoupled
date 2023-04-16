import {IsNotEmpty} from 'class-validator'
import {PlaylistEntity} from '../entities/playlist.entity'
import {PlaylistKind} from '@uncoupled/collection/data-access'

export class CreatePlaylistDto extends PlaylistEntity {
  @IsNotEmpty({
    message: 'Título obrigatório',
  })
  title: string

  @IsNotEmpty({
    message: 'Tipo obrigatório',
  })
  kind: PlaylistKind

  @IsNotEmpty({
    message: 'Criador obrigatório',
  })
  owner: string
}
