import data from '../mockData';
import {useEffect, useState} from 'react';
import { ItemList } from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';



const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);

    const {categoryId} = useParams();

    
    
  
    useEffect(() => {
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
   
  //let {categoryId} = useParams();
  console.log({categoryId});
}, [categoryId])

    const getProducts =  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        })
   
  
    return (
    <>
      <ItemList lista = {productList} />
    </>
  );
};

export default ItemListContainer;
