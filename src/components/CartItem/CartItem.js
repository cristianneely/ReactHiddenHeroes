import React from 'react';
import {useContext} from 'react';
import { CartContext } from "../../context/CartContext";

export const CartItem = ({Item}) => {
    const {removeFromCart} = useContext(CartContext);
  return (
    <>
        <h2>{Item.title}</h2>
        <h2>Cantidad: {Item.quantity}</h2>
        <img src={Item.image} alt = {Item.title} width= {'300px'}/>
        <button onClick={()=>{removeFromCart(Item.id)}}>Eliminar producto</button>

    </>
  )
}
