import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Compounents/NavBar';
import Start from './Pages/Start';
import Product from './Pages/Product';
import ItemContainer from './Compounents/ItemContainer'; // Importa el componente ItemContainer
import Gallery from "./Pages/Gallery";
import Clientes from "./Pages/Clientes"
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/catalogo/producto" element={<Product />} />
          <Route path="/catalogo/producto/:id" element={<ItemContainer />} /> {/* Asegúrate de tener esta ruta */}
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Clientes" element={<Clientes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;