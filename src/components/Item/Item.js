import {useEffect, useState} from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import {Link} from 'react-router-dom';

export const Item = ({title,price,image,id}) => {
  
  const [detailDisplay, setDetailDisplay] = useState("");  
  
  return (
    <>
    <Link to ={'/detail/' + id}>
    <img src={image} alt = {title} width= {'300px'}/>
    <h2>Título:{title}</h2>
    <h2>Precio:{price}</h2>
    </Link>
    
    </>
  )
}

export default Item;
