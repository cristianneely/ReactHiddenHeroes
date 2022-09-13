import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from 'react';
import data from '../mockData';

const ItemDetailContainer = ({itemId}) => {

    const [productDetail, setProductDetail] = useState({});
    const [productDetailExpanded, setProductDetailExpanded] = useState(false);
  
    useEffect(()=>{
        getDetails.then((response)=>{
            let selectedItem = response.find(obj => {
                return obj.id == itemId;
              })
            setProductDetail(selectedItem.details);
        })

        .catch((error)=>{console.log("error")});


    },[]);

    const expandirContraer = () => {
        if(productDetailExpanded){
        setProductDetailExpanded(false)
    }
    else 
    setProductDetailExpanded(true);
    };

    const getDetails = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data);
        }, 3000);
    })

    return (
        <div>
          {(() => {
            if (productDetailExpanded) {
              return (
                <div>
                    <button onClick={expandirContraer}>Ocultar detalles</button>
                    <ItemDetail detail = {productDetail}/>
                </div>
              )
            } else {
              return (
                <button onClick={expandirContraer}>Mostrar detalles</button>
              )
            }
          })()}
        </div>
      )

}

export default ItemDetailContainer;