import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <Container>
        <div className="img d-flex justify-content-center py-5">
          <img
            src="https://homap.travelerwp.com/wp-content/themes/traveler/v2/images/404.jpg"
            alt="Page Not Found"
          />
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/">
            <Button className="px-5">Back to Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
