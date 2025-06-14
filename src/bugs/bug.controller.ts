import { Body, Controller, Get, Param, ParseIntPipe, PayloadTooLargeException, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { BugService } from './bug.service';

@UseGuards(JwtAuthGuard)
@Controller('bugs')
export class BugController {
  constructor(private readonly service: BugService) {
  }

  @Post()
  create(@Body() payload: any): Promise<any> {
    return this.service.create(payload);
  }
}
