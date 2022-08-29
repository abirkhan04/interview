import { Injectable } from '@nestjs/common';
import { User } from 'src/interfaces/app-interfaces';

@Injectable()
export class AuthService {
  getCredentials(): User {
    return { username: 'test', password: 'abcd1234' };
  }
}
