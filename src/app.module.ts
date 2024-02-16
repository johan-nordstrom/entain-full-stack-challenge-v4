import { Module } from '@nestjs/common';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { ConfigModule } from '@nestjs/config';
import {DBConfigService} from "./database/dbconfig.service";
import {MovieModule} from "./movie/movie.module";
import configuration from '../config/configuration';

@Module({
  imports: [
      MovieModule,
      DrizzlePostgresModule.registerAsync({
            tag: 'DB_DEV',
            useClass: DBConfigService,
      }),
      ConfigModule.forRoot({
          isGlobal: true,
          load: [configuration]
      },
  )],
})

export class AppModule {}