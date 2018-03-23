import express from 'express';
import setMiddlewares from './config/middlewares';
//import { router } from './api';
//import { signin, protect } from './api/modules/auth';

// Declare an express app
const app = express();

// Set global middlewares
setMiddlewares(app);

// Set API routes
//app.use('/signin', signin);
//app.use('/api', protect, router);
// catch all
app.all('*', (req, res) => {
  res.json({ ok: true });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(401).send(`Error! ${err.message}`);
});

export default app;
