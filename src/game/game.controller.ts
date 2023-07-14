import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getGames(@Query() query: any, @Req() req: Request) {
    return this.gameService.getGames(query, req);
  }

  @Get(':id')
  getGame(@Param('id') id: number, @Req() req: Request) {
    return this.gameService.getGame(id, req);
  }

  @Patch(':id')
  updateGame(@Param('id') id: number, @Body() body: any) {
    return this.gameService.updateGame(id, body);
  }
}
