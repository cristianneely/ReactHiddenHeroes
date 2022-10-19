import React from 'react';
import {useContext} from 'react';
import { CartContext } from "../../context/CartContext";

export const CartItem = ({Item}) => {
    const {removeFromCart} = useContext(CartContext);
  return (
    
      <div className='row p-2'>
       <div className='card p-1'>
        <div className='row'>
        <div className='col-6'>
        <img src={Item.image} alt = {Item.title} width= {'200px'} className="card-img-left img-fluid p-2"/>
        </div><div className='col-6'>
        <h3 className='card-title'>{Item.title}</h3>
        <p className='cerd-text'>Cantidad: {Item.quantity}</p>
        <button className="btn btn-outline-secondary rounded-0" onClick={()=>{removeFromCart(Item.id)}}>Eliminar producto</button>
    </div></div></div></div>
  )
}
