import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updatedCartCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(updatedCartCount);
  }, [cart]);

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex((item) => item.product.id === product.id);
  
    if (existingProductIndex === -1) {
      setCart([...cart, { product, quantity }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
