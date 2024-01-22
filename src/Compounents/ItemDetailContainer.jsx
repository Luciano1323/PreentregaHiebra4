// ItemDetail.js
import React from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ title, detailedDescription, img, onAddToCart }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('${img}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px",
  };

  return (
    <div className="p-20 bg-primary mb-4 mt-16">
      <div style={backgroundImageStyle} className="mb-8"></div>
      <h2 className="text-3xl mb-4">{title}</h2>
      <p>{detailedDescription}</p>
      <button
        className="btn btn-active btn-primary"
        onClick={() => onAddToCart({ title, detailedDescription, img })}
      >
        Agregar al carrito
      </button>
      <Link to="/catalogo/producto" className="btn btn-active btn-primary mt-4">
        Volver al Catálogo
      </Link>
    </div>
  );
};

export default ItemDetail;
