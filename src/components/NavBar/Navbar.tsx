import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link , Outlet} from "react-router-dom"
import { useAppSelector } from '../../hooks/selector&dispatch';

const NavBar = () => {
  const cart = useAppSelector(state => state.carts)
  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={`/`}><Navbar.Brand >Shopping Cart</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={`/`}>Home</Link>
          </Nav>
          <Nav>
            
            <Nav.Link><Link to={`/carts`}>
              <div className='d-flex g-3'>
                <ShoppingCartIcon />
                 <h4>{cart?.length > 0 ? cart?.length : ''}</h4>
              </div>
              </Link>
            </Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
  </>
  )
}

export default NavBar