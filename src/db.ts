import { Connection, createConnection } from 'typeorm';
import { DB_HOST, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER } from './common/config';
import Board from './resources/boards/board.model';
import BoardColumn from './resources/columns/column.model';
import Task from './resources/tasks/task.model';
import User from './resources/users/user.model';
import { InitMigration } from './migrations/init';


let connection: Connection | null = null

export const initializeDB = async () => {
  connection = await createConnection({
    type: 'postgres',
    host: DB_HOST,
    port: POSTGRES_PORT,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    entities: [User, Board, BoardColumn, Task],
    migrations: [InitMigration],
    migrationsRun: true,
  })

  return connection
}

export const getConnection = () => connection
