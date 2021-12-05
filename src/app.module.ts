import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MydataModule } from './mydata/mydata.module';

@Module({
  imports: [TypeOrmModule.forRoot(), MydataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
