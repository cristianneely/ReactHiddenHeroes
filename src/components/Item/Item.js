import {useEffect, useState} from 'react';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

export const Item = ({title,price,image,id}) => {
  
  const [detailDisplay, setDetailDisplay] = useState("");  
  
  return (
    <>
    <img src={image} alt = {title} width= {'300px'}/>
    <h2>Título:{title}</h2>
    <h2>Precio:{price}</h2>
    <ItemDetailContainer itemId={id}/>
    
    </>
  )
}

export default Item;
