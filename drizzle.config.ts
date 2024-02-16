import type { Config } from 'drizzle-kit';
import * as Configuration from "config/configuration";

export default {
  schema: './src/database/schema.ts',
  out: './src/database/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: Configuration.default().connectionString,
  },
} satisfies Config;
