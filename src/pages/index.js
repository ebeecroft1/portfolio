import * as React from "react";
import Layout from "../components/layout";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { EnvelopeFill, Github, Linkedin, Link45deg } from "react-bootstrap-icons";
import { content, hero, icon, languages, pattern, profilePic } from "./index.module.css";
import profile from "../images/profile.jpeg";
import crema from "../images/crema.png";
import starting5 from "../images/starting5.png";
import tictactoe from "../images/tictactoe.png";

const IndexPage = () => {
  return (
    <Layout pageTitle="Eric Beecroft">
      <div className={pattern}>
        <div className={content}>
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

        </div>

        <hr className="bg border-2 border-top border"></hr>

        <div className={content}>
          
          <h2 style={{textAlign: "center"}}>Latest Projects</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={crema} />
                <Card.Body>
                  <Card.Title>Crema</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">May 2022</Card.Subtitle> */}
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
                <Card.Img variant="top" src={starting5} />
                <Card.Body>
                  <Card.Title>Starting 5</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">April 2022</Card.Subtitle> */}
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

            <Col>
              <Card>
                <Card.Img variant="top" src={tictactoe} />
                <Card.Body>
                  <Card.Title>Tic Tac Toe</Card.Title>
                  <Card.Text>
                    The classic Tic Tac Toe with one or two easter eggs utilizing Javascript for the game logic.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="dark" href="https://github.com/ebeecroft1/project0-tictactoe" target="_blank">
                    <Github />{' '}GitHub
                  </Button>
                  {' '}
                  <Button variant="dark" href="https://ebeecroft1.github.io/project0-tictactoe/" target="_blank">
                    <Link45deg />{' '}Demo
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

          </Row>
        </div>

        <hr className="bg border-2 border-top border"></hr>

        <div className={content} style={{textAlign: "center"}}>
          <h2>Languages</h2>
          <div className={languages}>
            {/* Javascript */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript" className={icon}/>
            {/* HTML */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML" className={icon}/>
            {/* CSS */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS" className={icon}/>
            {/* React */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className={icon}/>
            {/* Vue */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" className={icon}/>
            {/* jQuery */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="jQuery" className={icon}/>
            {/* Ruby */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" alt="Ruby" className={icon}/>
            {/* Rails */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt="Rails" className={icon}/>
            {/* Node */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" className={icon}/>
            {/* Express */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className={icon}/>
            {/* Postgres */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className={icon}/>
            {/* Github */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className={icon}/>
            {/* Firebase */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className={icon}/>
            {/* MongoDB */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className={icon}/>
            {/* Heroku */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt="Heroku" className={icon}/>
          </div>
        </div>
        
      </div>
    </Layout> 
  );
};

export default IndexPage;