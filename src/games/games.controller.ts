import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GamesService } from './games.service';
import GameCreateDto from './dto/GameCreateDto';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {
  }

  @Post()
  create(@Body() createGameDto: GameCreateDto, @CurrentUser('id') userId: number): Promise<any> {
    return this.gamesService.create(createGameDto, userId);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameDto: GameCreateDto, @CurrentUser('id') userId: number) {
    return this.gamesService.update(+id, updateGameDto, userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(+id);
  }
}
