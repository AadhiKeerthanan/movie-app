import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <Navbar bg="light" fixed="top">
      <Container>
        <Link to="/">
          <Navbar.Brand
            style={{
              backgroundColor: "#494949",
              padding: "10px",
              borderRadius: "5px",
              cursor: "pointer",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Movie DB
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}
