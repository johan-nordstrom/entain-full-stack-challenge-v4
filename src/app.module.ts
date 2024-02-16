import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import { ConfigModule } from '@nestjs/config';
import {DBConfigService} from "./database/dbconfig.service";

@Module({
  imports: [
      DrizzlePostgresModule.registerAsync({
            tag: 'DB_DEV',
            useClass: DBConfigService,
      }),
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: ['.env.development']
  })],
  controllers: [MovieController],
  providers: [MovieService],
})

export class AppModule {}
