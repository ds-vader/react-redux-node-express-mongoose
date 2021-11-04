import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

export const productAPI = {
  addProduct(newProduct) {
    return instance.post('products/', newProduct);
  },

  deleteProduct(productId) {
    return instance.delete(`products/${productId}`);
  },

  getProducts() {
    return instance.get('products');
  },

  updateProduct(id, updatedProduct) {
    return instance.patch(`products/${id}`, updatedProduct);
  },

  updateManyProducts(payload) {
    return instance.put('products/', payload);
  },
};
