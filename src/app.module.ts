import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import * as dotenv from "dotenv";
dotenv.config({ path: "./.env.development" });

@Module({
  imports: [DrizzlePostgresModule.register({
      tag: 'DB_DEV',
      postgres: {
        url: process.env.DATABASE_URL,
      }
  })],
  controllers: [MovieController],
  providers: [MovieService],
})

export class AppModule {}
