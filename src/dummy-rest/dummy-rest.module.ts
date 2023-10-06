import { Module } from '@nestjs/common';
import { DummyRestService } from './dummy-rest.service';
import { DummyRestController } from './dummy-rest.controller';

@Module({
  controllers: [DummyRestController],
  providers: [DummyRestService]
})
export class DummyRestModule {}
