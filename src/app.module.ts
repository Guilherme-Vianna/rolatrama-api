import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AiModule } from './ai/ai.module';
import { LocationsService } from './locations/locations.service';
import { NpcsService } from './npcs/npcs.service';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    QueueModule,
    AuthModule,
    AiModule
  ],
  providers: [LocationsService, NpcsService],
  exports: [LocationsService],
})
export class AppModule { }
