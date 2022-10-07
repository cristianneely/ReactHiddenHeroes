import { useEffect, useState } from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Link } from "react-router-dom";

export const Item = ({ title, price, image, id }) => {
  const [detailDisplay, setDetailDisplay] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <Link to={"/detail/" + id}>
          <img src={image} alt={title} width={"300px"} />
          <h2 className="card-title">Título:{title}</h2>
          <p className="card-text">Precio:{price}</p>
        </Link>
      </div>
    </div>
  );
};

export default Item;
