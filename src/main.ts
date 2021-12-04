import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { resolve, join } from 'path'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,)

  // 静的ファイルの保管場所を指定「public」フォルダにイメージファイルなどのリソースを配置する
  app.useStaticAssets(join(__dirname, '..', 'public'))
  // ビューテンプレートの保管場所を設定「views」フォルダにテンプレートファイルを配置する
  app.setBaseViewsDir(resolve('./src/views'))
  // テンプレートエンジンをejsに設定
  app.setViewEngine('ejs')

  // 3000番ポートでサーバの起動
  await app.listen(3000);
}
bootstrap();
