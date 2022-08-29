import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { User } from 'src/interfaces/app-interfaces';
import { AuthService } from './auth.service';
import { sign } from 'jsonwebtoken';
import { AuthResponse } from 'src/interfaces/app-interfaces';
import { secret } from 'src/secret';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  authenticate(@Body() userDto: User): AuthResponse {
    const user: User = this.authService.getCredentials();
    if (
      userDto.username === user.username &&
      userDto.password === user.password
    ) {
      return { token: sign(user, secret) };
    }
    throw new HttpException(
      {
        status: HttpStatus.UNAUTHORIZED,
        error: 'Authentication failed',
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
