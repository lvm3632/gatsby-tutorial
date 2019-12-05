import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from "gatsby";

 export default props => (
   <Navbar bg="light" expand="lg">
     <Navbar.Brand href="/">Gatsby-Bootstrap</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="mr-auto">
         <Nav.Link as={Link} to="/">
           Home
         </Nav.Link>
         <Nav.Link as={Link} to="/about">
           <Link to="/about">About Us</Link>
         </Nav.Link>
         <Nav.Link as={Link} to="/contact">
           <Link to="/contact">Contact Us</Link>
         </Nav.Link>
       </Nav>
     </Navbar.Collapse>
   </Navbar>
 )
