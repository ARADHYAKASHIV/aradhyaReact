import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import BlurText from "../Animations/BlurText";
import FadeContent from "../Animations/FadeContent";
// import { Button } from "../ui/button";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { CgArrowRight } from "react-icons/cg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🖐
                </span>
              </h1>

              <h1 className="heading-name tw-flex tw-items-center">
                I'M
                <strong className="main-name tw-ml-4 tw-px-2 tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-[#c770f0] tw-via-[#a855f7] tw-to-[#623686] tw-animate-gradient tw-bg-[length:200%_auto]">
                  <BlurText text="ARADHYA KASHIV" delay={150} direction="bottom" animateBy="words" />
                </strong>
              </h1>

              <div style={{ padding: 48, textAlign: "left", marginTop: -25 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <FadeContent blur duration={1.5} delay={200}>
                <div className="tw-relative">
                  <div className="tw-absolute tw-inset-0 tw-bg-[#c770f0] tw-rounded-full tw-blur-[100px] tw-opacity-20 "></div>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid tw-relative tw-z-10 tw-drop-shadow-[0_0_30px_rgba(199,112,240,0.3)] hover:tw-scale-105 tw-transition-transform tw-duration-700 tw-ease-out"
                    style={{ maxHeight: "500px" }}
                  />
                </div>
              </FadeContent>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
