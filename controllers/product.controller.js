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

export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const deleteProductByID = async (req, res) => {
  const productID = req.body.productID;
  try {
    const deletProduct = await Product.findByIdAndRemove(productID);
    if (!deletProduct) return res.status(400)({ Message: 'Item with that productID is not found' });
    console.log('Deleted: ${productID}');
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ Message: `Invalid Product ${err}` });
  }
};
