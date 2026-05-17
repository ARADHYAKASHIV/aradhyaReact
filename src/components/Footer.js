import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Aradhya Kashiv</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>@ {year} AK.</h3>
        </Col>
        {/* <Col md="4" className="footer-body">
          <ul className="footer-icons tw-flex tw-justify-center md:tw-justify-end tw-gap-4 tw-p-0">
            <li className="social-icons">
              <a
                href="https://github.com/aradhyakashiv"
                className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_15px_rgba(199,112,240,0.5)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub size={20} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:kashiv.aradhya@gmail.com"
                className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_15px_rgba(199,112,240,0.5)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail size={20} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/aradhya-kashiv-6b7b7a256/"
                className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_15px_rgba(199,112,240,0.5)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={20} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_aradhya_05_"
                className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-rounded-full tw-bg-white/5 hover:tw-bg-[#c770f0]/20 tw-text-white hover:tw-text-[#c770f0] hover:tw-shadow-[0_0_15px_rgba(199,112,240,0.5)] tw-transition-all tw-duration-300 hover:tw-scale-110"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram size={20} />
              </a>
            </li>
          </ul>
        </Col> */}
      </Row>
    </Container>
  );
}

export default Footer;
