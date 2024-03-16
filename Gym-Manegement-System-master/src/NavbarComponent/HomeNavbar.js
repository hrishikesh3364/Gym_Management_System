import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import gymlogo from '../images/gymlogo.jpg';


import '../index.css';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';




const AppNavbar = () => {

    return (
<>

<Container class= 'd-block d-sm-none fluid' >
  
  <Row>
    <Col lg={4} xs={4} style={{alignItems:'left',marginTop:"10px"}}><img src={gymlogo} height= "120px" alt="logo" /></Col>
   <Col lg={4} xs={4} style={{textAlign:'center',color:'orange'}}>  <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '78px', position: 'relative' }}>
  <span style={{
    color: 'yellow',
    background: 'linear-gradient(45deg, #f06, #09f)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(7, 6, 0, 0.3)',
  }}>WORKOUT ZONE</span>
</h1>



   
  <p style={{color:'white',fontSize:'20px',marginTop:'40px'}}>
    Mumbai:-9823195980 ,Pune:-8208217076 , Delhi:-8806712297 ,Nashik:-8806568584   </p></Col>
    
    <Col lg={4} xs={4} style={{textAlign:"right",marginTop:"8px"}}>
   
    <IconButton aria-label="delete" href="https://www.facebook.com/" target="_blank">
    <FacebookIcon color="primary" />
    </IconButton>

    <IconButton aria-label="delete" href="https://www.instagram.com/" target="_blank">
    <InstagramIcon color="secondary" />  
    </IconButton>

    <IconButton aria-label="delete" href="https://www.LinkedIn.com/" target="_blank">
    <LinkedInIcon color="primary" /> 
    </IconButton>
  
    <IconButton aria-label="delete" href="https://www.youtube.com/watch?v=eaRQF-7hhmo" target="_blank">
    <YouTubeIcon color="secondary" /> 
    </IconButton>
    
    </Col>
  </Row>
  </Container>



<Navbar  collapseOnSelect  expand="lg"   sticky="top"  variant=""
 style={{textAlign:'center',padding:'40px',marginRight:'90px'}}>
<div className="nav nav-tabs " > </div>
<Navbar.Brand href="#home">

</Navbar.Brand>

  <div claaName="nav nav-tabs" >
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textAlign:'center'}} >
  
    <Nav className="nav nav-tabs">

    <LinkContainer to="/getStarted">
  <Nav.Link className="nav-links" style={{ fontSize: '65px !important' }}>HOME</Nav.Link>
</LinkContainer>


<LinkContainer to="/gallery">
  <Nav.Link className="nav-links" style={{ fontSize: '25px' }}>GALLERY</Nav.Link>
</LinkContainer>

<LinkContainer to="/programs">
  <Nav.Link className="nav-links" style={{ fontSize: '25px' }}>PROGRAMS</Nav.Link>
</LinkContainer>

<LinkContainer to="/blogs">
  <Nav.Link className="nav-links" style={{ fontSize: '25px' }}>BLOGS</Nav.Link>
</LinkContainer>

<LinkContainer to="/contact">
  <Nav.Link className="nav-links" style={{ fontSize: '25px' }}>CONTACT</Nav.Link>
</LinkContainer>

<LinkContainer to="/createuser">
  <Nav.Link className="nav-links" style={{ fontSize: '25px' }}>SIGN UP</Nav.Link>
</LinkContainer>

<LinkContainer to="/login">
  <Nav.Link className="nav-links" style={{ fontSize: '50px' }}>SIGN IN</Nav.Link>
</LinkContainer>

    </Nav>
   
</Navbar.Collapse>
</div>

</Navbar>

</>
)
};
 

export default AppNavbar
