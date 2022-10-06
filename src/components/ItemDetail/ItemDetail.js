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
        console.log(detail);
        addToCart(detail,count);
       // navigate('/cart/');
    }

    const onAdd = (quantity) => {

    }
    return(
        <>
        <img src={detail.image} width= {'300px'}/>
        <h4>Descripción: {detail.description}</h4>
        <h4>Categoría: {detail.categoryName}</h4>
        <h5>Precio: ${detail.price}</h5>
        <h5>Id Producto: {detail.id}</h5>
        <ItemCount setCount={setCount} count = {count} stock = {stock}/>
        <button onClick={()=>handleClick(detail,count)}>
        Agregar al Carrito
        </button>
        
        </>
    )}

    export default ItemDetail;