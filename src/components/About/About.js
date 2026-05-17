import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import { motion } from "framer-motion";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img tw-relative"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="tw-relative"
            >
              <div className="tw-absolute tw-inset-0 tw-bg-[#c770f0] tw-rounded-full tw-blur-[120px] tw-opacity-20"></div>
              <img src={laptopImg} alt="about" className="img-fluid tw-relative tw-z-10 tw-drop-shadow-[0_0_40px_rgba(199,112,240,0.3)] hover:tw--translate-y-4 tw-transition-transform tw-duration-700" />
            </motion.div>
          </Col>
        </Row>
            <Github />
      </Container>
    </Container>
  );
}

export default About;
