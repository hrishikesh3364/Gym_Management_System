  import { Container } from "react-bootstrap"
  import {Row,Col,Image} from 'react-bootstrap'
  import a1 from '../images/a1.jpg';
  import a2 from '../images/a2.jpg';
  import a3 from '../images/a3.jpg';
  import a4 from '../images/a4.jpg';
  import sam from '../images/sam.png';
  import saurav from '../images/saurav.png';
  //import Vishal from '../images/Vishal.png';
  const Contact= () => {
      return (
      <>
        <div
            className="blog-box"
            style={{
              backgroundColor: '#f0f0f0',
              width:'400px',
              padding: '20px',
              border: '2px solid #e0e0e0',
              borderRadius: '50px',
              transition: 'background-color 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop:'70px'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#e0e0e0';
              e.currentTarget.style.cursor = 'pointer';
              e.currentTarget.style.boxShadow =
                '0px 9px 10px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f0f0';
              e.currentTarget.style.cursor = 'default';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <h1 className="yel" style={{ color: 'black', textAlign: 'center' }}>
              Contact
            </h1>
          </div>


          <Container style={{marginTop:'50px'}}>
      <Row >
        <Col><Image src= {a3}  width= "70%" height="90%" /></Col>
        <Col>
        <h1 style={{color:"red",textAlign:"center",fontSize:'60px'}}>Workout Zone Pune </h1><br/>
        <h1 style={{color:'black',fontWeight:'bold',fontSize:'50px'}}>Gunj Pardeshi</h1><br/>
        <p  style={{fontSize:'25px'}}>WE ARE ALWAYS READY TO HEAR FROM YOU :
        <br/>
        OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
        <br/>
        
        </p>

        </Col>
      </Row>
    </Container>
      
      <Container style={{marginTop:'50px'}}>
      <Row >
        <Col><Image src= {saurav} width= "70%" height="80%"  /></Col>
        <Col>
        <h1 style={{color:"red",textAlign:"center",fontSize:'60px'}}>Workout Zone Mumbai </h1><br/>
        <h1 style={{color:'black',fontWeight:'bold',fontSize:'50px'}}>Saurav Patil </h1><br/>
        <p style={{fontSize:'25px'}}>WE ARE ALWAYS READY TO HEAR FROM YOU :
        <br/>

  OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>

  </p>
        </Col>
      </Row>
    </Container>


    <Container style={{marginTop:'50px'}}>
      <Row >
        <Col><Image src= {a2}  width= "70%" height="80%" /></Col>
        <Col>
        <h1 style={{color:"red",textAlign:"center",fontSize:'60px'}}>Workout Zone Nashik</h1><br/>
        <h1 style={{color:'black',fontWeight:'bold',fontSize:'50px'}}>Hrishikesh Sonavane</h1><br/>
        <p  style={{fontSize:'25px'}}>WE ARE ALWAYS READY TO HEAR FROM YOU :
        <br/>
        OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
        <br/>
      
        </p>
        </Col>
        
      </Row>
    </Container>


    <Container style={{marginTop:'50px'}}>
      <Row >
        <Col><Image src= {a1}  width= "70%" height="90%" /></Col>
        <Col>
        <h1 style={{color:"red",textAlign:"center",fontSize:'60px'}}>Workout Zone Pune </h1><br/>
        <h1 style={{color:'black',fontWeight:'bold',fontSize:'50px'}}>Vishal Vaje</h1><br/>
        <p  style={{fontSize:'25px'}}>WE ARE ALWAYS READY TO HEAR FROM YOU :
        <br/>
        OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
        <br/>
        
        </p>

        </Col>
      </Row>
    </Container>
    <Container style={{marginTop:'50px'}}>
      <Row >
      <Col><Image src= {a4}  width= "80%" height="90%" /></Col>
      <Col>
      <h1 style={{color:"red",textAlign:"center",fontSize:'60px'}}>Workout Zone Delhi </h1><br/>
        <h1 style={{color:'black',fontWeight:'bold',fontSize:'50px'}}>Jitesh Mahajan </h1><br/>
        <p  style={{fontSize:'25px'}}>WE ARE ALWAYS READY TO HEAR FROM YOU :
        <br/>
        OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
        <br/>
        
        </p>

      </Col>
      
        
      </Row>
    </Container>
    


    <Container style={{marginTop:'50px'}}>
      <Row >
        <Col><Image src= {sam}  width= "70%" height="70%" /></Col>
        <Col>
        <h1 style={{color:"red",textAlign:"center",fontSize:'60px'}}>Workout Zone Pune </h1><br/>
        <h1 style={{color:'black',fontWeight:'bold',fontSize:'50px'}}>Shyam Kochewad</h1><br/>
        <p  style={{fontSize:'25px'}}>WE ARE ALWAYS READY TO HEAR FROM YOU :
        <br/>
        OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
        <br/>
        
        </p>

        </Col>
      </Row>
    </Container>
  


  
  </>
      )
  } 

  export default Contact