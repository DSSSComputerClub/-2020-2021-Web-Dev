import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const RowComponent = (props) => {
  return (
    <Row className="pt-2 pb-2">
      <Col sm={true}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img src={props.img} alt="Preview" />
        </a>
      </Col>
      <Col sm={true}>
        <h3>{props.heading}</h3>
        <p>{props.caption}</p>
        <Button
          variant="outline-light"
          className="mb-5"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.btnText}
        </Button>
      </Col>
    </Row>
  );
};
export default RowComponent;
