import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DummyRestModule } from './dummy-rest/dummy-rest.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [DummyRestModule, CacheModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
