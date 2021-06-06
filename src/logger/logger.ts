import { createLogger, format, transports } from 'winston';

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

export { logger, errorLoger };
