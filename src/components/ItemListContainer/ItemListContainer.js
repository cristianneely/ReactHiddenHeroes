import data from '../mockData';
import {useEffect, useState} from 'react';



const ItemListContainer = ({ greeting }) => {

    const [productList, setProductList] = useState([]);
  
    useEffect(() => {
  getProducts.then((response)=>{
    setProductList(response);
  })
  
  .catch((error)=>{console.log("error")});
   }, [])


    const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        })
   
  
    return (
    <>
      <h2>{greeting}</h2>
    </>
  );
};

export default ItemListContainer;
