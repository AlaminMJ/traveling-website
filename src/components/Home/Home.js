import React, { useEffect, useState } from "react";
import {
  InputGroup,
  Spinner,
  Button,
  FormControl,
  Row,
  Col,
  Container,
} from "react-bootstrap";

import TourCard from "../../Shared/TourCard/TourCard";

const Home = () => {
  const [tourList, setTourList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setTourList(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home">
      <div className="banner">
        <div className="container py-5 ">
          <h1 className="display-1 text-white pt-5 mt-5">
            Welcome to
            <br />
            <span className="text-warning">Traveler</span>
          </h1>
          <h5 className="display-6 text-white"> Where you like to go?</h5>
        </div>
      </div>
      {/* Tour section */}
      <div className="container py-5">
        <h3 className="display-6 ">
          Trending: <span className="text-primary">Tour</span>
        </h3>

        <div className="card-container py-2">
          {tourList.length > 0 ? (
            tourList.map((item) => (
              <TourCard key={item._id} data={item}></TourCard>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <Spinner animation="border my-5" variant="primary" />
            </div>
          )}
        </div>
      </div>
      {/* Rental */}
      <section className="py-5 Rental">
        <Container className="py-5">
          <h4 className="display-4">Add Your Rental Listing</h4>
          <h5 className="display-6" style={{ color: " #5e6d77" }}>
            Homes highly rated for thoughtful design
          </h5>
          <Button className="px-5 mt-3">Create Listening</Button>
        </Container>
      </section>
      {/* Get Update section */}
      <section className="py-5" style={{ backgroundColor: "#f0f2f5" }}>
        <div className="container">
          <Row className="d-flex justify-content-between align-items-center">
            <Col md className=" d-flex">
              <img
                src="https://mixmap.travelerwp.com/wp-content/themes/traveler/v2/images/svg/ico_email_subscribe.svg"
                alt="massage"
              />
              <div className="content ms-4">
                <h4>Get Updates & More</h4>
                <p>Thoughtful thoughts to your inbox</p>
              </div>
            </Col>
            <Col md>
              <InputGroup size="lg">
                <FormControl placeholder="Enter your Email" />
                <Button variant="primary" id="button-addon1">
                  SUBSCRIB
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Home;
