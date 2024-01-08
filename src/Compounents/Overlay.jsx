import React from "react";
import { Link } from "react-router-dom";
import imagenAVIF from "../assets/tazasinfondo.png";
import imagenexpress from "../assets/TazaCafeNormal.png";
import imagenL from "../assets/TazaLarga.png";
import imagenC from "../assets/Croaitssan1.svg";
import imagenN from "../assets/TazaNegraNormal.png";

const Overlay = ({ onClose }) => {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-30 bg-accent flex justify-center items-center"
      onClick={onClose}
    >
      <div className="D p-4 rounded-t-lg border-none bg-transparent">
        <div className="flex items-center justify-between mt-4 border-none bg-transparent space-x-4 lg:space-x-20">
          <Link
            to="/catalogo/producto"
            className="border-none bg-transparent p-2 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <img
              className="h-auto w-20"
              src={imagenexpress}
              alt="Descripción de la imagen"
            />
          </Link>
          <Link
            to="/catalogo/producto?category=Taza"
            className="border-none bg-transparent p-2 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <img className="h-auto w-12" src={imagenL} alt="Botón 2" />
          </Link>
          <Link
            to="/catalogo/producto?category=Cafe"
            className="border-none bg-transparent p-2 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <img className="h-auto w-20" src={imagenAVIF} alt="Botón 3" />
          </Link>
          <Link
            to="/catalogo/producto?category=Experiencia"
            className="border-none bg-transparent p-2 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <img className="h-auto w-16" src={imagenN} alt="Botón 3" />
          </Link>
          <Link
            to="/catalogo/producto"
            className="border-none bg-transparent p-2 transition-transform transform hover:scale-110 focus:outline-none"
          >
            <img className="h-auto w-20" src={imagenC} alt="Botón 3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
