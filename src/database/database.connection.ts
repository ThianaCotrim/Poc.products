import pg from 'pg';

const { Pool } = pg;

const configDataBase: pg.PoolConfig = {
  connectionString: 'postgres://gixeoesk:OPy65Fl6A9KyYTnBV4OnDND-9EaVu_2j@mahmud.db.elephantsql.com/gixeoesk',
  ssl: process.env.MODE === 'prod' ? true : undefined,
};

console.log('Database running');

export const db = new Pool(configDataBase);

