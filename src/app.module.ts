import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MydataModule } from './mydata/mydata.module';
import { BoardModule } from './board/board.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MydataModule, BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
