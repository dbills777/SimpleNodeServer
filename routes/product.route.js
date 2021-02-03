//imports
import { Router } from 'express';

// use product.conroller for exporting functions
import { postAddProduct } from '../controllers/product.controller.js';

//export appRouter instance
export const productRouter = Router();

//TODO  could add more paths for /api route here
// "/" Route  that returns a JSON object
productRouter.post('/', postAddProduct);
