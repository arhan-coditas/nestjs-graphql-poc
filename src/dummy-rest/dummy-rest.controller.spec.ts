import { Test, TestingModule } from '@nestjs/testing';
import { DummyRestController } from './dummy-rest.controller';
import { DummyRestService } from './dummy-rest.service';

describe('DummyRestController', () => {
  let controller: DummyRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DummyRestController],
      providers: [DummyRestService],
    }).compile();

    controller = module.get<DummyRestController>(DummyRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
