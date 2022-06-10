import * as React from "react";
import Layout from "../components/layout";
import { ConeStriped } from "react-bootstrap-icons";
import { content, title } from "./projects.module.css";
import { Container } from "react-bootstrap";

const ProjectsPage = () => {
    return (
        <Layout pageTitle="Projects | Eric Beecroft">
            <Container className={content} fluid>
                <ConeStriped style={{fontSize: "5em", color: "#EBA63F"}}/>
                <h1 className={title}>Coming soon</h1>
                <ConeStriped style={{fontSize: "5em", color: "#EBA63F"}}/>
            </Container>
        </Layout>
    );
};

export default ProjectsPage;