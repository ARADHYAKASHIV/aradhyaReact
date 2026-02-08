import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.svg";
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
              title="WHISPR"
              description="Real-time chat application leveraging React frontend with Node.js/Express backend. Implements secure user authentication via Firebase, persistent data storage with MongoDB, and instant messaging through Socket.io. Features a modern, responsive interface styled with Tailwind CSS. Optimized deployment on Vercel platform."
              ghLink="https://github.com/ARADHYAKASHIV/whispr"
              demoLink="https://whisprr.vercel.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="PrepWise"
              description="Developed a Full-Stack A1-powered mock interview platform simulating real-time technical
interviews using GPT-based models
Integrated real-time voice input/output using Web Speech API and OpenAl API for
dynamic, conversational interactions
Provided instant, A1-driven feedback on answers, helping users identify improvement areas
in real time"
              ghLink="https://github.com/ARADHYAKASHIV/PrepWise"
              demoLink="https://prepwise-snowy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DART"
              description="Developed a hardware-based end-to-end tracking system for dual-use chemicals, ensuring secure monitoring from manufacture to end-use/export. Integrate blockchain-based documentation and machine learning within the hardware to detect anomalies and prevent falsified documentation. This solution ensures the chemicals are used strictly for legitimate purposes."
              ghLink="https://github.com/ARADHYAKASHIV/DART"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="RAKSHAK"
              description="                                                                                                                                                                     Solution to remotely track police officers deployed  in bandobast duty :
                          With our hand wearable device which records and monitor the officer's live location

                          Desktop Application - Monitors real time location & receives alerts from the system. 

                          Using a PASSCODE/SECURITY KEY: As it provides an added layer of security, initialization and verification.
 
                          Digital lock feature prevents unauthorized access to the device

                          SOS alert button provides a distress signal in case of an emergency."
              ghLink="https://github.com/ARADHYAKASHIV/"
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
              demoLink="https://aradhya.framer.ai/"
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

/*Developed a React-based real-time chat application with a Node.js + Express backend for seamless communication and scalability.

• Integrated Firebase Authentication for secure login and MongoDB for efficient data storage, managing user data and chat histories seamlessly.

• Implemented WebSocket (Socket.io) for real-time messaging and designed a responsive IJI with Tailwind CSS. Deployed on Vercel for optimized performance and high availability.*/
