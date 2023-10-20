import { Test, TestingModule } from '@nestjs/testing';
import { MaresService } from './mares.service';

describe('MaresService', () => {
  let service: MaresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaresService],
    }).compile();

    service = module.get<MaresService>(MaresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
