import * as React from "react";
import Layout from "../components/layout";
import { Button, Card, CardGroup, Col, Container, Image, Row } from "react-bootstrap";
import { Github, Link45deg } from "react-bootstrap-icons";
import { hero, pattern, profilePic } from "./index.module.css";
import profile from "../images/profile.jpeg";
import crema from "../images/crema.png";

const IndexPage = () => {
  return (
    <Layout pageTitle="Eric Beecroft">
      <div className={pattern}>
        <Row>
          <Col style={{textAlign: "left"}}>
            <Container className={hero} fluid>
              <h1>Eric Beecroft</h1>
              <h3>G'day! I'm a software engineer based in Sydney with a passion for users and frontend development.</h3>
            </Container>
          </Col>

          <Col sm={12} md={6}>
            <Container fluid>
              <Image src={profile} alt="Bitmoji of Eric" className={profilePic} fluid roundedCircle />
            </Container>
          </Col>
        </Row>

        <hr className="bg border-2 border-top border"></hr>
        <h2 style={{textAlign: "center"}}>Latest Projects</h2>
        {/* <Row xs={1} md={2} className="g-4"> */}
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={crema} />
            <Card.Body>
              <Card.Title>Crema</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="dark" href="https://github.com/ebeecroft1/project3-Crema" target="_blank">
                <Github />{' '}Github
              </Button>
              {' '}
              <Button variant="dark" href="https://crema-7a519.web.app/" target="_blank">
                <Link45deg />{' '}Demo
              </Button>
            </Card.Footer>
          </Card>
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
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Tic Tac Toe</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        {/* </Row> */}
      </div>
    </Layout> 
  );
};

export default IndexPage;