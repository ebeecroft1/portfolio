import * as React from "react";
import Layout from "../components/layout";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { EnvelopeFill, Github, Linkedin, Link45deg } from "react-bootstrap-icons";
import { hero, pattern, profilePic } from "./index.module.css";
import profile from "../images/profile.jpeg";
import crema from "../images/crema.png";
import starting5 from "../images/starting5.png";

const IndexPage = () => {
  return (
    <Layout pageTitle="Eric Beecroft">
      <div className={pattern}>
        <Row>
          <Col style={{textAlign: "right"}} sm={12} md={6}>
            <Container className={hero} fluid>
              <h1>Eric Beecroft</h1>
              <h3>G'day! I'm a software engineer based in Sydney with a passion for users and frontend development.</h3>
              <Button variant="outline-dark" href="https://github.com/ebeecroft1" target="_blank">
                <Github  style={{fontSize: "2em"}}/>
              </Button>
              {' '}
              <Button variant="outline-dark" href="https://www.linkedin.com/in/eric-beecroft/" target="_blank">
                <Linkedin style={{fontSize: "2em"}}/>
              </Button>
              {' '}
              <Button variant="outline-dark" href="mailto:eric.beecroft@gmail.com">
                <EnvelopeFill style={{fontSize: "2em"}}/>{' '}
              </Button>
            </Container>
          </Col>

          <Col>
            {/* <Container> */}
              <Image src={profile} alt="Awkward profile picture of Eric" className={profilePic} fluid roundedCircle />
            {/* </Container> */}
          </Col>
        </Row>

        <hr className="bg border-2 border-top border"></hr>
        <h2 style={{textAlign: "center"}}>Latest Projects</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
        
          <Card>
            <Card.Img variant="top" src={crema} />
            <Card.Body>
              <Card.Title>Crema</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">May 2022</Card.Subtitle>
              <Card.Text>
                Cafe search and review website utilizing Google Maps API.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="dark" href="https://github.com/ebeecroft1/project3-Crema" target="_blank">
                <Github />{' '}GitHub
              </Button>
              {' '}
              <Button variant="dark" href="https://crema-7a519.web.app/" target="_blank">
                <Link45deg />{' '}Demo
              </Button>
            </Card.Footer>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Starting 5</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          </Col>
          <Col>
          <Card>
            <Card.Img variant="top" src={starting5} />
            <Card.Body>
              <Card.Title>Starting 5</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">April 2022</Card.Subtitle>
              <Card.Text>
                NBA fantasy app where users can draft their Starting 5 players.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="dark" href="https://github.com/ebeecroft1/project1-StartingFive" target="_blank">
                <Github />{' '}GitHub
              </Button>
              {' '}
              <Button variant="dark" href="https://starting-5.herokuapp.com/" target="_blank">
                <Link45deg />{' '}Demo
              </Button>
            </Card.Footer>
          </Card>
        
        </Col>
        </Row>

        <hr className="bg border-2 border-top border"></hr>
        <h2 style={{textAlign: "center"}}>Languages</h2>

      </div>
    </Layout> 
  );
};

export default IndexPage;