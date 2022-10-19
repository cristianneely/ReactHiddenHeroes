import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  addDoc,
} from "firebase/firestore";

export const Cart = () => {
  const { cart, getTotalPrice, clear } = useContext(CartContext);

  const createOrder = () => {
    const db = getFirestore();
    const order = {
      buyer: {
        name: "Cristian",
        phone: "+56995799767",
        email: "cristianneely@gmail.com",
      },
      items: cart,
      total: getTotalPrice(),
      status: "created",
    };
    const query = collection(db, "Orders");
    addDoc(query, order)
      .then((response) => {
        alert("Se creó la orden");
        clear();
      })
      .catch(() => alert("Error"));

  };

  return (
    <div className="container">
      <h3>Carito de Compras</h3>
      {!(cart.length>0) && <div className="row">
        <div className="col-12 p-4">
          <h4>El Carrito está vacío. Anda al Home o a alguna categoría para agregar productos al carrito!</h4>
          </div> </div>}
     {cart.length>0 && <div> <div className="row">
        
        
        {cart.map((item) => {
          return <CartItem Item={item} />;
        })}
      </div>

      <div className="row p-1">
        <div className="col-3">
          <button
            className="btn btn-outline-secondary rounded-0"
            onClick={() => clear()}
          >
            Vaciar el carrito
          </button>
        </div>
      </div>
      <div className="row p-1">
        <div className="col-3">
          
          <button
            className="btn btn-danger btn-lg"
            onClick={() => createOrder()}
          >
            Crear orden
          </button>
        </div>
        <h4>Precio total: $ {getTotalPrice()}</h4>
      </div>
      </div>}
    </div>
  );
};
