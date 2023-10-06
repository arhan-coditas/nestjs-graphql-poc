import { Test, TestingModule } from '@nestjs/testing';
import { DummyRestService } from './dummy-rest.service';

describe('DummyRestService', () => {
  let service: DummyRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DummyRestService],
    }).compile();

    service = module.get<DummyRestService>(DummyRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
