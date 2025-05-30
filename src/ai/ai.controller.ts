import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { AiService } from './ai.service';
import { LocationsService } from 'src/locations/locations.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NpcsService } from 'src/npcs/npcs.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService, private readonly locations: LocationsService, private readonly prismaService: PrismaService, private readonly npcs: NpcsService) { }

  @Post()
  async makeQuestion(
    @Body("question") question: string,
  ) {
    return { data: await this.aiService.generateContent(question) }
  }

  @Get("generate/town/name")
  async generateCityNames(
    @Query('quantity') quantity: number,
  ) {
    return { data: await this.locations.generateTownName(quantity) }
  }

  @Get("generate/town")
  async generateTown(
  ) {
    return { data: await this.locations.generateTown() }
  }

  @Get("generate/town/details")
  async generateTownDetails(
    @Query('townName') name: string,
  ) {
    return { data: await this.locations.generateTownDetails(name) }
  }

  @Get("generate/town/locations")
  async generateTownLocations(
    @Query('townId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) townId: number,
    @Query('quantity', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST })) quantity: number,
  ) {
    return { data: await this.locations.generateTownLocations(await this.prismaService.towns.findUniqueOrThrow({ where: { id: townId } }), quantity) }
  }

  @Get("generate/npcs")
  async generateNpcs(
    @Query('townId', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.BAD_REQUEST, optional: true })) townId?: number,
  ) {
    let town: Town | undefined;
    if (townId) {
      town = await this.prismaService.towns.findUniqueOrThrow({ where: { id: townId } })
    }
    return { data: await this.npcs.generateNpc(town) }
  }

  @Get("towns")
  async getAllTowns(
  ) {
    return { data: await this.prismaService.towns.findMany() }
  }

  @Get("npcs")
  async getAllNpcs(
  ) {
    return { data: await this.prismaService.npcs.findMany() }
  }
}
