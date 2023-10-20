import { Test, TestingModule } from '@nestjs/testing';
import { MaresController } from './mares.controller';

describe('MaresController', () => {
  let controller: MaresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MaresController],
    }).compile();

    controller = module.get<MaresController>(MaresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
