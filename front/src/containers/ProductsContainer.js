import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getProducts,
  deleteProduct,
  addNewProduct,
  updateProduct,
} from '../actions/productActions';
import { compose } from 'redux';

import Products from '../component/Products/Products';

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  render() {
    const { products, deleteProduct, addNewProduct, updateProduct } =
      this.props;
    return (
      <Products
        products={products}
        deleteProduct={deleteProduct}
        addNewProduct={addNewProduct}
        updateProduct={updateProduct}
        getBase64={this.getBase64}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productsPage.products,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProducts,
    deleteProduct,
    addNewProduct,
    updateProduct,
  })
)(ProductsContainer);
