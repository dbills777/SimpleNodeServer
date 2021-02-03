import  {Product}  from '../models/local_product.js';

export const postAddProduct = (req, res) => {
  const product = new Product('Yoda', '$49.99')
  console.log(product)
  product.save()
  res.redirect('/')
};
