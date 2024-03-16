
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';

import b6 from '../images/b6.jpg';
import b7 from '../images/b7.jpg';
import b8 from '../images/b8.jpg';

import 'bootstrap/dist/css/bootstrap.min.css'                 // These 2 lines
import {Button, Form, Alert, Nav, Navbar, Container, NavDropdown, Spinner, Carousel} from 'react-bootstrap'    

const Caro = () => {
    return (
        

      <div class="container-lg-1 container-sm-1">
      <Carousel variant="light" interval="2000">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b2}
          alt="image1"
        />
        <Carousel.Caption>
      <h3 style={{color:'yellow'}}>Hit the Gym and Goals !</h3>
      <p style={{color:'yellow'}}>Subscribe to our plans and enjoy benefits you've never heard of</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b1}
          alt="image2"
        />
         <Carousel.Caption>
      <h3 style={{color:'white'}}>Workout Zone </h3>
      <p style={{color:'pink'}}>Train like a beast. Look like a beauty</p>
    </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b7}
          alt="image2"
        />
        <Carousel.Caption>
      <h3 style={{color:'pink'}}>Workout Zone</h3>
      <p style={{color:'pink'}}>If Something stands between you and your success, move it. Never be denied</p>
    </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b8}
          alt="image3"
        />
        <Carousel.Caption>
      <h3 style={{color:'yellow'}}>Workout Zone </h3>
      <p style={{color:'yellow'}}>Success is usually the culmination of controlling failure</p>
    </Carousel.Caption>
      </Carousel.Item>
    
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b6}
          alt="image4"
        />
       <Carousel.Caption>
      <h3 style={{color:'purple'}}>Workout Zone</h3>
      <p style={{color:'purple'}}>Train like a beast. Look like a beauty</p>
    </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
    
            </div>

        /*<div class="container-lg-1 container-sm-1" >
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>*/
        
    )
}

export default Caro