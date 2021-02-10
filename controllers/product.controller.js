import { Product } from '../models/product.js';

export const postAddProduct = (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    imgURL: req.body.imgURL,
  });
  console.log(product);
  product.save();
  res.json(product);
};
export const getAllProducts = (req, res) => {
  res.json(Product.fetchAll());
};
