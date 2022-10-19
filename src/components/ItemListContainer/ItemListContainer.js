import {useEffect, useState} from 'react';
import { ItemList } from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import {getFirestore, getDocs, getDoc, collection, query, where} from 'firebase/firestore';



const ItemListContainer = () => {

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();

    
     const loadList =(data)=>{
      
    setProductList(data);
  
    }
  
    useEffect(() => {
      setLoading(true);
      const data = getProducts();
     

  
}, [categoryId])

const getProducts = ()=>{

  const db = getFirestore()
  const querySnapshot = collection(db,'Products');
  
  if (categoryId === undefined || categoryId === null){
  

  
  getDocs(querySnapshot).then((response)=>{
    const data = response.docs.map((product)=>{
      return {id:product.id,...product.data()}
    })
    loadList(data);
    setLoading(false);
  })
  .catch((err)=>console.log(err));
}
else{
  const queryFilter = query(querySnapshot, where('categoryId','==',categoryId));
  getDocs(queryFilter).then((response)=>{
    const data = response.docs.map((product)=>{
      return {id:product.id,...product.data()}
    })
    loadList(data);
    setLoading(false);
  })
  .catch((err)=>console.log(err));
}
};
  
    return (
    <div>
      <Loader loading={loading}/>
      <ItemList lista = {productList} />
    </div>
  );
};

export default ItemListContainer;
