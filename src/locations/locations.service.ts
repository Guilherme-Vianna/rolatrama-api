import { Injectable } from '@nestjs/common';
import { locations, Prisma } from 'generated/prisma';
import { AiService } from 'src/ai/ai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LocationsService {
  constructor(private readonly aiService: AiService, private readonly prismaService: PrismaService) {
  }

  async generateTownName(quantity: number): Promise<string[]> {
    try {
      const response = await this.aiService.generateContent(`gere ${quantity} nomes de vilarejos/cidades faceis de pronunciar nesse formato cidade1,cidade2,cidade3`)
      return response.split(',').map(town => town.trim())
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }

  async generateTownDetails(townName: string): Promise<Town> {
    try {
      const response = await this.aiService.generateContent(`gere as seguintes informacoes sobre a cidade ${townName}: tamanho, clima, breve historia, descricao do local, economia, criminalidade. Me de a resposta separada pro virgula em ordem de pedido e seja breve na descricao`)
      const properties = response.split(',').map(town => town.trim())
      const townHistory = await this.aiService.generateContent(`gere uma historia de criacao da cidade medieval ${townName} usando as seguintes informacoes: tamanho=${properties[0]}, clima=${properties[1]}, breve historia${properties[2]}, descricao do local${properties[3]}, economia${properties[4]}, criminalidade${properties[5]}`)

      const town = this.prismaService.towns.create({
        data: {
          name: townName,
          size: properties[0],
          whether: properties[1],
          history: townHistory,
          locationDescription: properties[3],
          economy: properties[4],
          criminality: properties[5]
        }
      })

      return town;
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }


  async generateTownLocations(town: Town, quantity: number): Promise<Prisma.BatchPayload> {
    try {
      const request = await this.aiService.generateContent(`gere ${quantity} locais para a cidade ${town.name} com base na historia: ${town.history} \n 
        Me de a resposta nesse formato nome,brevedescricao separada pro virgula e locais separados por ; em ordem de pedido e seja breve`)

      let locations: Prisma.locationsCreateManyInput[] = [];

      request.split(';').forEach(element => {
        locations.push({
          name: element.split(',')[0],
          description: element.split(',')[1],
          townId: town.id
        });
      });

      const response = await this.prismaService.locations.createMany({
        data: locations
      });

      return response;
    } catch (error) {
      throw new Error(`Failed to generate content: ${error.message}`);
    }
  }
}
