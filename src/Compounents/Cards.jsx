import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, title, description, img }) => {
  return (
    <div >
      <div
        className="card flex w-full h-60 bg-cover bg-center bg-base-100 shadow-xl relative md:top-48 sm:top-80 lg:top-48"
        style={{ backgroundImage: `url('${img}')`, zIndex: 1 }}
      >
        <div className="w-full h-full absolute bg-black opacity-50 z-20 "></div>
        <figure>
          <img
            src={img}
            alt={title}
            className="w-full min-h-48 object-cover hidden"
          />
        </figure>
        <div className="card-body z-30 p-4">
          <h2 className="card-title text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-lg font-bold mb-2 ">
            {title}
          </h2>
          <p className="mb-4 text-sm sm:text-base md:text-lg lg:text-base xl:text-sm">
            {description}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/catalogo/producto/${id}`} // Agregar el id del producto a la URL
              className="btn btn-active btn-primary text-xs sm:text-sm md:text-base lg:text-sm xl:text-xs"
            >
              Más Información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
