import 'reflect-metadata';

import { initializeDB } from './db';
import { errorLogerSimp } from './logger/logger';
import { PORT } from './common/config';


(async () => {
  try {
    await initializeDB()
  } catch (err) {
    errorLogerSimp(err, 'Failed to connect to DB!')

  }
  const app = await import('./app')
app.default.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
})();

