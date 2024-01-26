import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom"; 
import Checkout from "./Checkout";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFinishPurchase = () => {
    console.log("Compra finalizada");
    navigate("/Checkout");
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-white text-center mb-6 text-3xl">
        Carrito de compras
      </h2>
      <div className="max-w-screen-lg w-full bg-opacity-75 bg-black p-8 rounded-lg">
        {cart.length === 0 ? (
          <p className="text-white text-center mb-4">El carrito está vacío</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4  rounded shadow-md"
                >
                  <div>
                    <p className="font-bold text-lg p-3">{item.product.title}</p>
                    <p className="text-sm">{item.quantity} unidades</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={handleFinishPurchase}
              className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            >
              Terminar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
