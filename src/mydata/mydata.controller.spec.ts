import { Test, TestingModule } from '@nestjs/testing';
import { MydataController } from './mydata.controller';

describe('MydataController', () => {
  let controller: MydataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MydataController],
    }).compile();

    controller = module.get<MydataController>(MydataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
