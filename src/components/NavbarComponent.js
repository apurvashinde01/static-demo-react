import React from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Link to="/">
          <Navbar.Brand>Bloggie</Navbar.Brand>
        </Link>

        {/* <Form inline>
          <FormControl
            type="text"
            placeholder="Search Blogs..."
            // className="mr-sm-2"
            className="mr-sm-4"
          />
        </Form> */}

        <Nav className="mr-auto">
          <Link to="/signup" style={{ textDecoration: "none" }}>
            {/* <Nav.Link>Get Started</Nav.Link> */}
            <Button variant="outline-light">Get Started</Button>
          </Link>

          <Link to="/signin" style={{ textDecoration: "none" }}>
            <Nav.Link href="/signin">Sign In</Nav.Link>
          </Link>

          <Link to="/signin" style={{ textDecoration: "none" }}>
            {/* <Nav.Link>
              <i class="fa fa-bookmark" aria-hidden="true"></i>
            </Nav.Link> */}
          </Link>

          <Link
            to="/signin"
            style={{ textDecoration: "none", paddingInline: "1em" }}
          >
            {/* <Nav.Link>
              <i class="fa fa-moon-o" aria-hidden="true"></i>
              //  <i class="fa fa-sun-o" aria-hidden="true"></i> 
            </Nav.Link> */}

          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
