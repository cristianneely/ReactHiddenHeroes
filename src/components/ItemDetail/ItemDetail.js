import ItemCount from "../ItemCount/ItemCount";
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const ItemDetail = ({detail})=>{

    const [count, setCount] = useState(0);
    let navigate = useNavigate();
    const handleClick = ()=>{
       navigate('/cart/');
    }
    return(
        <>
        <img src={detail.image} width= {'300px'}/>
        <h4>Descripción: {detail.description}</h4>
        <h4>Categoría: {detail.categoryName}</h4>
        <ItemCount setCount={setCount} count = {count}/>
        <button onClick={handleClick}>
        Ir al carrito
        </button>
        
        </>
    )}

    export default ItemDetail;