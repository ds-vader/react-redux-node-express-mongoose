import mongoose from 'mongoose';
import ProductModule from '../models/productModel.js';

export const getProducts = async (req, res) => {
  try {
    const productModule = await ProductModule.find();

    res.status(200).json(productModule);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body;

  const newProduct = new ProductModule(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send('No product with that id');

  const updatedProduct = await ProductModule.findByIdAndUpdate(_id, product);

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('No product with that id');

  await ProductModule.findByIdAndRemove(id);

  res.json({ message: 'Product deleted successfully' });
};

export const updateManyProduct = async (req, res) => {
  const { id: _id } = req.params;
  const products = req.body;

  const productModule = await ProductModule.find();

  const testResult = productModule.map((x) => {
    const result = products.filter((a1) => a1._id == x._id);
    if (result.length > 0) {
      x.count = x.count - result[0].count;
    }
    return x;
  });

  const updatedProducts = await ProductModule.updateMany(
    { id: _id },
    { $set: { count: 10 } }
  );
  res.json(updatedProducts);
};
