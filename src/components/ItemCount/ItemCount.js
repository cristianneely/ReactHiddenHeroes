import {useState} from 'react';

const ItemCount = ({setCount,count, stock}) => {
    
    
    const [warning, setWarning] = useState("");


    

    const onAdd = () => {
        if(stock > count){
        setCount(count + 1);
        setWarning("");
    }
    else 
    setWarning("No quedan más!");
    };
    const onRemove = () => {
        if(count > 1){
        setCount(count - 1);
        setWarning("");
    }
    else 
    setWarning("");
    };

    return(
        <div>
            <h4>{warning}</h4>
            <h3>Cantidad: {count}</h3>
            <button onClick={onAdd}>+</button>
            <button onClick={onRemove}>-</button>
            <h4>Disponibles: {stock}</h4>
        </div>
    )
}

export default ItemCount;