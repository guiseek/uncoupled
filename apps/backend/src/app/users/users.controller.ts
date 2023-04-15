import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
  OnModuleInit,
  OnApplicationBootstrap,
} from '@nestjs/common'
import {UsersRepository} from './repositories/users.repository'
import {CreateUserDto} from './dto/create-user.dto'
import {UpdateUserDto} from './dto/update-user.dto'
import {Di} from '@uncoupled/shared/util-core'

@Controller('users')
export class UsersController implements OnApplicationBootstrap {
  #usersService: UsersRepository

  onApplicationBootstrap() {
    this.#usersService = Di.use(UsersRepository)
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.#usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.#usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.#usersService.findById(+id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.#usersService.update(+id, {id: +id, ...updateUserDto})
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.#usersService.remove(+id)
  }
}
