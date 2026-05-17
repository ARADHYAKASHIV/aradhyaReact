import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import FadeContent from "../Animations/FadeContent";
import BlurText from "../Animations/BlurText";
import AnimatedContent from "../Animations/AnimatedContent";
import Magnet from "../Animations/Magnet";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <FadeContent blur duration={1.2}>
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }} className="tw-mb-8">
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body tw-text-lg">
                I fell in love with programming and I have at least learnt
                something, I think... 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> C/C++, Python and mySQL. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Development and Designing </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Cybersecurity.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar tw-relative tw-flex tw-justify-center">
              <div className="tw-absolute tw-inset-0 tw-bg-[#c770f0] tw-rounded-full tw-blur-[100px] tw-opacity-20"></div>
              <AnimatedContent delay={300} direction="vertical" distance={40} className="tw-relative tw-z-10">
                <Tilt gyroscope={true} glareEnable={true} glareMaxOpacity={0} glareColor="#c770f0" glarePosition="all">
                  <img src={myImg} className="img-fluid tw-drop-shadow-[0_0_40px_rgba(199,112,240,0.3)] hover:tw-scale-105 tw-transition-transform tw-duration-500" alt="avatar" />
                </Tilt>
              </AnimatedContent>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social tw-mt-12">
              <BlurText text="FIND ME ON" delay={50} className="tw-justify-center tw-text-4xl tw-font-bold tw-mb-2" />
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="tw-flex tw-justify-center tw-gap-6 tw-p-0 tw-mt-6">
                <li className="social-icons">
                  <Magnet padding={60} magnetStrength={2}>
                    <a
                      href="https://github.com/aradhyakashiv"
                      target="_blank"
                      rel="noreferrer"
                      className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.6)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                    >
                      <AiFillGithub size={24} />
                    </a>
                  </Magnet>
                </li>
                <li className="social-icons">
                  <Magnet padding={60} magnetStrength={2}>
                    <a
                      href="mailto:kashiv.aradhya@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.6)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                    >
                      <AiFillMail size={24} />
                    </a>
                  </Magnet>
                </li>
                <li className="social-icons">
                  <Magnet padding={60} magnetStrength={2}>
                    <a
                      href="https://www.linkedin.com/in/aradhya-kashiv-6b7b7a256/"
                      target="_blank"
                      rel="noreferrer"
                      className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.6)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                    >
                      <FaLinkedinIn size={24} />
                    </a>
                  </Magnet>
                </li>
                <li className="social-icons">
                  <Magnet padding={60} magnetStrength={2}>
                    <a
                      href="https://www.instagram.com/_aradhya_05_"
                      target="_blank"
                      rel="noreferrer"
                      className="tw-flex tw-items-center tw-justify-center tw-w-12 tw-h-12 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.6)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                    >
                      <AiFillInstagram size={24} />
                    </a>
                  </Magnet>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </FadeContent>
    </Container>
  );
}
export default Home2;
