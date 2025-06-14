import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import GameCreateDto from './dto/GameCreateDto';

@Injectable()
export class GamesService {
  constructor(private readonly prismaService: PrismaService) {
  }

  async create(createGameDto: GameCreateDto, userId: number): Promise<any> {
    const players_emails = createGameDto.players_emails;
    let players_ids = await this.prismaService.users.findMany({
      where: {
        email: {
          in: players_emails,
        },
      },
      select: {
        id: true,
      },
    });
    const data = await this.prismaService.games.create({
      data: {
        owner_id: userId,
        name: createGameDto.name,
        description: createGameDto.description,
        players: {
          create: players_ids.map((id) => ({
            user_id: id.id,
          })),
        },
      },
    });
    return { data: data };
  }

  async findAll(): Promise<any> {
    const data = await this.prismaService.games.findMany();
    return { data: data };
  }

  findOne(id: number) {
    return this.prismaService.games.findFirstOrThrow({ where: { id } });
  }

  async update(id: number, updateGameDto: GameCreateDto, userId: number) {
    const players_emails = updateGameDto.players_emails;
    let players_ids = await this.prismaService.users.findMany({
      where: {
        email: {
          in: players_emails,
        },
      },
      select: {
        id: true,
      },
    });
    return this.prismaService.games.update({
      where: { id },
      data: {
        owner_id: userId,
        name: updateGameDto.name,
        description: updateGameDto.description,
        players: {
          create: players_ids.map((id) => ({
            user_id: id.id,
          })),
        },
      },
    });
  }

  remove(id: number) {
    return this.prismaService.games.delete({ where: { id } });
  }
}
