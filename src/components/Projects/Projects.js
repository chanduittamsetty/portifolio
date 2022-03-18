import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bb from "../../Assets/Projects/bb.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import yesstyle from "../../Assets/Projects/yesstyle.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import { toBeEnabled } from "@testing-library/jest-dom/dist/matchers";

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
              imgPath={bb}
              isBlog={false}
              title="Bobbi Brown Cosmetics Clone"
              description="Bobbi Brown Cosmetics is a global prestige beauty brand that empowers women to embrace and enhance their individual beauty.."
              link="https://github.com/chanduittamsetty/constructproject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yesstyle}
              isBlog={false}
              title="Yes Style Clone"
              description="YesStyle is a trusted and reliable source for Asian brands, with many shoppers."
              link="https://github.com/RoshanIndane/Unit4_YesstyleClone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
