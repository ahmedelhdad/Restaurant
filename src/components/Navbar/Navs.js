import React from 'react'
import { Container,Navbar ,Nav } from 'react-bootstrap'
import  './Navs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../Props/logo.png'
const Navs = () => {
  return (
    <Navbar  expand="lg">
    <Container className='fixed-top b' style={{backgroundColor:'WHITE'}} >
          <Navbar.Brand href="#home" >
          <img src={Logo} alt=''/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ms-auto" >
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#Explore">Explore Foods</Nav.Link>
                  <Nav.Link href="#Testimonials">Reviews</Nav.Link>
                  <Nav.Link href="#FAQ">FAQ</Nav.Link>
              </Nav>
              <Nav>
                  <Nav.Link className='number'>+20 1023508230</Nav.Link>
              </Nav>
          </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navs