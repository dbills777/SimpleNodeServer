//imports
import { Router } from 'express';

// use product.conroller for exporting functions
import {
  postAddProduct,
  getAllProducts,
  deleteProductByID,
  getProductsThen,
  getProductByID,
  updateOneProduct,
} from '../controllers/product.controller.js';

//export appRouter instances
export const productRouter = Router();

//TODO  could add more paths for /api route here
// "/" Route  that returns a JSON object
productRouter.post('/', postAddProduct);
// extra example of other method of getting products.
productRouter.get('/then', getProductsThen);
productRouter.get('/', getAllProducts);
productRouter.get('/getone', getProductByID);
productRouter.put('/updateone', updateOneProduct);
productRouter.delete('/', deleteProductByID);
