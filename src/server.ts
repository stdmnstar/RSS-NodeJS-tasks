import 'reflect-metadata';

import { initializeDB } from './db';
import { errorLogerSimp } from './logger/logger';
import { PORT } from './common/config';
import app from './app';

(async () => {
  try {
    await initializeDB()
  } catch (err) {
    errorLogerSimp(err, 'Failed to connect to DB!')

  }

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
})();

