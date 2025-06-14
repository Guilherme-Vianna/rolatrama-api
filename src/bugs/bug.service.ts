import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BugService {
  constructor(private readonly prisma: PrismaService) { }
  async create(data: any): Promise<any> {
    const response = await this.prisma.bugs.create({
      data: data
    })
    return { data: response }
  }
}