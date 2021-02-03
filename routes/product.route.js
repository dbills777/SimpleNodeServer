//imports
import { Router } from 'express';

// use product.conroller for exporting functions
import { product } from '../controllers/product.controller.js';

//export appRouter instance
export const productRouter = Router();

//TODO  could add more paths for /api route here
// "/" Route  that returns a JSON object
productRouter.get('/', product);
