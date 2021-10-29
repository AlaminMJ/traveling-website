import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src="/logo.svg" alt="logo" style={{ width: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle className="toggle-btn" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                My Booking
              </Nav.Link>
              <Nav.Link as={Link} to="/Tour">
                All booking management
              </Nav.Link>
            </Nav>
            <Link to="/login">
              <Button size="sm" className="text-uppercase">
                LogIn
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
