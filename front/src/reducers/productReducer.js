import {
  SET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REDUCE_QUANTITY_IN_CART,
  UPDATE_PRODUCT,
} from '../constants/ActionTypes';

import { getIndexById } from '../helpers/getIndexById';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  let idx = '';
  let targetProduct = {};
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((i) => i._id !== action.productId),
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.newProduct),
      };
    case ADD_TO_CART:
      idx = getIndexById(state.products, action.payload._id);
      targetProduct = { ...state.products[idx] };
      targetProduct.count--;

      return {
        ...state,
        products: [
          ...state.products.slice(0, idx),
          targetProduct,
          ...state.products.slice(idx + 1),
        ],
      };
    case REMOVE_FROM_CART:
      idx = getIndexById(state.products, action.id);
      targetProduct = { ...state.products[idx] };
      targetProduct.count += action.count;
      return {
        ...state,
        products: [
          ...state.products.slice(0, idx),
          targetProduct,
          ...state.products.slice(idx + 1),
        ],
      };
    case REDUCE_QUANTITY_IN_CART:
      idx = getIndexById(state.products, action.id);
      targetProduct = { ...state.products[idx] };
      targetProduct.count++;

      return {
        ...state,
        products: [
          ...state.products.slice(0, idx),
          targetProduct,
          ...state.products.slice(idx + 1),
        ],
      };
    case UPDATE_PRODUCT:
      const products = state.products.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );

      return {
        ...state,
        products,
      };
    default:
      return state;
  }
};

export default productsReducer;
