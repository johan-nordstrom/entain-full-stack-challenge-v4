import { Module } from '@nestjs/common';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { ConfigModule } from '@nestjs/config';
import {DBConfigService} from "./database/dbconfig.service";
import {MovieModule} from "./movie/movie.module";

@Module({
  imports: [
      MovieModule,
      DrizzlePostgresModule.registerAsync({
            tag: 'DB_DEV',
            useClass: DBConfigService,
      }),
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env.development']
      },
  )],
})

export class AppModule {}
