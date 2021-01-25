//imports
import express from 'express';
import { appRouter } from './routes/route.app.js';

// app & port
const app = express();
const port = process.env.PORT || 5000;

//tell app to use routes
app.use('/', appRouter);

//listen on assigned env port or default port
app.listen(process.env.PORT || port, () =>
  console.log(` App LIstening at http://localhost:${port}`)
);
