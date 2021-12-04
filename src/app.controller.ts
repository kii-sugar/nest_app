import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // service.tsで宣言したクラスをDI
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index') // index.ejsテンプレートを使うことを指定
  root() {
    // index.ejsテンプレートに必要な情報をまとめてreturn
    return {
      title: 'Nest sample app',
      msg: 'messagemessage'
    }
  }

  @Post('/')
  send(@Body() form:any) {
    return form
  }
}
