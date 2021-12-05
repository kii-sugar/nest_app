import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { Board } from '../entities/board.entity';
import { Mydata } from '../entities/mydata.entity';
import { MydataService } from '../mydata/mydata.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Mydata])],
  providers: [BoardService, MydataService],
  controllers: [BoardController]
})
export class BoardModule {}
