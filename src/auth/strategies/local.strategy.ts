import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { UsersService } from '../../users/users.service';
import { Strategy } from 'passport-local';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly UsersService: UsersService) {
    super({
      usernameField: 'username', // Campo usado para o nome de usuário
      passwordField: 'password', // Campo usado para a senha
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.UsersService.validateUserPassword(
      username,
      password,
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
