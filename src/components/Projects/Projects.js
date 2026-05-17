import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.svg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import aiVideoGen from "../../Assets/Projects/ai-video-generator.jpg";
import theWings from "../../Assets/Projects/the-wings.png";
import FadeContent from "../Animations/FadeContent";
import BlurText from "../Animations/BlurText";
import { motion } from "framer-motion";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <FadeContent blur className="tw-w-full">
        <Container>
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mb-4">
            <h1 className="project-heading tw-flex tw-gap-2">
              <BlurText text="My Recent" delay={50} direction="top" className="tw-font-bold tw-text-white" />
              <BlurText text="Works" delay={100} direction="top" className="tw-font-bold tw-text-[#c770f0]" />
            </h1>
          </div>
          <p style={{ color: "white" }} className="tw-text-center tw-mb-10">
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


            <Col md={4} className="project-card">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="tw-h-full">
                <ProjectCard
                  imgPath={chatify}
                  isBlog={false}
                  title="WHISPR"
                  description="Real-time chat application leveraging React frontend with Node.js/Express backend. Implements secure user authentication via Firebase, persistent data storage with MongoDB, and instant messaging through Socket.io."
                  ghLink="https://github.com/ARADHYAKASHIV/whispr"
                  demoLink="https://whisprr.vercel.app/login"
                  techStack={["React", "Node.js", "Firebase", "MongoDB", "Socket.io"]}
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="tw-h-full">
                <ProjectCard
                  imgPath={suicide}
                  isBlog={false}
                  title="PrepWise"
                  description="Developed a Full-Stack AI-powered mock interview platform simulating real-time technical interviews using GPT-based models. Integrated real-time voice input/output using Web Speech API."
                  ghLink="https://github.com/ARADHYAKASHIV/PrepWise"
                  demoLink="https://prepwise-snowy.vercel.app/"
                  techStack={["React", "OpenAI", "Web Speech API", "Node.js"]}
                />
              </motion.div>
            </Col>

                        <Col md={4} className="project-card">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="tw-h-full">
                <ProjectCard
                  imgPath={aiVideoGen}
                  isBlog={false}
                  title="AI Short Video Generator"
                  description="A Full Stack SaaS platform for generating UGC Short Video Ads. Built with the PERN stack (PostgreSQL, Express, React, Node.js), integrated with the Gemini API for AI-powered content generation, and deployed on a VPS."
                  ghLink="https://github.com/ARADHYAKASHIV/AI-Ad-generator/tree/main/client"
                  // demoLink="https://www.youtube.com/watch?v=LY5KYXmKfoU"
                  techStack={["React", "Node.js", "PostgreSQL", "Gemini API"]}
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }} className="tw-h-full">
                <ProjectCard
                  imgPath={bitsOfCode}
                  isBlog={false}
                  title="DART"
                  description="Hardware-based end-to-end tracking system for dual-use chemicals, ensuring secure monitoring from manufacture to end-use/export. Integrate blockchain-based documentation and machine learning."
                  ghLink="https://github.com/ARADHYAKASHIV/DART"
                  techStack={["Blockchain", "IoT", "Machine Learning"]}
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.1 }} className="tw-h-full">
                <ProjectCard
                  imgPath={editor}
                  isBlog={false}
                  title="RAKSHAK"
                  description="Solution to remotely track police officers deployed in bandobast duty. Desktop Application for real-time location monitoring and an SOS alert system to provide distress signals in emergencies."
                  ghLink="https://github.com/ARADHYAKASHIV/"
                  techStack={["Desktop App", "IoT", "Security", "Real-time"]}
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.2 }} className="tw-h-full">
                <ProjectCard
                  imgPath={leaf}
                  isBlog={false}
                  title="Portfolio Website 2.0"
                  description="In the dynamic world of personal branding and online presence, the Portfolio Website 2.0 stands as a meticulously crafted digital canvas, designed to showcase your talent, expertise, and unique professional narrative."
                  ghLink="https://github.com/ARADHYAKASHIV/aradhyakashiv.github.io"
                  demoLink="https://aradhya.framer.ai/"
                  techStack={["React", "Tailwind", "Framer Motion"]}
                />
              </motion.div>
            </Col>

            <Col md={4} className="project-card">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: 0.3 }} className="tw-h-full">
                <ProjectCard
                  imgPath={theWings}
                  isBlog={false}
                  title="The Wings"
                  description="A sample website designed for a college club I headed. Features a modern, animated landing page with smooth scroll effects and a clean, professional layout to represent the club's identity and activities."
                  ghLink="https://github.com/ARADHYAKASHIV/The_wings_Sample/tree/main/my-react-app"
                  demoLink="https://thewings.vercel.app/"
                  techStack={["React", "Vite", "CSS", "Vercel"]}
                />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </FadeContent>
    </Container>
  );
}

export default Projects;
