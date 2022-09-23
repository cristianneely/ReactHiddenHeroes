import {useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({children}) => {
 
    const [cart, setCart] = useState([]);
 
    const addToCart = (item,quantity)=>{
        if (isInCart(item.id)){
        alert("El producto ya está en el carro")}
        else{
        setCart([...cart,{...item, quantity}])
        console.log([...cart,{...item, quantity}]);
    }
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (id) =>{
        return cart.some((item)=> item.id === id);
    }
 
    return (
    <CartContext.Provider value = {{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}
