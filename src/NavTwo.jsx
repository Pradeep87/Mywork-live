import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';


import {
 NavLink
  } from "react-router-dom";
const NavTwo = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse  id="responsive-navbar-nav" >
    <Nav className="ml-auto mr-4">
    <NavLink className="rout" to="/">Covidapi</NavLink>
    <NavLink className="rout" to="/covidapi">Random Quotes</NavLink>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default NavTwo;
