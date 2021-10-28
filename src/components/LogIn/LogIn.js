import React from "react";
import "./LogIn.css";
import { Card, Button, Form } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import { useHistory, useLocation } from "react-router-dom";

const LogIn = () => {
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/";

  const { logInWithGoogle, logOut } = useFirebase();
  const handelGoogleLogIn = () => {
    logInWithGoogle()
      .then(() => {
        history.push(url);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="d-flex justify-content-center log-in">
      <Card style={{ width: "30rem" }}>
        <h3 className="my-2 text-center text-uppercase">Login</h3>
        <hr />
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="btn btn-block btn-primary text-uppercase px-5"
              >
                Submit
              </Button>
            </div>
          </Form>
          <Button
            variant="primary"
            type="submit"
            className="btn btn-block btn-primary text-uppercase px-5"
            onClick={handelGoogleLogIn}
          >
            Submit
          </Button>
          <Button
            variant="primary"
            type="submit"
            className="btn btn-block btn-primary text-uppercase px-5"
            onClick={logOut}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LogIn;
