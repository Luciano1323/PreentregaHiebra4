// Start.jsx
import React from 'react';
import Overlay from '../Compounents/Overlay';
import FondoHero from '../assets/ImagenFondoHero2.jpg';

const Start = () => {
  const backgroundImageUrl = `url(${FondoHero})`;

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="hero h-screen w-screen bg-cover bg-center" style={{ backgroundImage: backgroundImageUrl, backgroundSize: 'cover' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold text-white">Bienvenido a tu tienda de Cafe!</h1>
            <p className="mb-5 text-white">El mejor cafe en tu mejor lugar.</p>
          </div>
          <Overlay />
        </div>
      </div>
    </div>
  );
};

export default Start;
