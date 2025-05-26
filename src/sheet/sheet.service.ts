import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SheetService {
  constructor(private readonly prisma: PrismaService) { }

  async getAll(): Promise<any> {
    const data = await this.prisma.sheets.findMany()
    return {data: data}
  }

  async getById(id: number): Promise<any> {
    return this.prisma.sheets.findUniqueOrThrow({ where: { id } })
  }

  async create(): Promise<any> {
    const data = await this.prisma.sheets.create({data: {
        data: ""
      }})
    return { data: data }
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