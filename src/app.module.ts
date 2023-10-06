import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyRestModule } from './dummy-rest/dummy-rest.module';

@Module({
  imports: [DummyRestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
