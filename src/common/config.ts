import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});



export const {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  JWT_SECRET_KEY,
  TIME_ZONE,
  DB_HOST,
} = process.env;

export const AUTH_MODE = process.env['AUTH_MODE'] === 'true';
export const POSTGRES_PORT = Number(process.env['POSTGRES_PORT'])
