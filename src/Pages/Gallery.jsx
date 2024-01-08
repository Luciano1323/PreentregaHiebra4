import React from 'react';
import Imagen1 from '../assets/GaleriaFoto1.jpg';
import Imagen2 from '../assets/GaleriaFoto2.jpg';
import Imagen3 from '../assets/GaleriaFoto3.jpg';
import Imagen4 from '../assets/GaleriaFoto4.jpg';

const Gallery = () => {
  return (
    <div className="carousel-container w-full h-screen overflow-hidden">
      <div className="carousel w-full h-full flex">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src={Imagen1} className="w-full h-full object-cover" alt="Imagen1" />
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <a href="#slide4" className="btn btn-circle text-white">❮</a>
            <a href="#slide2" className="btn btn-circle text-white">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img src={Imagen2} className="w-full h-full object-cover" alt="Imagen2" />
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <a href="#slide1" className="btn btn-circle text-white">❮</a>
            <a href="#slide3" className="btn btn-circle text-white">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img src={Imagen3} className="w-full h-full object-cover" alt="Imagen3" />
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <a href="#slide2" className="btn btn-circle text-white">❮</a>
            <a href="#slide4" className="btn btn-circle text-white">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-full">
          <img src={Imagen4} className="w-full h-full object-cover" alt="Imagen4" />
          <div className="absolute flex justify-between left-5 right-5 top-1/2 transform -translate-y-1/2">
            <a href="#slide3" className="btn btn-circle text-white">❮</a>
            <a href="#slide1" className="btn btn-circle text-white">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
