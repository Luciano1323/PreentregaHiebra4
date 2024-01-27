import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetailContainer';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import coffesData from '../Data/Coffes';
import FondoMasDetalles from '../assets/FondoMasDetalles.jpg';

const ItemContainer = () => {
  const { id } = useParams();
  const selectedItem = coffesData.find((item) => item.id === parseInt(id, 10));

  if (!selectedItem) {
    return <p>Producto no encontrado</p>;
  }

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url('${FondoMasDetalles}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: '20px',
  };

  const containerStyle = {
    maxWidth: windowWidth > 600 ? '80%' : '20%', // Reduz el ancho en pantallas pequeñas
    maxHeight: windowHeight > 100 ? '20%' : '100vh', // Reduz la altura en pantallas pequeñas
    margin: '0 auto',
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={containerStyle} className="item-container">
        <ItemDetail
          title={selectedItem.title}
          detailedDescription={selectedItem.detailedDescription}
          img={selectedItem.img}
          Price={selectedItem.Price}
          product={selectedItem}
        />
      </div>
    </div>
  );
};

export default ItemContainer;
