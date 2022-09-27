import React from 'react'
import {useContext} from 'react';
import { CartContext } from "../../context/CartContext";
import { CartItem } from '../CartItem/CartItem';

export const Cart = () => {
  const {cart, getTotalPrice, clear} = useContext(CartContext);
  return (<>
    <h1>Cart</h1>
    <h2>Precio total: {getTotalPrice()}</h2>
    {
     cart.map((item)=>{return <CartItem Item = {item}/>})
    }
    <div>
    <button onClick={()=>clear()}>Vaciar el carrito</button>
    </div>
    </>
  )
}