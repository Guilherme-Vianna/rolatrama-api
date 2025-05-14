import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { AiService } from 'src/ai/ai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NpcsService {
  constructor(private readonly aiService: AiService, private readonly prismaService: PrismaService) {
  }

  async generateNpc(town?: Town): Promise<any> {
    try {
      const request = await this.aiService.generateContent(`gere 1 
      npc nesse formado: nome sobrenome,raca,idade,profissao,descricao,historia,interesse\n
      tem que ser racas baseadas em tolkien a o npc tem que ter relacao com o local \n
      ${town ? (`historia do local: ${town.history}
      economia do local: ${town.economy}
      criminalidade do local: ${town.criminality}`) : ""}
      seja criativo`);

      // Split the first NPC data (ignoring any additional ones)
      const npcData = request.split(';')[0];
      const parts = npcData.split(',');

      if (parts.length < 7) {
        throw new Error('Invalid NPC data format received from AI service');
      }

      const name = parts[0].trim();
      const race = parts[1].trim();
      const age = parts[2].trim();
      const ocupation = parts[3].trim();
      const description = parts[4].trim();
      const history = parts[5].trim();
      const interest = parts[6].trim();
      const townId = town ? town.id : null;

      // Create a single NPC
      const response = await this.prismaService.npcs.create({
        data: {
          name,
          race,
          age,
          ocupation,
          description,
          history,
          interest,
          townId
        }
      });

      return response;
    } catch (error) {
      throw new Error(`Failed to generate NPC: ${error.message}`);
    }
  }
}
