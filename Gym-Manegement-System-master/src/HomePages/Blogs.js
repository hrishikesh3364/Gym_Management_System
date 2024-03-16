import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import blogs1 from '../images/blogs1.jpg';
import blogs2 from '../images/blogs2.jpg';
import fasti from '../images/fasti.jpg';
import myblog from '../images/blogimg.jpg';

const Blogs = () => {
  return (
    <>
      <div>
        <Image
          src={myblog}
          width="100%"
          height="400px"
          className="rounded mx-auto d-block"
        />
        <br></br>
        <br></br>
        <br></br>
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
            GYM BLOGS
          </h1>
        </div>

        <Container style={{ marginTop: '80px' }}>
          <Row>
            <Col>
              <Image src={blogs1} width="100%" height="400px" />
            </Col>
            <Col>
              <h3 style={{ color: 'red' }}>Featured Story </h3>
              <p style={{ color: 'red' }}>
                21 Sep 2021 Workout Zone Challenge National Winners (Top 5)
              </p>
              “I Am Passionate About Our Iconic Brand And About Leading This
              Team Of Talented, Committed And Caring People,” Said Zeitsiff.
              “We Have A Strong Vision For The Future Of This Company And Will
              Be Laser-Focused On Partnering With Our Global Franchise Community
              To Continue To Grow The Brand And Expand Our Worldwide Prominence
              In The Fitness Industry.”
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '120px' }}>
          <Row>
            <Col>
              <h2 style={{ color: 'red' }}>How Do I Cut Down Belly Fat?</h2>
              ‘Abs Are Made In The Kitchen’. How Many Times Have You Heard Or
              Seen This Quote While Browsing On How To Lose Belly Fat Fast?
              This Holds True, Without A Proper Diet With The Proper Foods, You
              Will Not Achieve Those Six Pack Abs That You Crave So Much.
              But What Foods Should You Consume?
          
            </Col>
            <Col>
              <Image src={blogs2} width="100%" />
            </Col>
          </Row>
        </Container>

        <Container style={{ marginTop: '120px' }}>
          <Row>
            <Col>
              <Image src={fasti} width="100%" />
            </Col>
            <Col>
              <h3 style={{ color: 'red' }}>Grow, Nourish, Sustain Through Food!</h3>
              It’s Said The Basic Need Of The Individual Is Roti (Food), Kapda
              (Body) And Makaan (Shelter). Give A Deep Thought To This, You Will
              Be Amazed That Food Influences The Clothes Size That We Wear And
              The Kind Of Sleep That We Get Each Day!
           
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
