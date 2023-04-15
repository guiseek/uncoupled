import {
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Controller,
  OnApplicationBootstrap,
} from '@nestjs/common'
import {CreatePlaylistDto} from './dto/create-playlist.dto'
import {UpdatePlaylistDto} from './dto/update-playlist.dto'
import {PlaylistsRepository} from './services/playlists.repository'
import {Di} from '@uncoupled/shared/util-core'

@Controller('libraries')
export class LibrariesController implements OnApplicationBootstrap {
  #librariesService: PlaylistsRepository

  onApplicationBootstrap() {
    this.#librariesService = Di.use(PlaylistsRepository)
  }

  @Post()
  create(@Body() createLibraryDto: CreatePlaylistDto) {
    return this.#librariesService.create(createLibraryDto)
  }

  @Get()
  findAll() {
    return this.#librariesService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.#librariesService.findById(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibraryDto: UpdatePlaylistDto) {
    return this.#librariesService.update(+id, {...updateLibraryDto, id: +id})
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.#librariesService.remove(+id)
  }
}
