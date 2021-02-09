import { Product } from '../models/local_product.js';

export const postAddProduct = (req, res) => {
  const product = new Product(req.body.title, req.body.price);
  console.log(product);
  product.save();
  res.json(product);
};
export const getAllProducts = (req, res) => {
  res.json(Product.fetchAll());
};
