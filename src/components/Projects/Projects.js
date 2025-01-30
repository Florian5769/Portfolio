import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Beall from "../../Assets/Projects/Beall.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Beall}
              isBlog={false}
              title="Be All"
              description="Sports Information Platform

                    Development of an innovative web platform dedicated to sports information, designed to offer an alternative to existing market solutions. The project consists of three components: an admin desktop application (Electron) for back-office management, a public web application (React/Angular) enabling live match tracking, article creation and podcasts, and a centralized backend API.
                    Key Technologies: Frontend: React, Backend: RESTful API, Desktop: Electron (Node.js).

                    The project demonstrates my full-stack development skills and ability to design a complete solution, from user interface to backend architecture, using modern web technologies."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
