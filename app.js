//imports
import express from 'express';
import { apiRouter } from './routes/api.route.js';

// app & port
const app = express();
const port = process.env.PORT || 5000;

//tell apiRouter to serve public folder
app.use(express.static('public'));

//tell app to use routes
app.use('/api', apiRouter);

//listen on assigned env port or default port
app.listen(process.env.PORT || port, () =>
  console.log(` App LIstening at http://localhost:${port}`)
);
