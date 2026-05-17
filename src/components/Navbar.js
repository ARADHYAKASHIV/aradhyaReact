import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

import { CgFileDocument,CgCodeSlash } from "react-icons/cg";
import Magnet from "./Animations/Magnet";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky navbar tw-backdrop-blur-[20px] tw-bg-[#1b1a2e]/90" : "navbar tw-bg-transparent"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo tw-transition-transform hover:tw-scale-110 tw-duration-300" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto tw-items-center" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className="tw-relative tw-transition-all hover:tw-text-[#c770f0] tw-group hover:tw-[text-shadow:0_0_10px_rgba(199,112,240,0.5)]">
                <AiOutlineHome style={{ marginBottom: "2px" }} className="tw-transition-transform group-hover:tw-scale-125 tw-duration-300" /> Home
                <span className="tw-absolute tw-bottom-1 tw-left-1/2 tw-w-0 tw-h-[2px] tw-bg-[#c770f0] tw-transition-all tw-duration-300 group-hover:tw-w-3/4 group-hover:tw--translate-x-1/2 tw-rounded-full tw-shadow-[0_0_8px_rgba(199,112,240,0.8)]"></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                className="tw-relative tw-transition-all hover:tw-text-[#c770f0] tw-group hover:tw-[text-shadow:0_0_10px_rgba(199,112,240,0.5)]"
              >
                <CgCodeSlash style={{ marginBottom: "2px" }} className="tw-transition-transform group-hover:tw-scale-125 tw-duration-300" /> Skills
                <span className="tw-absolute tw-bottom-1 tw-left-1/2 tw-w-0 tw-h-[2px] tw-bg-[#c770f0] tw-transition-all tw-duration-300 group-hover:tw-w-3/4 group-hover:tw--translate-x-1/2 tw-rounded-full tw-shadow-[0_0_8px_rgba(199,112,240,0.8)]"></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                className="tw-relative tw-transition-all hover:tw-text-[#c770f0] tw-group hover:tw-[text-shadow:0_0_10px_rgba(199,112,240,0.5)]"
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }} className="tw-transition-transform group-hover:tw-scale-125 tw-duration-300"
                />{" "}
                Projects
                <span className="tw-absolute tw-bottom-1 tw-left-1/2 tw-w-0 tw-h-[2px] tw-bg-[#c770f0] tw-transition-all tw-duration-300 group-hover:tw-w-3/4 group-hover:tw--translate-x-1/2 tw-rounded-full tw-shadow-[0_0_8px_rgba(199,112,240,0.8)]"></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                className="tw-relative tw-transition-all hover:tw-text-[#c770f0] tw-group hover:tw-[text-shadow:0_0_10px_rgba(199,112,240,0.5)]"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} className="tw-transition-transform group-hover:tw-scale-125 tw-duration-300" /> Resume
                <span className="tw-absolute tw-bottom-1 tw-left-1/2 tw-w-0 tw-h-[2px] tw-bg-[#c770f0] tw-transition-all tw-duration-300 group-hover:tw-w-3/4 group-hover:tw--translate-x-1/2 tw-rounded-full tw-shadow-[0_0_8px_rgba(199,112,240,0.8)]"></span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn tw-ml-4">
              <Magnet padding={30} magnetStrength={3}>
                <Button
                  href="https://github.com/ARADHYAKASHIV"
                  target="_blank"
                  className="fork-btn-inner tw-rounded-full hover:tw-shadow-[0_0_15px_rgba(199,112,240,0.5)] tw-transition-all"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Magnet>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
