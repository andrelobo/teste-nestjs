import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { LoginDto } from '../dtos/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const user = await this.authService.register(createUserDto);
      return { message: 'User registered successfully', user };
    } catch (error) {
      if (error.response) {
        // Forward the error from the service layer
        throw new BadRequestException(error.response);
      }
      // Handle unexpected errors
      throw new BadRequestException('An error occurred during registration');
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      const user = await this.authService.validateUser(
        loginDto.username,
        loginDto.password,
      );
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const token = await this.authService.login(user);
      return { message: 'Login successful', token };
    } catch (error) {
      if (error.response) {
        // Forward the error from the service layer
        throw new UnauthorizedException(error.response);
      }
      // Handle unexpected errors
      throw new UnauthorizedException('An error occurred during login');
    }
  }
}
