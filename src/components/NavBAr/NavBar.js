import CartWidget from "../CartWidget/CartWidget";
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const NavBar = () => {
    return(
        <Navbar bg="dark" variant = "dark" expand = "lg">
               <Navbar.Brand>
                       🎨
                </Navbar.Brand> 
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav>
                        <Nav.Link href="#">
                                Inicio
                        </Nav.Link>
                        <Nav.Link href="#">
                               Acerca
                        </Nav.Link>
                        <NavDropdown title="Galería">
                          <NavDropdown.Item>
                            Galería 1
                            </NavDropdown.Item> 
                            <NavDropdown.Item>
                                Galería 2
                            </NavDropdown.Item>     
                            
                        </NavDropdown>
                        <Nav.Link href="#">
                                Blog
                        </Nav.Link>
                        <Nav.Link href="#">
                                <CartWidget/>
                        </Nav.Link>
                </Nav></Navbar.Collapse>
            </Navbar>
           
    )
}

export default NavBar;