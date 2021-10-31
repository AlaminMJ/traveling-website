import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 footer">
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
