// En Product.jsx

import React, { useState, useEffect } from "react";
import Carts from "../Compounents/Carts.jsx";
import coffesData from "../Data/Coffes.js";
import fondoLocal from "../assets/FondoProdwuct.jpg";
import { useNavigate, useLocation } from "react-router-dom";

const Product = () => {
  const [cartCount, setCartCount] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filteredCoffees, setFilteredCoffees] = useState(coffesData);
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");

    setCurrentCategory(categoryParam || "all");
  }, [location.search]);

  useEffect(() => {
    if (currentCategory === "all") {
      setFilteredCoffees(coffesData);
    } else {
      const filtered = coffesData.filter(
        (coffee) => coffee.category === currentCategory
      );
      setFilteredCoffees(filtered);
    }
  }, [currentCategory]);

  const handleMoreInfoClick = (coffeeId) => {
    const selected = coffesData.find((coffee) => coffee.id === coffeeId);
    setSelectedCoffee(selected);
    navigate(`/catalogo/producto/${coffeeId}`);
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen p-8"
      style={{ backgroundImage: `url(${fondoLocal})` }}
    >
      <div className="flex justify-center space-x-4 p-4 mb-4 mt-16">
        <button
          className="bg-primary"
          onClick={() => navigate("/catalogo/producto?category=all")}
        >
          Todos
        </button>
        <button
          className="bg-primary"
          onClick={() => navigate("/catalogo/producto?category=Cafe")}
        >
          Cafes
        </button>
        <button
          className="bg-primary"
          onClick={() => navigate("/catalogo/producto?category=Taza")}
        >
          Tazas
        </button>
        <button
          className="bg-primary"
          onClick={() => navigate("/catalogo/producto?category=Experiencia")}
        >
          Experiencias
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCoffees.map((coffee) => (
          <Carts
            key={coffee.id}
            id={coffee.id}
            img={coffee.img}
            title={coffee.title}
            description={coffee.description}
            onClick={handleMoreInfoClick}
          />
        ))}
      </div>
      {selectedCoffee && (
        <ItemContainer detailedDescription={selectedCoffee.detailedDescription} />
      )}
    </div>
  );
};

export default Product;
