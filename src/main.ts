import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";
import {Logger} from "@nestjs/common";

async function run() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('port');
  await app.listen(port || 3000, () =>
      Logger.log(`App listening on port http://localhost:${port}`),
  );
}
run();
