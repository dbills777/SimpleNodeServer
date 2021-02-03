export const product = (req, res) => {
  res.json({
    name: 'Some Cool Item',
    price: 30.99,
    description: 'Some description goes here',
  });
};