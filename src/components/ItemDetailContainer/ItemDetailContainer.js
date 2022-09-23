import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from 'react';
import data from '../mockData';
import {useParams} from 'react-router-dom';
import { Loader } from '../Loader/Loader';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    
  
    useEffect(()=>{
        setLoading(true);
        getDetails.then((response)=>{
            let selectedItem = response.find(obj => {
                return obj.id == id;
              })
            setProductDetail(selectedItem);
        })

        .catch((error)=>{console.log("error")});

    },[]);


    const getDetails = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data);
            setLoading(false);
        }, 600);
    })

    return (
        <div>
        <Loader loading={loading}/>
        <ItemDetail detail = {productDetail}/>
    </div>
      )

}

export default ItemDetailContainer;