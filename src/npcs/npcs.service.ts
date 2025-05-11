import { Injectable } from '@nestjs/common';
import { AiService } from 'src/ai/ai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NpcsService {
  constructor(private readonly aiService: AiService, private readonly prismaService: PrismaService) {
  }

  async generateNpc(town: Town, quantity: number): Promise<string[]> {
    try {
      const response = await this.aiService.generateContent(`gere ${quantity} 
        npcs nesse formado: nome,raca,idade,importancia,descricao,historia,interesse separados pro ; entre npcs\n
        tem que ser racas baseadas em tolkien a o npc tem que ter relacao com o local \n
        historia do local: ${town.history}
        economia do local: ${town.economy}
        criminalidade do local: ${town.criminality}`)

      let npcs: [];

      return response.split(',').map(town => town.trim())
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }
}
