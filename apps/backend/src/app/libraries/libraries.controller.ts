import {
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PlaylistsService } from './services/playlists.service';
import { Di } from '@uncoupled/shared/util-core';

@Controller('libraries')
export class LibrariesController {
  #librariesService = Di.use(PlaylistsService)

  @Post()
  create(@Body() createLibraryDto: CreatePlaylistDto) {
    return this.#librariesService.create(createLibraryDto);
  }

  @Get()
  findAll() {
    return this.#librariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.#librariesService.findOne({ id: +id });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibraryDto: UpdatePlaylistDto) {
    return this.#librariesService.update({ ...updateLibraryDto, id: +id });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.#librariesService.remove({ id: +id });
  }
}
