import CartWidget from "../CartWidget/CartWidget";
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Link,NavLink} from 'react-router-dom';

const NavBar = () => {
    return(
        <Navbar bg="light" variant = "light" expand = "lg" className="navbar navbar-expand-lg navbar-light bg-light">
               <Navbar.Brand>
                       🎨
                </Navbar.Brand> 
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                        <Nav.Link as = {Link} to={'/'}>
                                Home
                        </Nav.Link>
                       {/* <Nav.Link href="#">
                               Acerca
                         </Nav.Link>*/}
                        <NavDropdown title="Categorías">
                          <NavDropdown.Item as = {Link} to={'/category/1'}>
                            Categoría 1
                            </NavDropdown.Item> 
                            <NavDropdown.Item as = {Link} to={'/category/2'}>
                                Categoría 2
                            </NavDropdown.Item>     
                            
                        </NavDropdown>
                        <Nav.Link href="#">
                                <CartWidget/>
                        </Nav.Link>
                </Nav></Navbar.Collapse>
            </Navbar>
           
    )
}

export default NavBar;