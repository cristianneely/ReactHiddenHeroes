import {useState} from 'react';

const ItemCount = ({setCount,count}) => {
    
    const [stock, setStock] = useState(5);
    const [warning, setWarning] = useState("");

    

    const onAdd = () => {
        if(stock > 0){
        setCount(count + 1);
        setStock(stock - 1);
        setWarning("");
    }
    else 
    setWarning("Producto Agotado!");
    };
    const onRemove = () => {
        if(count > 0){
        setCount(count - 1);
        setStock(stock + 1);
        setWarning("");
    }
    else 
    setWarning("No puedes tener cantidades negativas!");
    };

    return(
        <div>
            <h4>{warning}</h4>
            <h3>Cantidad: {count}</h3>
            <button onClick={onAdd}>+</button>
            <button onClick={onRemove}>-</button>
            <h4>Stock: {stock}</h4>
        </div>
    )
}

export default ItemCount;