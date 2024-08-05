import path from 'path';
import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true // Necesario para SQLite
  },
  production: {
    client: 'pg',
    connection: {
      host: 'your-production-host',
      user: 'your-production-user',
      password: 'your-production-password',
      database: 'your-production-database'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};

export default config;
module.exports = config;
