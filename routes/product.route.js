//imports
import { Router } from 'express';

// use product.conroller for exporting functions
import { postAddProduct, getAllProducts } from '../controllers/product.controller.js';

//export appRouter instances
export const productRouter = Router();

//TODO  could add more paths for /api route here
// "/" Route  that returns a JSON object
productRouter.post('/', postAddProduct);
productRouter.get('/', getAllProducts);
