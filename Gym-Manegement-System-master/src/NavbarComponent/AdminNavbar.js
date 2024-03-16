import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown,Button,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import '../index.css';





const AdminNavbar = () => {

    return (
<>

<Navbar  collapseOnSelect  expand="lg"   sticky="top"  variant="" style={{textAlign:'center',backgroundColor:'black'}}>
<div className="nav nav-tabs" > </div> 
<Navbar.Brand href="#home">

</Navbar.Brand>

  <div className="container-xs">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textAlign:'center'}} >
  
    <Nav className="nav nav-tabs">
 
    <LinkContainer to="/adminprofile">
    <Nav.Link className="nav-links">Profile</Nav.Link>
    </LinkContainer>
    
      <LinkContainer to="/userlist">
    <Nav.Link className="nav-links">User-List</Nav.Link>
    </LinkContainer>
      
    <LinkContainer to="/planlist">
    <Nav.Link className="nav-links">Membership-Plans</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/gymmemberlist">
    <Nav.Link className="nav-links">Gym Memeber List</Nav.Link>
    </LinkContainer>
    
    </Nav>
   
</Navbar.Collapse>
</div>
</Navbar>
</>
)
};
 

export default AdminNavbar
