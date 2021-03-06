import * as React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { EnvelopeFill, Github, Linkedin } from "react-bootstrap-icons";
import { footer, footerContact, footerText, logo, main, navColor, navLinkItem} from "./layout.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/sora";
import "@fontsource/eczar";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={main} >
            <title>{ pageTitle }</title>
            <Navbar className={navColor} expand="md" sticky="top" fluid>
                <Container fluid>
                    <Navbar.Brand href="/" className={logo}>EB</Navbar.Brand>
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className={navLinkItem} href="/about">About</Nav.Link>
                            <Nav.Link className={navLinkItem} href="/projects">Projects</Nav.Link>
                            <Nav.Link className={navLinkItem} href="/resume">Resume</Nav.Link>
                            <Nav.Link className={navLinkItem} href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid>
                { children }
            </Container>
            <Container className={footer} fluid>
                <Container className={footerContact} fluid>
                    <Button variant="outline-light" href="mailto:eric.beecroft@gmail.com" style={{margin: "2em"}}>
                    <EnvelopeFill style={{fontSize: "3em"}}/>
                    </Button>
                    {' '}
                    <Button variant="outline-light" href="https://github.com/ebeecroft1" target="_blank" style={{margin: "2em"}}>
                    <Github  style={{fontSize: "3em"}}/>
                    </Button>
                    {' '}
                    <Button variant="outline-light" href="https://www.linkedin.com/in/eric-beecroft/" target="_blank" style={{margin: "2em"}}>
                    <Linkedin style={{fontSize: "3em"}}/>
                    </Button>
                </Container>

                <Container className={footerText}>
                    <p>Site made with Gatsby and React</p>
                </Container>
                <Container className={footerText}>
                    <p>&copy; 2022 Eric Beecroft</p>
                </Container>
                
            </Container>

        </div>
    )
};

export default Layout;