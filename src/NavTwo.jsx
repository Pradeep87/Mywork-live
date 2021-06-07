import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';


import {
 NavLink
  } from "react-router-dom";
const NavTwo = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">My Projects</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse  id="responsive-navbar-nav" >
    <Nav className="ml-auto mr-4">
    <NavLink className="rout" to='/'>Covid-19 Update Api</NavLink>
    <NavLink className="rout" to="/quotes">Random Quotes</NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default NavTwo;