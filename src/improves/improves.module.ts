import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ImprovesController } from './improves.controller';
import { ImprovesService } from './improves.service';

@Module({
  imports: [AuthModule],
  controllers: [ImprovesController],
  providers: [ImprovesService],
})
export class ImproveModule {
}
