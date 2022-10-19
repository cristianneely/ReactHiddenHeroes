import ItemCount from "../ItemCount/ItemCount";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({detail})=>{

    const [count, setCount] = useState(1);
    const [stock, setStock] = useState(5);
    const {addToCart} = useContext(CartContext);

    let navigate = useNavigate();
    function handleClick(detail, count){
     
        addToCart(detail,count);
       
    }

    const onAdd = (quantity) => {

    }
    return(
        <div className="row">
         <div className="col-6">  
        <img src={detail.image} className="img-fluid"/></div> 
        <div className="col-6">
        <h4>Descripción: {detail.description}</h4>
        <h4>Categoría: {detail.categoryName}</h4>
        <h5>Precio: ${detail.price}</h5>
        <h5>Id Producto: {detail.id}</h5>
        </div>
        <ItemCount setCount={setCount} count = {count} stock = {stock}/>
        <button  className="btn btn-outline-secondary rounded-0" onClick={()=>handleClick(detail,count)}>
        Agregar al Carrito
        </button>
        
        </div>
    )}

    export default ItemDetail;