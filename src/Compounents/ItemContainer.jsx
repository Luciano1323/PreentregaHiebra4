// En ItemContainer.jsx

import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import coffesData from "../Data/Coffes";
import FondoMasDetalles from "../assets/FondoMasDetalles.jpg";

const ItemContainer = () => {
  const { id } = useParams();
  const selectedItem = coffesData.find((item) => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return <p>Producto no encontrado</p>;
  }

  const backgroundImageStyle = {
    backgroundImage: `url('${FondoMasDetalles}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    padding: "20px",
  };

  return (
    <div style={backgroundImageStyle}>
      <ItemDetail
        title={selectedItem.title}
        detailedDescription={selectedItem.detailedDescription}
        img={selectedItem.img}
      />
      {/* Otro contenido del componente */}
    </div>
  );
};

export default ItemContainer;

