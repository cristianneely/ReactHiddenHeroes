import {useState} from 'react';

const Counter = () => {
    const [initialState, setInitialState] = useState(0);
    const [stock, setStock] = useState(3);
    

    const suma = () => {
        if(stock > 0){
        setInitialState(initialState + 1);
        setStock(stock - 1);
    }
    else 
    setInitialState("Producto Agotado!");
    };

    return(
        <div>
            Counter
            <h3>{initialState}</h3>
            <button onClick={suma}>Suma uno</button>
            <h4>Stock: {stock}</h4>
        </div>
    )
}

export default Counter;