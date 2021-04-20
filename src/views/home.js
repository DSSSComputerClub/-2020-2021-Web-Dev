import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

// Importing my components
import Navigation from "../components/navbar";
import Footer from "../components/footer";
import RowComponent from "../components/RowComponent";

// Importing images
import ME from "../assets/ME.jpg";

const HomeApp = () => {
  return (
    <div>
      <section className="wrapper landing">
        <Navigation />
        <Container>
          <div className="left">
            <h1>
              Shahrukh Qureshi <br />I like to code
            </h1>
            <Button
              variant="outline-light"
              className="w-50"
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click me
            </Button>
          </div>
        </Container>
      </section>
      <section className="section-about ">
        <Container>
          <Row className="pt-5 pb-5">
            <Col>
              <img src={ME} alt="ME" />
            </Col>
            <Col>
              <div className="about-me">
                <h3>My name is Shahrukh Qureshi</h3>
                <p>
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages. I'm ready to learn
                  from anyone willing to teach!
                </p>
                <Button
                  variant="outline-dark"
                  href="/resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="section-project pb-5 pt-5 text-center">
        <h2 className=" mt-2 mb-4">My Projects</h2>
        <Container>
          <RowComponent
            heading="Sample HEading"
            caption="Sample caption"
            url="https://www.google.ca/"
            btnText="Sample btn text"
            img={ME}
          />
          <RowComponent
            heading="Sample HEading"
            caption="Sample caption"
            url="https://www.google.ca/"
            btnText="Sample btn text"
            img={ME}
          />
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default HomeApp;
