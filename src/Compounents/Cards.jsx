import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, title, description, img, onClick }) => {
  return (
    <div className=" flex p-4 mb-4 mt-16">
      <div
        className={`card w-76 h-96 bg-cover bg-center bg-base-100 shadow-xl relative `}
        style={{ backgroundImage: `url('${img}')`, zIndex: 1 }}
      >
        <div className="w-full h-full absolute bg-black opacity-50 z-20 ">
          {" "}
        </div>
        <figure>
          <img
            src={img}
            alt={title}
            className="w-full min-h-48 object-cover hidden"
          />
        </figure>
        <div className="card-body z-30">
          <h2 className="card-title text-xl font-bold mb-2 ">{title}</h2>
          <p className="mb-4 card-body z-30">{description}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/catalogo/producto/${id}`}
              className="btn btn-active btn-primary"
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