import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Row,
  Col,
  Button,
  Image,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";

import logo from "../asset/Logo.png";
import logo2 from "../asset/logo2.svg";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Image src={logo} className="mt-2" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />

            {/* Nav dekstop */}
            <div className="hidden md:block">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#deets" className="ml-8">
                  Guru
                </Nav.Link>
                <Nav.Link href="#deets" className="ml-8">
                  TEI
                </Nav.Link>
                <Nav.Link href="#deets" className="ml-8">
                  TBSM
                </Nav.Link>
                <Nav.Link href="rpl" className="ml-8">
                  TKJ
                </Nav.Link>
                <Nav.Link href="#deets" className="ml-8">
                  AK
                </Nav.Link>
                <Nav.Link href="rpl" className="ml-8">
                  RPL
                </Nav.Link>
                <Nav.Link href="#deets" className="ml-8">
                  TET
                </Nav.Link>
              </Nav>
            </div>

            {/* Nav mobile */}
            <Navbar.Offcanvas
              className="offcanvas-navbar"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <Image src={logo2} style={{ paddingTop: "14px" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="/"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    Home
                  </Nav.Link>

                  <Nav.Link
                    href="#deets"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    Guru
                  </Nav.Link>

                  <Nav.Link
                    href="#deets"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    TEI
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    TBSM
                  </Nav.Link>
                  <Nav.Link
                    href="rpl"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    TKJ
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    AK
                  </Nav.Link>
                  <Nav.Link
                    href="rpl"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    RPL
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{
                      marginTop: "10px",
                      color: "#0275d8",
                      fontSize: "18px",
                      fontWeight: "600",
                      letterSpacing: "2px",
                    }}
                  >
                    TET
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
}
