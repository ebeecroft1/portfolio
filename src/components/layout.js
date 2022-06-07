import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {pattern} from "./layout.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ pageTitle, children }) => {
    return (
        // <Container fluid>
        <div className={pattern}>
            <title>{ pageTitle }</title>
            <Navbar bg="transparent" variant="dark" expand="md" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/" style={{color: "white"}}>Eric Beecroft</Navbar.Brand>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            {/* <Nav.Link href="/">Home</Nav.Link> */}
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/">Projects</Nav.Link>
                            <Nav.Link href="/">Resume</Nav.Link>
                            <Nav.Link href="/">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid>
                {/* <h1>{ pageTitle }</h1> */}
                { children }
            </Container>
        </div>
        // </Container>
    )
};

export default Layout;