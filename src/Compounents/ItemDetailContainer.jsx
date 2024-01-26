import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({ title, detailedDescription, img, Price }) => {
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
      <p className="text-xl font-bold mb-4">Precio: ${Price}</p>

      <Link to="/catalogo/producto" className="btn btn-active btn-primary mt-4">
        Volver al Catálogo
      </Link>
    </div>
  );
};

export default ItemDetail;
