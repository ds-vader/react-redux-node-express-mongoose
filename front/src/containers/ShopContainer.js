import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { compose } from 'redux';

import Shop from '../component/Shop/Shop';

class ShopContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;
    return <Shop products={products} addToCart={this.props.addToCart} />;
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsPage.products,
  };
};

export default compose(connect(mapStateToProps, { getProducts, addToCart }))(
  ShopContainer
);
