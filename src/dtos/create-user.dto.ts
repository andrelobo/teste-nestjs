import {
  IsString,
  Length,
  IsEmail,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(4, 50)
  username: string;

  @IsString()
  @Length(6, 100) // Adiciona um comprimento mínimo para a senha
  password: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true }) // Garante que cada item do array seja uma string
  roles?: string[];
}
