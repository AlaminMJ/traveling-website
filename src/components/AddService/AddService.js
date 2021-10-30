import React from "react";
import { Form, Button, Row, Container } from "react-bootstrap";

const AddService = () => {
  return (
    <div>
      <Container>
        <h3 className="display-3 text-center py-2">Add Service</h3>
        <Form className="w-50 mx-auto">
          <Row className="mb-3">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location" />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Time</Form.Label>
            <Form.Control placeholder="4 hours" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Cost</Form.Label>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label> Online Photo Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="http//:image/jpeg;base64,/"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddService;
