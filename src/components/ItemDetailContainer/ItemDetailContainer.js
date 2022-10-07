import ItemDetail from '../ItemDetail/ItemDetail';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import {getFirestore, getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();
    
  
    useEffect(()=>{
        setLoading(true);
        getDetails();

    },[]);


    const getDetails =()=>{
        const db = getFirestore();
  const queryProduct = doc(db,'Products',id);

  getDoc(queryProduct).then((response)=>{
    const rawdata = response.data();
    const data = {...rawdata,id};
    
    setProductDetail(data);
    setLoading(false);
  })

    }


    return (
        <div>
        <Loader loading={loading}/>
        <ItemDetail detail = {productDetail}/>
    </div>
      )

}

export default ItemDetailContainer;