import React, { useState, useEffect } from "react";
import Cards from "../Compounents/Cards.jsx";
import fondoLocal from "../assets/FondoProdwuct.jpg";
import { useNavigate } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import coffesData from "../Data/Coffes.js"; // Importa los datos de las imágenes locales

const Product = () => {
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [originalCoffees, setOriginalCoffees] = useState([]); // Almacena los productos originales
  const [selectedCoffee, setSelectedCoffee] = useState(null);
  const [loading, setLoading] = useState(true); // Variable de estado para el estado de carga
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const db = getFirestore();
        const coffeesCollection = collection(db, "coffesData");
        const snapshot = await getDocs(coffeesCollection);
        const coffeesDataFromFirebase = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            category: data.category,
            price: data.Price,
            description: data.description,
            detailedDescription: data.detailedDescription,
            title: data.title,
          };
        });
        setOriginalCoffees(coffeesDataFromFirebase); // Almacena los productos originales
        setFilteredCoffees(coffeesDataFromFirebase);
        setLoading(false); // Marca la carga como completa
      } catch (error) {
        console.error("Error fetching coffees:", error);
        setLoading(false); // Marca la carga como completa incluso en caso de error
      }
    };

    fetchCoffees();
  }, []);

  const handleMoreInfoClick = (coffeeId) => {
    const selected = filteredCoffees.find((coffee) => coffee.id === coffeeId);
    setSelectedCoffee(selected);
    navigate(`/catalogo/producto/${coffeeId}`);
  };

  const filterByCategory = (category) => {
    const filtered = category === "all"
      ? originalCoffees // Restaura los productos originales al seleccionar "Todos"
      : originalCoffees.filter(coffee => coffee.category === category);
    setFilteredCoffees(filtered);
  };

  if (loading) {
    return <div>Cargando...</div>; // Muestra el cartel de "Cargando" mientras se cargan los datos
  }

  return (
    <div
      className="bg-cover bg-center p-8 relative"
      style={{ backgroundImage: `url(${fondoLocal})` }}
    >
      <div className="flex justify-center items-center space-x-4 fixed top-20 left-20 -right-0 z-10">
        <button
          className="bg-primary"
          onClick={() => filterByCategory("all")}
        >
          Todos
        </button>
        <button
          className="bg-primary"
          onClick={() => filterByCategory("Cafe")}
        >
          Cafes
        </button>
        <button
          className="bg-primary"
          onClick={() => filterByCategory("Taza")}
        >
          Tazas
        </button>
        <button
          className="bg-primary"
          onClick={() => filterByCategory("Experiencia")}
        >
          Experiencias
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-10 pt-72">
        {filteredCoffees.map((coffee) => {
          const localCoffeeData = coffesData.find((localCoffee) => localCoffee.id === coffee.id);
          if (!localCoffeeData) {
            console.error(`No se encontró el café local para el café con ID ${coffee.id}`);
            return null; // O maneja la situación de alguna otra manera
          }
          return (
            <Cards
              key={coffee.id}
              id={coffee.id}
              img={localCoffeeData.img}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
              onClick={handleMoreInfoClick}
            />
          );
        })}
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
