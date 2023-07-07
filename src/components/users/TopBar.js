import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

function TopBar(props) {
  let navigate = useNavigate()
  return <>
  <Navbar bg="primary" variant="dark">
    <Container>
    <LinkContainer to='javascript(void)'>
      <Navbar.Brand>FoodApp</Navbar.Brand>
      </LinkContainer>
      <Nav className="me-auto">
        <Nav.Link onClick={()=>navigate('/user-menu')}>Home</Nav.Link>
        <Nav.Link onClick={()=>navigate('/user-cart')}>Cart {props.value.cart.length}</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
</>
}

export default TopBar