import { DataSource } from 'typeorm';
import 'dotenv/config';

const PORT = process.env.DB_PORT as number | undefined;

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: ['./src/modules/*/database/entities/*.{ts, js}'],
  migrations: ['./src/shared/typeorm/migrations/*']
});

export default AppDataSource;
