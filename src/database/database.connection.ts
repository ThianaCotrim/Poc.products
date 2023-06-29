import pg from 'pg'
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const configDataBase: pg.PoolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.MODE === 'prod' ? true : undefined,
};

console.log('banco rodando');
export const db = new Pool(configDataBase);