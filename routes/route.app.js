//imports
import express from 'express';
import { Router } from 'express';

//export appRouter instance
export const appRouter = Router();

//tell appRouter to serve public folder
appRouter.use(express.static('public'));

//tell app what file to server from the public folder
appRouter.get('/', (req, res) => {
  res.sendFile('./index.html');
});
// "/api" Route  that returns a JSON object
appRouter.get('/json', (req, res) => {
  res.json({
    message: 'Hello World',
    email: 'someemail@address.com',
    data: 'some more json data',
    source: 'hello from the /json route'
  });

  res.end();
});
