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

import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.png";
// import rplLogo from "../assets/RPL.svg";

import "./RPL.css";
export default class Rpl extends Component {
  render() {
    return (
      <div>
        <div className="bg-rpl">
          <Navbar
            collapseOnSelect
            className="navbar-lp"
            expand="lg"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="#home">
                <Image src={logo} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Nav className="menu">
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  Guru
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  TEI
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  TBSM
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  TKJ
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  AK
                </Nav.Link>
                <Nav.Link
                  href="/rpl"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  RPL
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  TET
                </Nav.Link>
              </Nav>

              {/* Navbar Canvas */}
              <Navbar.Offcanvas
                className="offcanvas-navbar"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel">
                    <Image src={logo2} style={{ color: "black" }} />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
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
                        color: "gray",
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
                        color: "gray",
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
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      TBSM
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "100",
                        letterSpacing: "2px",
                      }}
                    >
                      TKJ
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      AK
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
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
                        color: "gray",
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
          <br />
          <br />
          <br />
          <Container>
            <Row>
              <Col md={4} xs={4}>
                {/* <Image src={rplLogo} /> */}
              </Col>
              <Col md={8} xs={8}>
                Rekayasa Perangkat lunak
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
