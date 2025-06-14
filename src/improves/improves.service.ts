import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImprovesService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: any): Promise<any> {
    const response = await this.prisma.improves.create({
      data: data
    })
    return { data: response }
  }
}