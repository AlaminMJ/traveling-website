import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();
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
              {user?.email ? (
                <>
                  <Nav.Link as={Link} to="/myorders">
                    My Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageallorders">
                    Manage All Orders
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addservice">
                    Add A New Service
                  </Nav.Link>
                </>
              ) : (
                ""
              )}
            </Nav>
            {user?.email ? (
              <Button size="sm" className="text-uppercase" onClick={logOut}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button
                  size="sm"
                  className="text-uppercase"
                  onClick={{ logOut }}
                >
                  LogIn
                </Button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
