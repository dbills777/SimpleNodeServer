//imports
import express from 'express';
import bodyparser from 'body-parser'
import { apiRouter } from './routes/api.route.js';
import {productRouter} from './routes/product.route.js'
import path from 'path';


// path imports and constants for serving public files
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app & port
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyparser.urlencoded({extended: false}))

//tell apiRouter to serve public folder
app.use(express.static('public'));

//tell app to use routes
app.use('/api', apiRouter);
app.use('/product', productRouter);

// 404 page error
app.use((req, res, next) => {
  res.sendFile('./public/404.html', { root: __dirname });
});

//listen on assigned env port or default port
app.listen(process.env.PORT || port, () =>
  console.log(` App LIstening at http://localhost:${port}`)
);
