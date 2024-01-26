import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartImage from '../assets/carrito.png';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const navigate = useNavigate();
  const { cartCount } = useContext(CartContext);

  return (
    <div className="relative right-4">
      <div className="relative">
        <img
          src={CartImage}
          alt="Carrito de compras"
          className="w-8 h-8 cursor-pointer"
          onClick={() => navigate('/cart')}
        />
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

