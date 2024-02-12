import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import FondoMasDetalles from '../assets/FondoMasDetalles.jpg';
import coffesData from "../Data/Coffes.js";

const ItemContainer = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const db = getFirestore();
        const itemDoc = doc(db, 'coffesData', id);
        const itemSnap = await getDoc(itemDoc);
        if (itemSnap.exists()) {
          const itemData = itemSnap.data();
          setSelectedItem({ ...itemData, id: itemSnap.id, img: getImageFromLocalData(itemSnap.id) });
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    const getImageFromLocalData = (itemId) => {
      const item = coffesData.find(coffee => coffee.id === itemId);
      return item ? item.img : null;
    };

    fetchItem();

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [id]);

  if (!selectedItem) {
    return <p>Cargando producto...</p>;
  }

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
          img={selectedItem.img} // La imagen ahora se obtiene de los datos locales
          Price={selectedItem.Price}
          product={selectedItem}
        />
      </div>
    </div>
  );
};

export default ItemContainer;
