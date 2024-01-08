import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Customer1 from '../assets/Customer1.jpg';
import Customer2 from '../assets/Customer2.jpg';
import Customer3 from '../assets/customer3.jpg';
import FondoC from '../assets/FondoCLientes.jpg';

const Clientes = () => {
  const location = useLocation();

  const customerData = [
    {
      id: 1,
      name: 'Julieta',
      image: Customer1,
      feedback: '¡Excelente servicio! Siempre disfruto de su café.',
    },
    {
      id: 2,
      name: 'Raul',
      image: Customer2,
      feedback: 'Las experiencias que ofrecen son inolvidables. Gracias.',
    },
    {
      id: 3,
      name: 'Silvana',
      image: Customer3,
      feedback: 'La calidad de los productos es insuperable. Continúen así.',
    },
  ];
  const backgroundImageStyle = {
    backgroundImage: `url('${FondoC}')`,
    zIndex: 10,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    padding: "20px",
  };

  useEffect(() => {
    if (location.pathname === '/clientes') {
      document.body.classList.add('bg-cover', 'bg-center', 'h-screen');
    } else {
      document.body.classList.remove('bg-cover', 'bg-center', 'h-screen');
    }

    return () => {
      document.body.classList.remove('bg-cover', 'bg-center', 'h-screen');
    };
  }, [location.pathname]);

  return (
    <div className="container mx-auto mt-8 p-4 mb-4 w-full h-full">
      <h1 className="text-4xl font-bold mb-8 mt-8 p-4  " style={backgroundImageStyle}>Nuestros Clientes Felices!!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {customerData.map((customer) => (
          <div key={customer.id} className="customer-card  bg-black p-6 rounded-lg shadow-md z-20 mt-11">
            <div className="flex-shrink-0 w-full">
              <img src={customer.image} alt={`Cliente ${customer.id}`} className="w-full h-full object-contain rounded" />
            </div>
            <h2 className="text-xl font-bold mb-2">{customer.name}</h2>
            <p>{customer.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;


