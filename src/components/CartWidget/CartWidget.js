import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link,NavLink} from 'react-router-dom';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';

const CartWidget = () => {
    

    return(
        <div>
            <Link to={'/cart/'}  style={{ textDecoration: 'none' }}>
           <FontAwesomeIcon icon={faCartShopping}/>
           </Link>
        </div>
    )
}

export default CartWidget;