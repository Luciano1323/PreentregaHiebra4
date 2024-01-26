import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const ItemCount = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [contador, setContador] = useState(0);
  const [agregado, setAgregado] = useState(false);

  const sumar = () => {
    if (contador < 10) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const agregarAlCarrito = () => {
    if (contador > 0) {
      addToCart(product, contador);
      setAgregado(true);
    }
  };

  return (
    <div className="min-h-screen min-w-screen items-center bg-brown p-4">
      {agregado ? (
        <Link to="/cart" className=" bg-green-400 btn btn-active btn-green mt-4">
          Ver Carrito
        </Link>
      ) : (
        <>
          <button onClick={sumar} className="btn btn-active btn-green mt-4">
            +
          </button>
          <span className="btn btn-active btn-green mt-4">{contador}</span>
          <button onClick={restar} className="btn btn-active btn-green mt-4">
            -
          </button>
          <button onClick={agregarAlCarrito} className="btn btn-active btn-green mt-4">
            Agregar al carrito ({contador})
          </button>
        </>
      )}
    </div>
  );
};

export default ItemCount;
