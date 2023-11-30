import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      // bg="white"
      data-bs-theme="transparent"
      className=" navbar"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="navbar__logo" src="/images/logo.png" alt="" />
          {/* <span className="navbar__logoText">Proactive</span> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="navbar__menu" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navbar__menu" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="navbar__menu" href="/">
              Services
            </Nav.Link>
            <Nav.Link className="navbar__menu" href="/universities">
              Universities
            </Nav.Link>
            <Nav.Link className="navbar__menu" href="/contact">
              Contact
            </Nav.Link>
          </Nav>

          <button className="navbar__apply">Apply</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
