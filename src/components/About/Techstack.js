// Import necessary React and Bootstrap components
import React from "react";
import { Col, Row } from "react-bootstrap";

// Import icons from react-icons libraries
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  //hello hi there
  // Database management and version control
  DiDatabase,
  
  DiGitCommit,
  DiUbuntu
} from "react-icons/di";
import {
  SiMysql,
  SiHtml5,
  SiCss3,
  
  SiBootstrap,
  SiGnubash,
  SiTailwindcss,
  // SiMariadb,
  SiAlibabacloud,
  
  SiPhp
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// Component to display a grid of technology stack icons
function Techstack() {
  return (
    // Main container row with centered content
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>

      {/* Backend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      {/* Frontend Technologies */}
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      {/* Version Control and Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGitCommit />
      </Col>

      {/* CSS Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      {/* Operating Systems and Environments */}
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu />
      </Col>
      
      {/* Databases and Cloud Services */}
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAlibabacloud />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMariadb />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

// Export the component for use in other parts of the application
export default Techstack;
