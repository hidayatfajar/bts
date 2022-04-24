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
                <Image src={logo} style={{marginTop:'8px'}}/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Nav className='menu'>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
                  >
                    Guru
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
                  >
                    TEI
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
                  >
                    TBSM
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
                  >
                    TKJ
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
                  >
                    AK
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
                  >
                    RPL
                  </Nav.Link>
                  <Nav.Link
                    href="#deets"
                    style={{ paddingLeft: "30px", }}
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
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                      <NavDropdown.Item href="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
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