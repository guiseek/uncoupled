import {IsEmail, IsNotEmpty, MinLength} from 'class-validator'
import {UserEntity} from '../entities/user.entity'

export class CreateUserDto extends UserEntity {
  @IsNotEmpty({
    message: 'Nome obrigatório',
  })
  name: string

  @MinLength(4, {
    message: 'Mínimo de 4 caracteres',
  })
  @IsNotEmpty({
    message: 'Nome de usuário obrigatório',
  })
  username: string

  @IsEmail(
    {},
    {
      message: 'Endereço de e-mail inválido',
    }
  )
  @IsNotEmpty({
    message: 'Endereço de e-mail obrigatório',
  })
  email: string
}
