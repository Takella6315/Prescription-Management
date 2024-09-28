import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schema';

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  ssl: process.env.ENV !== 'development',
});

export const db = drizzle(pool, { schema });
