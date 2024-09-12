import {
  IsString,
  Length,
  IsEmail,
  IsArray,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The username of the user',
    example: 'john_doe',
    minLength: 4,
    maxLength: 50,
  })
  @IsString()
  @Length(4, 50)
  username: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'P@ssw0rd',
    minLength: 6,
    maxLength: 100,
  })
  @IsString()
  @Length(6, 100)
  password: string;

  @ApiProperty({
    description: 'The email address of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'An array of roles assigned to the user',
    example: ['user', 'admin'],
    type: [String],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  roles?: string[];
}
