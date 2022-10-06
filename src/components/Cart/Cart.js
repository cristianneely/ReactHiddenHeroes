
import React from 'react'
import {useContext} from 'react';
import { CartContext } from "../../context/CartContext";
import { CartItem } from '../CartItem/CartItem';
import {getFirestore, getDoc, doc, collection, addDoc} from 'firebase/firestore';

export const Cart = () => {
  const {cart, getTotalPrice, clear} = useContext(CartContext);
  
  const createOrder = () =>{
    const db = getFirestore();
    const order = {
      buyer:{
        name: 'Cristian',
        phone: '+56995799767',
        email:'cristianneely@gmail.com'
      },
      items:cart,
      total:getTotalPrice(),
      status:'created'
    }
    const query = collection(db,'Orders');
    addDoc(query,order).then((response)=>{alert("Se creó la orden")}).catch(()=>alert("Error"));
  }
  
  
  
  
  return (<>
    <h1>Cart</h1>
    <h2>Precio total: {getTotalPrice()}</h2>
    {
     cart.map((item)=>{return <CartItem Item = {item}/>})
    }
    <div>
    <button onClick={()=>clear()}>Vaciar el carrito</button>
    </div>
    <div>
    <button onClick={()=>createOrder()}>Crear orden</button>
    </div>
    </>
  )
}