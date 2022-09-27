import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping,faCartPlus} from '@fortawesome/free-solid-svg-icons';
import {Link,NavLink} from 'react-router-dom';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useContext} from 'react';
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  
    const {getTotalQuantity} = useContext(CartContext);


    return(
        <div>
            <Link to={'/cart/'}  style={{ textDecoration: 'none' }}>
           {getTotalQuantity()==0 &&<FontAwesomeIcon icon={faCartShopping}/>}
           {getTotalQuantity()>0 && <><FontAwesomeIcon icon={faCartPlus}/> {getTotalQuantity()}</>}
           </Link>
        </div>
    )
}

export default CartWidget;