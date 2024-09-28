import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/schema.ts',
  out: './drizzle',
  dbCredentials: {
    host: process.env.PGHOST!,
    user: process.env.PGUSER!,
    port: Number(process.env.PGPORT),
    database: process.env.PGDATABASE!,
    password: process.env.PGPASSWORD || undefined,
    ssl: process.env.ENV !== 'development',
  },
});
