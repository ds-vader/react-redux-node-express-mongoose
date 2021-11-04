import { productAPI } from '../api/api';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REDUCE_QUANTITY_IN_CART,
  RECEIVE_PRODUCTS,
} from '../constants/ActionTypes';
import { getIndexById } from '../helpers/getIndexById';

const addToCartUnsafe = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

const removeFromCartUnsafe = (id, count) => ({
  type: REMOVE_FROM_CART,
  id,
  count,
});

const reduceQuantityUnsafe = (id) => ({
  type: REDUCE_QUANTITY_IN_CART,
  id,
});

const receiveProductsUnsafe = (payload) => ({
  type: RECEIVE_PRODUCTS,
  payload,
});

export const addToCart = (productId) => (dispatch, getState) => {
  const idx = getIndexById(getState().productsPage.products, productId);
  const { productName, price } = getState().productsPage.products[idx];
  const payload = { _id: productId, productName, price };
  if (getState().productsPage.products[idx].count > 0) {
    dispatch(addToCartUnsafe(payload));
  }
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  const idx = getIndexById(getState().cartPage.cartItems, productId);
  const count = getState().cartPage.cartItems[idx].count;
  if (idx !== -1) {
    dispatch(removeFromCartUnsafe(productId, count));
  }
};

export const reduceQuantityInCart = (productId) => (dispatch, getState) => {
  const idx = getIndexById(getState().cartPage.cartItems, productId);
  if (idx !== -1) {
    dispatch(reduceQuantityUnsafe(productId));
  }
};

// export const receiveProducts = () => (dispatch, getState) => {
//   const cartItems = getState().cartPage.cartItems;
//   if (cartItems.length > 0) {
//     dispatch(receiveProductsUnsafe(cartItems));
//   }
// };

export const receiveProducts = () => {
  return (dispatch, getState) => {
    const cartItems = getState().cartPage.cartItems;
    if (cartItems.length > 0) {
      productAPI.updateManyProducts(cartItems).then(() => {
        dispatch(receiveProductsUnsafe(cartItems));
      });
    }
  };
};

/**
 * export const updateProduct = (id, product) => {
  return (dispatch) => {
    productAPI.updateProduct(id, product).then(() => {
      dispatch(updateProductUnsafe(product));
    });
  };
};

 */
