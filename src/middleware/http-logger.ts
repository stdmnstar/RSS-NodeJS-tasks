
import moment from 'moment';
import { finished } from 'stream';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger/logger';


const httpLogger = (req: Request, res: Response, next: NextFunction): void => {
  const { method, originalUrl, body, query } = req;
  const start = Date.now();

  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;
    logger.info(
      `${moment().format('YYYY-MM-DD hh:mm:ss')}
      ${method}, ${decodeURI(originalUrl)},
      ${JSON.stringify(query)},      
      ${JSON.stringify(body)}, 
      ${statusCode} [${ms}ms]`
    );
  });
};

export { httpLogger };
