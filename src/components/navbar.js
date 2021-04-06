import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Navbar.Brand>Shahrukh Qureshi</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>Software</Nav.Link>
          <Nav.Link href="/resume" target="_blank" rel="noopener noreferrer">
            Resume
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
