import { NextFunction, Request, Response } from 'express';
import { errorLoger } from '../logger/logger';
import { NotFoundError } from './errors';

const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): void => {
  const { method, originalUrl } = req;
  const { statusCode } = res;

  if (err instanceof NotFoundError) {
    errorLoger(err, originalUrl, method, statusCode);
    res.status(404).send(err.message);
    return;
  }

  if (err) {
    errorLoger(err, originalUrl, method, statusCode);
    res.status(500).send('Internal server error');
  }

  next();
};

export { errorHandlerMiddleware };
