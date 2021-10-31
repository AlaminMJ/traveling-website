import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import img from "../../Assets/images/undraw_contact_us_15o2.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="banner bg-primary py-5">
        <Container className="py-5">
          <h4 className="text-white display-2">Contact</h4>
        </Container>
      </div>
      <div className="contact-form py-5">
        <Container>
          <Row>
            <Col md={12} lg={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Control placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <textarea
                    placeholder="Massage"
                    className="form-control"
                    rows={5}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send Massage
                </Button>
              </Form>
            </Col>
            <Col
              className="d-md-none  d-lg-block"
              md={12}
              lg={6}
            >
              <img src={img} alt="contact" style={{width: "100%"}} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
