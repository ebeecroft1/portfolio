import * as React from "react";
import Layout from "../components/layout";
import { Col, Container, Image, Row } from "react-bootstrap";
import { hero, pattern, profilePic } from "./index.module.css";
import profile from "../images/profile.jpeg";

const IndexPage = () => {
  return (
    <Layout pageTitle="Eric Beecroft">
      <div className={pattern}>
      <Row>
        <Col sm={12} md={6}>
          <Container fluid>
            <Image src={profile} alt="Bitmoji of Eric" className={profilePic} fluid roundedCircle />
          </Container>
        </Col>
        <Col style={{textAlign: "left"}}>
          <Container className={hero} fluid>
            <h1>Eric Beecroft</h1>
            <p>G'day! I'm a software engineer based in Sydney with a passion for users and frontend development.</p>
          </Container>
        </Col>
      </Row>
      </div>
    </Layout> 
  );
};

export default IndexPage;