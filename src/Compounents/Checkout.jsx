import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import Start from "../Pages/Start";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    paymentMethod: "MercadoPago",
  });
  const [orderSent, setOrderSent] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsSubmitDisabled(
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.paymentMethod
    );
  };

  const handlePlaceOrder = () => {
    if (
      formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.paymentMethod
    ) {
      console.log("Pedido realizado:", cart);
      console.log("Datos del usuario:", formData);
      setOrderSent(true);
    }
  };

  const totalAmount = cart.reduce(
    (total, item) => total + parseFloat(item.product.Price) * item.quantity,
    0
  );

  const handleGoToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center border-none">
      <h2 className="text-white text-center mb-6 text-3xl">Checkout</h2>
      <div className="max-w-screen-lg w-full bg-opacity-75 bg-black p-8 rounded-lg">
        {orderSent ? (
          <>
            <p className="text-white text-lg mt-4">Pedido Exitoso</p>
            <button
              onClick={handleGoToHomePage}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Volver a Página Principal
            </button>
          </>
        ) : (
          <>
            <h3 className="text-white text-lg mb-4">Resumen del Pedido:</h3>
            <ul className="space-y-4 max-h-48 overflow-y-auto">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 rounded shadow-md"
                >
                  <div>
                    <p className="font-bold text-lg p-3">{item.product.title}</p>
                    <p className="text-sm">{item.quantity} unidades x ${item.product.Price} c/u</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-white text-lg mt-4">Total: ${totalAmount}</p>
            <div className="mt-4">
              <label htmlFor="email" className="text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="firstName" className="text-white">
                Nombre:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="lastName" className="text-white">
                Apellido:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="paymentMethod" className="text-white">
                Método de Pago:
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full p-2 mt-1 border rounded"
              >
                <option value="MercadoPago">Mercado Pago</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
              </select>
            </div>
            <button
              onClick={handlePlaceOrder}
              disabled={isSubmitDisabled}
              className={`${
                isSubmitDisabled ? "bg-gray-500" : "bg-green-500"
              } text-white px-4 py-2 mt-4 rounded`}
            >
              Enviar Pedido
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
