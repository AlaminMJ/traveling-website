// import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Col, Container, Form, Row, Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";

const OrderPlace = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [tourDatails, setTourDatails] = useState({});
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTourDatails(data);
      });
  }, []);

  const handelAddress = (e) => {
    setAddress(e.target.value);
  };
  const handelNumber = (e) => {
    setNumber(e.target.value);
  };
  const handelDate = (e) => {
    setDate(e.target.value);
  };
  const order = {};

  const handelOrder = (e) => {
    e.preventDefault();
    order.name = user.displayName;
    order.email = user.email;
    order.address = address;
    order.number = number;
    order.tourplace = tourDatails;
    order.date = date;
    axios
      .post("http://localhost:5000/placeorder", order)
      .then(function (response) {
        console.log(response);
        if (response?.data?.insertedId) {
          alert("orser SuccessFull");
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
            <Form onSubmit={handelOrder}>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    value={user?.displayName}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={user?.email}
                    required
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="1234 Main St"
                  onChange={handelAddress}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholde="number"
                  onChange={handelNumber}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={handelDate} required />
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
