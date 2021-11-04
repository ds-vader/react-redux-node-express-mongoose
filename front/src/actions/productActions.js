import { productAPI } from '../api/api';
import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from '../constants/ActionTypes';

const setProducts = (products) => ({ type: SET_PRODUCTS, products });

const updateProductUnsafe = (payload) => ({
  type: UPDATE_PRODUCT,
  payload,
});

const deleteProductUnsafe = (productId) => ({
  type: DELETE_PRODUCT,
  productId,
});

const addNewProductUnsafe = (newProduct) => ({
  type: ADD_PRODUCT,
  newProduct,
});

export const getProducts = () => {
  return (dispatch) => {
    productAPI.getProducts().then((response) => {
      dispatch(setProducts(response.data));
    });
  };
};

export const deleteProduct = (productId) => {
  return (dispatch) => {
    productAPI.deleteProduct(productId).then(() => {
      dispatch(deleteProductUnsafe(productId));
    });
  };
};

export const addNewProduct = (newProduct) => {
  return (dispatch) => {
    productAPI.addProduct(newProduct).then((response) => {
      dispatch(addNewProductUnsafe(response.data));
    });
  };
};

export const updateProduct = (id, product) => {
  return (dispatch) => {
    productAPI.updateProduct(id, product).then(() => {
      dispatch(updateProductUnsafe(product));
    });
  };
};
