import React from 'react';
import { CardDeck } from 'react-bootstrap';

import ProductItem from './ProductItem';

const Shop = (props) => {
  const { products, addToCart } = props;
  const cards = products.map((item, key) => {
    return (
      <ProductItem
        item={item}
        key={key}
        addToCard={() => addToCart(item._id)}
      />
    );
  });
  return (
    <CardDeck
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        marginLeft: '1px',
      }}
    >
      {cards}
    </CardDeck>
  );
};

export default Shop;
