import { useEffect, useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Link } from "react-router-dom";
import './Item.css';


export const Item = ({ title, price, image, id }) => {
  const [detailDisplay, setDetailDisplay] = useState("");

  return (
    <div className="card mt-2  text-center bg-dark">
      <Link to={"/detail/" + id}>
        <div className="overflow">
            <img src={image} alt={title} className="card-img-top"/></div>
        </Link>
      
      <div className="card-body text-light">
        
          <h4 className="card-title">Título:{title}</h4>
          <p className="card-text">Precio:{price}</p>
        <Link to={"/detail/" + id} className="btn btn-outline-secondary rounded-0">
            Ver Detalle
        </Link>
      </div>
    </div>
  );
};

export default Item;
