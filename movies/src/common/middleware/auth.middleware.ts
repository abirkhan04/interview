import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from 'src/auth/auth.service';
import { verify } from 'jsonwebtoken';
import { secret } from 'src/secret';
import { User } from 'src/interfaces/app-interfaces';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly authService: AuthService) {}
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Authenticating Request...', req.headers.authorization);
    const authorization = req.headers.authorization;
    const token = authorization ? authorization.split(' ')[1] : 'null';
    const userDto: User =
      token !== 'null'
        ? (verify(token, secret) as User)
        : { username: '', password: '' };
    if (
      userDto.username === this.authService.getCredentials().username &&
      userDto.password === this.authService.getCredentials().password
    ) {
      next();
    } else res.status(401).send({ message: 'Unauthorized' });
  }
}
