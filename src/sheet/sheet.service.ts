import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SheetService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: any): Promise<any> {
    console.log(data)
    return this.prisma.sheets.create({
      data: {
        data: data
      }
    })
  }

  async update(data: any, id: number): Promise<any> {
    return this.prisma.sheets.update({
      data: {
        data: data
      },
      where: { id }
    })
  }
}