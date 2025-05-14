// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // Adjust path as needed

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }

    const passwordValid = await this.userService.verifyPassword(email, password);
    if (!passwordValid) {
      throw new UnauthorizedException('Email ou senha inválidos');
    }
    
    return user;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    
    return {
      data: {
        access_token: this.jwtService.sign(payload),
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      }
    };
  }
}