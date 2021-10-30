import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="py-5 bg-primary">
      <Container>
        <Row>
          <Col md={6} sm>
            1
          </Col>
          <Col md={6} sm>
            2
          </Col>
          <Col md={6} sm>
            2
          </Col>
          <Col md={6} sm>
            4
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
