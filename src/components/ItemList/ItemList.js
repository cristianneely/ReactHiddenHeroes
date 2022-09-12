import {Item} from '../Item/Item';

export const ItemList = ({lista}) => {
  console.log("EJAAA"+ lista);
    return (
    <div>
       {lista.map((product)=>(
        <Item key = {product.id} title = {product.title} price = {product.price} image = {product.image}/>
       ))}
    </div>
  )
}

export default ItemList;