import { Body, Controller, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SheetService } from './sheet.service';

@Controller('sheets')
export class SheetController {
  constructor(private readonly sheetService: SheetService) { }

  @Post()
  create(@Body() data: any): Promise<any> {
    console.log(data)
    return this.sheetService.create(data);
  }


  @Put(":id")
  update(@Param('id', ParseIntPipe) id: number,
    @Body() data: any): Promise<any> {
    return this.sheetService.update(data, id);
  }
}
