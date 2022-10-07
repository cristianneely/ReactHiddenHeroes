import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      alert("El producto ya está en el carro"+item.id);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };
  const removeFromCart = (id) => {
    let filteredCart = cart.filter((item)=>{
      return item.id !== id;
    })
    setCart(filteredCart);
    };
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.quantity;
    });
    return total;
  };
  const getTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + (item.quantity * item.price)
    });
    return total;
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{cart, addToCart, getTotalQuantity, getTotalPrice, clear, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};
