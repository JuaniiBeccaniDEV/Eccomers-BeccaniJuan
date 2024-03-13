import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar =()=>{
    return(
        <>
       
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">GAMES STEA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Games</Nav.Link>
            <Nav.Link href="#pricing">Gifts Card</Nav.Link>
            <Nav.Link href="#pricing">Contacts</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
         
        </>
    );
};