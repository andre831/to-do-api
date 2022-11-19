import pgPromise from 'pg-promise';

const base = {
  user: 'node',
  password: 'node123',
  host: 'localhost',
  port: 5432,
  database: 'node_mvp'
};

const pgp = pgPromise({});
const db = pgp(base);

export { db };
