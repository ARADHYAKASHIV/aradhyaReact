import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/aradhyakashiv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }} className="tw-mt-10 tw-mb-5 tw-z-10">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px", width: "100%" }}
            className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-[#c770f0] tw-text-white hover:tw-bg-[#a855f7] hover:tw-text-white tw-rounded-full tw-py-3 tw-text-lg tw-font-semibold hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.5)] tw-transition-all tw-duration-300 tw-group tw-border-none tw-cursor-pointer tw-no-underline"
          >
            <AiOutlineDownload size={22} className="group-hover:tw-animate-bounce" />
            Download CV
          </a>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }} className="tw-mt-10 tw-mb-5 tw-z-10">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{ maxWidth: "250px", width: "100%" }}
            className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-bg-[#c770f0] tw-text-white hover:tw-bg-[#a855f7] hover:tw-text-white tw-rounded-full tw-py-3 tw-text-lg tw-font-semibold hover:tw-shadow-[0_0_20px_rgba(199,112,240,0.5)] tw-transition-all tw-duration-300 tw-group tw-border-none tw-cursor-pointer tw-no-underline"
          >
            <AiOutlineDownload size={22} className="group-hover:tw-animate-bounce" />
            Download CV
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
