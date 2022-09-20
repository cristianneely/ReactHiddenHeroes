import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from 'react';
import data from '../mockData';
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const [productDetailExpanded, setProductDetailExpanded] = useState(false);

    const {id} = useParams();
    
  
    useEffect(()=>{
        getDetails.then((response)=>{
            let selectedItem = response.find(obj => {
                return obj.id == id;
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
        
        <ItemDetail detail = {productDetail}/>
    </div>
      )

}

export default ItemDetailContainer;