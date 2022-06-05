import * as React from "react";
import Layout from "../components/layout";
import { Col, Container, Image, Row } from "react-bootstrap";

const IndexPage = () => {
  return (
    <Layout pageTitle="Eric Beecroft">
      <Row>
        <Col sm={12} md={6}>
          <Image src="https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="background" fluid />
        </Col>
        <Col style={{textAlign: "left"}}>
          <Container fluid>
            <h1>Eric Beecroft</h1>
            <p>G'day! I'm a software engineer based in Sydney with a passion for users and frontend development.</p>
          </Container>
        </Col>
      </Row>
    </Layout> 
  );
};

export default IndexPage;