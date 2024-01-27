import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ title, detailedDescription, img, Price, product }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('${img}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "300px",
  };

  return (
    <div className="p-8 bg-primary mb-4 mt-8 md:mt-16">
      <div style={backgroundImageStyle} className="mb-4 md:mb-8"></div>
      <div className="item-detail-content">
        <h2 className="text-2xl md:text-3xl mb-2 md:mb-4">{title}</h2>
        <p>{detailedDescription}</p>
        <p className="text-lg md:text-xl font-bold mb-2 md:mb-4">Precio: ${Price}</p>
        <ItemCount product={product} />
        <Link to="/catalogo/producto" className="btn btn-active btn-primary mt-2 md:mt-4 bottom-10 md:bottom-16">
          Volver al Catálogo
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
