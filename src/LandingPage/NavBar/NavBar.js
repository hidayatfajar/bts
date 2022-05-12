import React, { Component } from 'react'
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

import { Link } from 'react-router-dom'

import logo from '../asset/Logo.png'
import logo2 from '../asset/logo2.svg'

import './NavBar.css';
import '../LandingPage.css';

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navForLandingPage">

                <Navbar
            collapseOnSelect
            className="navbar-lp"
            expand="lg"
            variant="dark"
            id="nav"
          >
            <Container>
              <Navbar.Brand href="#home">
                <Image src={logo} style={{marginTop:'4px'}}/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
  
  
              {/* Nav dekstop */}
              <Nav className="menu">
                <Nav.Link
                  href="/"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  Guru
                </Nav.Link>
                {/* TEI */}
                <NavDropdown
                  title="TEI"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  <NavDropdown.Item href="#action/3.1">TEI 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TEI 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TEI 3</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TEI 4</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* TBSM */}
                <NavDropdown
                  title="TBSM"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  <NavDropdown.Item href="#action/3.1">TBSM 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TBSM 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TBSM 3</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TBSM 4</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* TKJ */}
                <NavDropdown
                  title="TKJ"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  <NavDropdown.Item href="#action/3.1">TKJ 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TKJ 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TKJ 3</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* AK */}
                <NavDropdown
                  title="AK"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  <NavDropdown.Item href="#action/3.1">AK 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">AK 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">AK 3</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* RPL */}
                <NavDropdown
                  title="RPL"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  <NavDropdown.Item href="/rpl">RPL 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">RPL 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">RPL 3</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* TET  */}
                <NavDropdown
                  title="TET"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-4px" }}
                >
                  <NavDropdown.Item href="#action/3.1">TET 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TET 2</NavDropdown.Item>
                </NavDropdown>{" "}
              </Nav>


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
                      href="#deets"
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

                    {/* TEI */}
                    <NavDropdown
                      title="TEI"
                      id="offcanvasNavbarDropdown"
                      style={{
                        marginTop: "10px",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      <NavDropdown.Item href="#action3">TEI 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">TEI 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">TEI 3</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">TEI 4</NavDropdown.Item>
                    </NavDropdown>

                    {/* TBSM */}
                    <NavDropdown
                      title="TBSM"
                      id="offcanvasNavbarDropdown"
                      style={{
                        marginTop: "10px",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      <NavDropdown.Item href="#action3">
                        TBSM 1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">
                        TBSM 2
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">
                        TBSM 3
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">
                        TBSM 4
                      </NavDropdown.Item>
                    </NavDropdown>

                    {/* TKJ */}
                    <NavDropdown
                      title="TKJ"
                      id="offcanvasNavbarDropdown"
                      style={{
                        marginTop: "10px",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      <NavDropdown.Item href="#action3">TKJ 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">TKJ 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">TKJ 3</NavDropdown.Item>
                    </NavDropdown>

                    {/* AK */}
                    <NavDropdown
                      title="AK"
                      id="offcanvasNavbarDropdown"
                      style={{
                        marginTop: "10px",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      <NavDropdown.Item href="#action3">Ak 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Ak 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Ak 3</NavDropdown.Item>
                    </NavDropdown>

                    {/* RPL */}
                    <NavDropdown
                      title="RPL"
                      id="offcanvasNavbarDropdown"
                      style={{
                        marginTop: "10px",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      <NavDropdown.Item href="/rpl">RPL 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">RPL 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">RPL 3</NavDropdown.Item>
                    </NavDropdown>

                    {/* TET */}
                    <NavDropdown
                      title="TET"
                      id="offcanvasNavbarDropdown"
                      style={{
                        marginTop: "10px",
                        color: "black",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      <NavDropdown.Item href="/rpl">TET 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action3">TET 2</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>


                </div>
            </div >
        )
    }
}

// Navbar Magic

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-150px";
    }
}