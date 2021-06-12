import { createLogger, format, transports } from 'winston';
import { appendFileSync } from 'fs';

const logFile = './logs/log.log';
const errorFile = './logs/error.log';

const logger = createLogger({
  exitOnError: false,

  transports: [
    new transports.Console({
      level: 'debug',
      format: format.combine(format.colorize(), format.cli()),
    }),
    new transports.File({
      filename: logFile,
      level: 'info',
      format: format.json(),
    }),
    new transports.File({
      filename: errorFile,
      level: 'error',
      format: format.json(),
    }),
  ],
});

const errorLoger = (error: Error, url: string, method: string, statusCode: number): void => {
  logger.error(`Error: ${method} - ${error.message} - ${url} - ${statusCode}`);
};

const errorLogerUnhandledRejection = (reason: Error, promise: Promise<void>): void => {
  logger.error(`Unhandled Rejection at:, ${JSON.stringify(promise)}, reason:, ${reason.message} \n`);
};

const errorLogerSync = (error: string): void => {
  appendFileSync(errorFile, error);
  appendFileSync(logFile, error);
};

export { logger, errorLoger, errorLogerSync, errorLogerUnhandledRejection };
