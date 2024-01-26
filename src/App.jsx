import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Compounents/NavBar";
import Start from "./Pages/Start";
import Product from "./Pages/Catálogo";
import ItemContainer from "./Compounents/ItemListContainer";
import Gallery from "./Pages/Gallery";
import Clientes from "./Pages/Clientes";
import { CartProvider } from "./Compounents/CartContext";
import Cart from "./Compounents/Cart";
import Checkout from "./Compounents/Checkout";
function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/catalogo/producto" element={<Product />} />
          <Route path="/catalogo/producto/:id" element={<ItemContainer />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Clientes" element={<Clientes />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
