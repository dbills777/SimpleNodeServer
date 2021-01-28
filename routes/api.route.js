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
appRouter.get('/api', (req, res) => {
  res.json({
    message: 'Hello World',
    email: 'YourEmail@SomeAddress.com',
    data: 'Returning some JSON data',
    source: { one: 'one', two: 'two' },
    members: ['Wanda', 'Vision', 'Mephisto'],
  });

  res.end();
});
