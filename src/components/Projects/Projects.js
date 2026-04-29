import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import algo from "../../Assets/Projects/algo.png";

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
              imgPath={algo}
              isBlog={false}
              title="eTagger"
              description="Watch Out for Energy Patterns! Towards Tagging Energy-Sensitive GitHub Issues."
              link="https://github.com/piyushhingu/eTagger"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="ML_compiler"
              description="A sample program to convert an ML model into an LLVM IR AST or any AST."
              link="https://github.com/piyushhingu/ML_compiler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Test_llvm_compiler"
              description="A sample Kaleidoscope language compiler using LLVM."
              link="https://github.com/piyushhingu/Test_llvm_compiler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Distributed_Systems"
              description="Logical clocks and Message ordering implementations."
              link="https://github.com/piyushhingu/Distributed_Systems"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
