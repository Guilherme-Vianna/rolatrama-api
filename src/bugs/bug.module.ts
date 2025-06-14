import { Module } from '@nestjs/common';
import { BugController } from './bug.controller';
import { AuthModule } from '../auth/auth.module';
import { BugService } from './bug.service';

@Module({
  imports: [AuthModule],
  controllers: [BugController],
  providers: [BugService],
})
export class BugModule {
}
