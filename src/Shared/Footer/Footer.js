import React from "react";
import {
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
  Button,
} from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 footer">
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
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <img src="/logo.svg" alt="logo" style={{ width: "150px" }} />
            <br />
            <br />
            <p>Welcome to Traveler website </p>
            <ul className="list-unstyled d-flex social">
              <li>
                <GrFacebookOption />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h5>About us</h5>
            <ul className="list-unstyled">
              <li>About Nft</li>
              <li>comminuty</li>
              <li>teams</li>
              <li>Nft blog</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h5>My Accounts</h5>
            <ul className="list-unstyled">
              <li>My Profile</li>
              <li>My Collectios</li>
              <li>MY Favarte</li>
              <li>My Profile Setting</li>
            </ul>
          </Col>
          <Col md={6} lg={3}>
            <h5>Resource</h5>
            <ul className="list-unstyled">
              <li>Help Center</li>
              <li>Parner</li>
              <li>Suggetion</li>
              <li>Blog</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
