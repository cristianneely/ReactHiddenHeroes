import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ lista }) => {
  return (
    <div className="container">
      <div className="row">
        
          {lista.map((product) => (
            <div className="col-md-6 col-lg-4">
            <Item
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              id={product.id}
            /></div>
          ))}
        
      </div>
    </div>
  );
};

export default ItemList;
