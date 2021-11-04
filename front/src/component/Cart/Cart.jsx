import React from 'react';
import { Table, ButtonGroup, Button } from 'react-bootstrap';

const Card = (props) => {
  const {
    cartItems,
    cartSum,
    addToCart,
    removeFromCart,
    reduceQuantityInCart,
    receiveProducts,
  } = props;

  return (
    <div style={{ backgroundColor: 'lightgreen' }}>
      <h1>Cart</h1>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Count</th>
            <th></th>
            <th>Price</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, i) => (
            <tr key={i}>
              <td>{item.productName}</td>
              <td>
                <ButtonGroup>
                  <Button
                    onClick={() => reduceQuantityInCart(item._id)}
                    variant="outline-danger"
                    size="sm"
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.count}</span>
                  <Button
                    onClick={() => addToCart(item._id)}
                    variant="outline-success"
                    size="sm"
                  >
                    +
                  </Button>
                </ButtonGroup>
              </td>
              <td> x </td>
              <td>{item.price}$</td>
              <td>{item.count * item.price}$</td>
              <td>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    if (
                      window.confirm(
                        'Are you sure you wish to delete this product?'
                      )
                    ) {
                      removeFromCart(item._id);
                    }
                  }}
                >
                  x
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <strong>Total :</strong>
            </td>
            <td>{cartSum}$</td>
            <td>
              <Button size="sm" onClick={() => receiveProducts()}>
                Buy
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Card;
