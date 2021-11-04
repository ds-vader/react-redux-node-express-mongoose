import express from 'express';
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  updateManyProduct,
} from '../controllers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.put('/', updateManyProduct);

export default router;
