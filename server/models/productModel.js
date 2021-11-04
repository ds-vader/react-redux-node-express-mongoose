import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  productName: String,
  price: Number,
  count: Number,
  manufactureDate: Date,
  bestBefore: Date,
  productImage: String,
});

const ProductModule = mongoose.model('ProductModule', productSchema);

export default ProductModule;
