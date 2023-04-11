import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Di } from '@uncoupled/shared/util-core';

@Controller('users')
export class UsersController {
  #usersService = Di.use(UsersService);

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.#usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.#usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.#usersService.findOne({ id: +id });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.#usersService.update({ id: +id, ...updateUserDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.#usersService.remove({ id: +id });
  }
}
