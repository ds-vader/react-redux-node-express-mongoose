import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  reduceQuantityInCart,
  receiveProducts,
} from '../actions/cartActions';
import { compose } from 'redux';

import { getCartItemsSumSelector } from '../selectors/cartItemsSumSelector';
import Cart from '../component/Cart/Cart';

class CartContainer extends Component {
  render() {
    const {
      cartItems,
      addToCart,
      removeFromCart,
      reduceQuantityInCart,
      cartSum,
      receiveProducts,
    } = this.props;

    return (
      <Cart
        cartItems={cartItems}
        cartSum={cartSum}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        reduceQuantityInCart={reduceQuantityInCart}
        receiveProducts={receiveProducts}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartPage.cartItems,
    cartSum: getCartItemsSumSelector(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    addToCart,
    removeFromCart,
    reduceQuantityInCart,
    receiveProducts,
  })
)(CartContainer);
