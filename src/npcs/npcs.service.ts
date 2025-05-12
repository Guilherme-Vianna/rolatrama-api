import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { AiService } from 'src/ai/ai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NpcsService {
  constructor(private readonly aiService: AiService, private readonly prismaService: PrismaService) {
  }

  async generateNpc(town: Town, quantity: number): Promise<Prisma.BatchPayload> {
    try {
      const request = await this.aiService.generateContent(`gere ${quantity} 
        npcs nesse formado: nome sobrenome,raca,idade,profissao,descricao,historia,interesse\n
        tem que ser racas baseadas em tolkien a o npc tem que ter relacao com o local \n
        separe cada um com um ';' \n
        historia do local: ${town.history}
        economia do local: ${town.economy}
        criminalidade do local: ${town.criminality}
        seja criativo`)

      let npcs: Prisma.npcsCreateManyInput[] = [];

      request.split(';').forEach(element => {
        npcs.push({
          name: element.split(',')[0].trim(),
          race: element.split(',')[1].trim(),
          age: element.split(',')[2].trim(),
          ocupation: element.split(',')[3],
          description: element.split(',')[4],
          history: element.split(',')[5],
          interest: element.split(',')[6],
          townId: town.id
        });
      });

      const response = await this.prismaService.npcs.createMany({
        data: npcs
      });

      return response;
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }
}
