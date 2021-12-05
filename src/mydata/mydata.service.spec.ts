import { Test, TestingModule } from '@nestjs/testing';
import { MydataService } from './mydata.service';

describe('MydataService', () => {
  let service: MydataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MydataService],
    }).compile();

    service = module.get<MydataService>(MydataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
