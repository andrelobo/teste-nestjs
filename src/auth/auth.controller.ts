// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
