import { Body, Controller, Get, Param, ParseIntPipe, PayloadTooLargeException, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ImprovesService } from './improves.service';

@UseGuards(JwtAuthGuard)
@Controller('improves')
export class ImprovesController {
  constructor(private readonly service: ImprovesService) {
  }

  @Post()
  create(@Body() payload: any): Promise<any> {
    return this.service.create(payload);
  }
}
