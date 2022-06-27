import React, { createContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(CartReducer, {
    shoppingCart: [],
    total: 0,
    qty: 0,
  });

  return (
    <CartContext.Provider value={{ ...cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
