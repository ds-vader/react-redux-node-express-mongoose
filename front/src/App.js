import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navibar from './component/Navibar/Navibar';
import ProductsContainer from './containers/ProductsContainer';
import ShopContainer from './containers/ShopContainer';
import CartContainer from './containers/CartContainer';

const LeftRight = ({ left, right }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Navibar />
        <Route
          exact
          path="/"
          render={() => (
            <LeftRight left={<ShopContainer />} right={<CartContainer />} />
          )}
        />
        <Route path="/products" render={() => <ProductsContainer />} />
      </Router>
    </div>
  );
}

export default App;
