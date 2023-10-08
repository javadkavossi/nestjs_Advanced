import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DominModule } from './app/domain/domain.module';

@Module({
  imports: [DominModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
