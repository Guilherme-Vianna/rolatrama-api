import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { LocationsService } from 'src/locations/locations.service';
import { NpcsService } from 'src/npcs/npcs.service';
import { QueueModule } from 'src/queue/queue.module';

@Module({
  imports: [QueueModule],
  controllers: [AiController],
  providers: [AiService, LocationsService, NpcsService],
  exports: [AiService]
})
export class AiModule { }
