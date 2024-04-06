import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="StudyHub"
              description="StudyHub is a innovative web-based platform designed to support students from 9th to 12th standard in their academic pursuits. The website aims to be a centralized hub for students to access a vast repository of subject-specific formulas and resources, empowering them to excel in their studies."
              ghLink="https://github.com/ARADHYAKASHIV/studyhub6996"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Zomato Landing Page"
              description="The Zomato landing page is designed to be a captivating and intuitive interface that immediately engages the user. At the forefront of the landing page is a prominent search bar, empowering users to effortlessly explore a vast database of restaurants, cuisines, and dining options."
              ghLink="https://github.com/ARADHYAKASHIV/Zomato-landing-page"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DisenyPlus Hotstar Clone"
              description="The Disney+ Hotstar clone landing page is designed to be a visually striking and intuitive gateway to a world of entertainment. Immediately, users are greeted with a sleek and modern interface that showcases the platform's core offerings – from the latest blockbuster movies and hit television shows to a vast library of timeless classics and captivating original content."
              ghLink="https://github.com/ARADHYAKASHIV/DisneyPlus-Hotstar-Clone"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfoloi Website 2.0"
              description="In the dynamic world of personal branding and online presence, the Portfolio Website 2.0 stands as a meticulously crafted digital canvas, designed to showcase your talent, expertise, and unique professional narrative. This next-generation portfolio website is a culmination of thoughtful design, strategic content curation, and a relentless pursuit of innovation."
              ghLink="https://github.com/ARADHYAKASHIV/aradhyakashiv.github.io"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention.this project is currently not mine"
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
