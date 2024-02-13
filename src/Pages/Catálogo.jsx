import React, { useState, useEffect } from "react";
import Cards from "../Compounents/Cards.jsx";
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
      className="bg-cover bg-center relative min-h-screen"
      style={{ backgroundImage: `url(${fondoLocal})` }}
    >
      <div className="flex justify-center items-center space-x-4 fixed left-20 -right-0 z-10">
        <button
          className={`bg-primary ${
            currentCategory === "all" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => navigate("/catalogo/producto?category=all")}
        >
          Todos
        </button>
        <button
          className={`bg-primary ${
            currentCategory === "Cafe" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => navigate("/catalogo/producto?category=Cafe")}
        >
          Cafes
        </button>
        <button
          className={`bg-primary ${
            currentCategory === "Taza" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => navigate("/catalogo/producto?category=Taza")}
        >
          Tazas
        </button>
        <button
          className={`bg-primary ${
            currentCategory === "Experiencia" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => navigate("/catalogo/producto?category=Experiencia")}
        >
          Experiencias
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-96">
        {/* Tarjetas de café */}
        {filteredCoffees.map((coffee) => (
          <Cards
            key={coffee.id}
            id={coffee.id}
            img={coffee.img}
            title={coffee.title}
            description={coffee.description}
            price={coffee.price}
            onClick={handleMoreInfoClick}
          />
        ))}
      </div>
      {selectedCoffee && (
        <ItemContainer
          detailedDescription={selectedCoffee.detailedDescription}
        />
      )}
    </div>
  );
};

export default Product;
