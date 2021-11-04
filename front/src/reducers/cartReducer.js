import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REDUCE_QUANTITY_IN_CART,
  RECEIVE_PRODUCTS,
} from '../constants/ActionTypes';
import { getIndexById } from '../helpers/getIndexById';

const initialState = {
  cartItems: [],
};

const cardReducer = (state = initialState, action) => {
  let idx = '';
  let target = '';
  const cartItemsCopy = JSON.parse(JSON.stringify(state.cartItems));
  switch (action.type) {
    case ADD_TO_CART:
      idx = getIndexById(state.cartItems, action.payload._id);
      if (idx === -1) {
        const obj = { ...action.payload, count: 1 };
        return {
          ...state,
          cartItems: state.cartItems.concat(obj),
        };
      } else {
        target = cartItemsCopy[idx];
        target.count++;
        return {
          ...state,
          cartItems: cartItemsCopy,
        };
      }
    case REMOVE_FROM_CART:
      idx = getIndexById(state.cartItems, action.id);
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, idx),
          ...state.cartItems.slice(idx + 1),
        ],
      };
    case REDUCE_QUANTITY_IN_CART:
      idx = getIndexById(state.cartItems, action.id);
      target = cartItemsCopy[idx];
      if (target.count === 1) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, idx),
            ...state.cartItems.slice(idx + 1),
          ],
        };
      }
      target.count--;
      return {
        ...state,
        cartItems: cartItemsCopy,
      };
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cardReducer;
