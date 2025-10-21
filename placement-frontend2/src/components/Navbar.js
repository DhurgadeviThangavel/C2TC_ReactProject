import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="justify-content-center">
        <h1 className="nav-heading">
          Placement Management | Home | Add Placement
        </h1>
      </Container>
    </Navbar>
  );
}

export default NavBar;
