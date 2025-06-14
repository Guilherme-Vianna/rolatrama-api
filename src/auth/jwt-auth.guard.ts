// src/auth/jwt-auth.guard.ts
import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CanActivate } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    console.log('=== DEBUG JWT GUARD ===');
    console.log('Token extraído:', token);
    console.log('JWT_SECRET no Guard:', process.env.JWT_SECRET);
    console.log('JwtService:', this.jwtService); // Debug

    if (!token) {
      throw new UnauthorizedException('Token não fornecido');
    }

    try {
      const payload = this.jwtService.verify(token);
      console.log('Payload decodificado:', payload);

      request.user = {
        id: payload.sub,
        email: payload.email,
      };
      console.log('User adicionado ao request:', request.user);
      return true;
    } catch (error) {
      console.log('ERRO ao verificar token:', error.message);
      throw new UnauthorizedException('Token inválido');
    }
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}