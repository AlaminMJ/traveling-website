import React from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import img1 from "../../Assets/images/leader1.jpg";
import img2 from "../../Assets/images/leader2.jpg";
import img3 from "../../Assets/images/leader3.jpg";
import img4 from "../../Assets/images/leader4.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="banner py-5">
        <Container className="py-5">
          <h4 className="display-2 text-white">About us</h4>
        </Container>
      </div>
      {/* leader */}
      <div className="leader py-5">
        <Container>
          <h4 className="display-5 mb-5 text-center">Leadership Team</h4>
          <Row xs={1} md={2} lg={4} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={img1}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Eva Hicks</Card.Title>
                  <Card.Text className="text-center">CEO</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={img2}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Evan Porter</Card.Title>
                  <Card.Text className="text-center">COO</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={img3}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Donald Wolf</Card.Title>
                  <Card.Text className="text-center">Account Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={img4}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-center">Kody Byrd</Card.Title>
                  <Card.Text className="text-center">QA Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
