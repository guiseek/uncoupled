import { IsNotEmpty } from 'class-validator';
import { UserEntity } from '../entities/user.entity';

export class CreateUserDto extends UserEntity {
  @IsNotEmpty({
    message: 'Nome obrigatório',
  })
  name: string;
}
