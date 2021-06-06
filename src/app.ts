import express, { Request, Response, NextFunction } from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';
import YAML from 'yamljs';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';
import { httpLoggerMiddleware } from './middleware/http-logger';
import { errorHandlerMiddleware } from './middleware/errorHandler';
import { errorLogerSync, errorLogerUnhandledRejection } from './logger/logger';

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use(httpLoggerMiddleware);

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);

app.use(errorHandlerMiddleware);

process.on('uncaughtException', (error: Error, origin: string) => {
  errorLogerSync(`Origin: ${origin}; Message: ${error.message}\n`);
  process.exit(1);
});

process.on('unhandledRejection', (reason: Error, promise: Promise<void>) => {
  errorLogerUnhandledRejection(reason, promise);
});

export default app;
