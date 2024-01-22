import React, { useState } from 'react';
import CartImage from '../assets/carrito.png';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(3);

  // Función para incrementar el contador del carrito
  const handleIncrement = () => {
    setCartCount(cartCount + 1);
  };

  // Función para decrementar el contador del carrito
  const handleDecrement = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="relative right-4">
      <div className="relative">
        <img src={CartImage} alt="Carrito de compras" className="w-8 h-8 cursor-pointer" />
        {cartCount > 0 && (
          <div className="absolute top-5 left-5 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
            {cartCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartWidget;