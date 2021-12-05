import { Module } from '@nestjs/common';
import { MydataService } from './mydata.service';
import { MydataController } from './mydata.controller';

import { Mydata} from '../entities/mydata.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
imports: [TypeOrmModule.forFeature([Mydata])],
  providers: [MydataService],
  controllers: [MydataController]
})
export class MydataModule {}
