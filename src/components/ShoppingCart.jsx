import React, { useContext } from 'react';
import { ScCartCheckout } from './scParts';
import { CartContext } from '../contexts/CartContext.jsx';
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const getCartTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cart.map((item) => (
        <Item key={item.id} {...item} removeItem={removeItem} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;
