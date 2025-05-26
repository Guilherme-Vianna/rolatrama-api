import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SheetService } from './sheet.service';

@Controller('sheets')
export class SheetController {
  constructor(private readonly sheetService: SheetService) { }

  @Post()
  create(): Promise<any> {
    return this.sheetService.create();
  }

  @Get()
  getAll(): Promise<any> {
    return this.sheetService.getAll();
  }

  @Get(":id")
  getById(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.sheetService.getById(id);
  }

  @Put(":id")
  update(@Param('id', ParseIntPipe) id: number,
    @Body() data: any): Promise<any> {
    return this.sheetService.update(data, id);
  }
}
