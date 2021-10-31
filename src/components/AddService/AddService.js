import axios from "axios";
import React, { useRef } from "react";
import { Form, Button, Row, Container } from "react-bootstrap";

const AddService = () => {
  const locationRef = useRef();
  const titleRef = useRef();
  const timeRef = useRef();
  const costRef = useRef();
  const photoURLRef = useRef();
  const handelAddService = (e) => {
    e.preventDefault();
    const newService = {
      location: locationRef?.current?.value,
      title: titleRef?.current?.value,
      time: timeRef?.current?.value,
      cost: costRef?.current?.value,
      photoURL: photoURLRef?.current?.value,
    };

    axios
      .post("http://localhost:5000/addservice", newService)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Inserted service successfully");
          e.target.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Container>
        <h3 className="display-3 text-center py-2">Add Service</h3>
        <Form className="w-50 mx-auto py-3" onSubmit={handelAddService}>
          <Row className="mb-3">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Location"
                required
                maxlength="80"
                ref={locationRef}
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                required
                maxlength="100"
                ref={titleRef}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Time</Form.Label>
            <Form.Control placeholder="4 hours" required ref={timeRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Cost</Form.Label>
            <Form.Control
              type="number"
              placeholder="0"
              required
              ref={costRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label> Online Photo Url</Form.Label>
            <Form.Control
              type="url"
              placeholder="http//:image/jpeg;base64,/"
              required
              ref={photoURLRef}
            />
          </Form.Group>
          <Button variant="primary px-5" type="submit">
            Add
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddService;
