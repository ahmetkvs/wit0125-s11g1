import { createContext, useState } from 'react';
import { data } from '../data';
import useLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

export function CarttContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage('s11g1', []);

  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const removeItem = (id) => {
    const filtered = cart.filter((product) => product.id !== id);
    setCart(filtered);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
