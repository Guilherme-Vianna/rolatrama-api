import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { SheetService } from './sheet.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';
import { CurrentUser } from 'src/auth/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('sheets')
export class SheetController {
  constructor(private readonly sheetService: SheetService) {
  }

  @Post()
  create(@CurrentUser('id') userId: number): Promise<any> {
    return this.sheetService.create(userId);
  }

  @Get()
  getAll(@CurrentUser('id') userId: number): Promise<any> {
    return this.sheetService.getAll(userId);
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.sheetService.getById(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number,
    @Body() data: any): Promise<any> {
    return this.sheetService.update(data, id);
  }
}
