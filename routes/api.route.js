//imports
import { Router } from 'express';

//export appRouter instance
export const apiRouter = Router();

// "/api" Route  that returns a JSON object
apiRouter.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
    email: 'YourEmail@SomeAddress.com',
    data: 'Returning some JSON data',
    source: { one: 'one', two: 'two' },
    members: ['Wanda', 'Vision', 'Mephisto'],
  });

  res.end();
});
