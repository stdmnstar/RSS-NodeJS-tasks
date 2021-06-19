// import config from './common/config';
// import app from './app';

// app.listen(config.PORT, () =>
//   console.log(`App is running on http://localhost:${config.PORT}`)
// );

import 'reflect-metadata';
import { initializeDB } from './db';
import { errorLogerSimp } from './logger/logger';
import config from './common/config';

(async () => {
  try {
     await initializeDB()
  } catch (err) {
    errorLogerSimp(err, 'Failed to connect to DB!')
    return
  }

  const app = import('./app')
  app.listen(config.PORT, () =>
  console.log(`App is running on http://localhost:${config.PORT}`)
  );
})()
