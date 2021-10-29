// import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const OrderPlace = () => {
  const { user } = useAuth();
  const [tourDatails, setTourDatails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTourDatails(data);
      });
  }, []);

  const handelName = (e) => {
    user.displayName = e.target.value;
  };

  return (
    <div>
      <h1 className="display-3 text-center">Place Order</h1>
      <Container className="py-5">
        <Row>
          <Col sm={6} className="py-2">
            <Card>
              <Card.Img
                variant="top"
                src={tourDatails?.photoURL}
                style={{ height: "320px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{tourDatails?.title}</Card.Title>
                {/* <Card.Text></Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} className=" py-2 px-3">
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={user?.displayName}
                    onChange={handelName}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={user?.email}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderPlace;
