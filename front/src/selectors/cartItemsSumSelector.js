import { createSelector } from 'reselect';

const getCartItems = (state) => state.cartPage.cartItems;

export const getCartItemsSumSelector = createSelector(getCartItems, (items) =>
  items.reduce((sum, item) => sum + item.price * item.count, 0)
);
