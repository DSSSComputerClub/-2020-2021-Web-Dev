import React from "react";
import { Container } from "react-bootstrap";

// Importing images for footer
import LINKEDIN from "../assets/linkedin.png";
import GITHUB from "../assets/rsz_github_icon.png";

const Footer = () => {
  return (
    <Container fluid className="text-center footer">
      <div className="pt-5 pb-3">
        <a
          href="https://www.linkedin.com/in/shahrukh-qureshi-a735031b1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LINKEDIN} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/ShaleeQureshi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GITHUB} alt="LinkedIn" />
        </a>
        <hr id="underline" />
        <p>© 2021 - Shahrukh Qureshi</p>
      </div>
    </Container>
  );
};
export default Footer;
