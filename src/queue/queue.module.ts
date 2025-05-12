import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { InMemoryQueueService } from './in-memory-queue.service';

@Module({
  imports: [
    EventEmitterModule.forRoot(),
  ],
  providers: [InMemoryQueueService],
  exports: [InMemoryQueueService],
})
export class QueueModule { }