import {
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { LibrariesService } from './libraries.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';

@Controller('libraries')
export class LibrariesController {
  constructor(private readonly librariesService: LibrariesService) {}

  @Post()
  create(@Body() createLibraryDto: CreatePlaylistDto) {
    return this.librariesService.create(createLibraryDto);
  }

  @Get()
  findAll() {
    return this.librariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.librariesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLibraryDto: UpdatePlaylistDto) {
    return this.librariesService.update(+id, updateLibraryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.librariesService.remove(+id);
  }
}
