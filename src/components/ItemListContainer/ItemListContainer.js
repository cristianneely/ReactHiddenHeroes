import data from '../mockData';
import {useEffect, useState} from 'react';
import { ItemList } from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { Loader } from '../Loader/Loader';



const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    
    
  
    useEffect(() => {
      setLoading(true);
  getProducts.then((response)=>{
    if (categoryId === undefined || categoryId === null){
      setProductList(response);
    }
    else{
    let selectedProducts = response.filter(obj => {
      return obj.details.categoryId == categoryId;
    })
    setProductList(selectedProducts);
}

  })
  
  .catch((error)=>{console.log("error")});
   
  
  console.log(categoryId + " " + loading);
}, [categoryId])

    const getProducts =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
                setLoading(false);
            }, 2000);
        })
   
  
    return (
    <>
      <Loader loading={loading}/>
      <ItemList lista = {productList} />
    </>
  );
};

export default ItemListContainer;
