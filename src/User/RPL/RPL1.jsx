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
  Carousel,
} from "react-bootstrap";

import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.svg";

import FotoKelas from "../assets/FotoKelas.jpg";

import "./RPL.css";

export default class RPL1 extends Component {
  render() {
    return (
      <div>
        <div className="bg-rpl">
          {/* Navbar */}
          <Navbar
            collapseOnSelect
            className="navbar-lp"
            expand="lg"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="#home">
                <Image src={logo} style={{ marginTop: "10px" }} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />

              {/* Nav dekstop */}
              <Nav className="menu">
                <Nav.Link
                  href="/"
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
                {/* TEI */}
                <NavDropdown
                  title="TEI"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
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
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
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
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  <NavDropdown.Item href="#action/3.1">TKJ 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TKJ 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">TKJ 3</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* AK */}
                <NavDropdown
                  title="AK"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  <NavDropdown.Item href="#action/3.1">AK 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">AK 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">AK 3</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* RPL */}
                <NavDropdown
                  title="RPL"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  <NavDropdown.Item href="/rpl">RPL 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">RPL 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">RPL 3</NavDropdown.Item>
                </NavDropdown>{" "}
                {/* TET  */}
                <NavDropdown
                  title="TET"
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
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

          {/* Foto Kelas Slide */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={FotoKelas}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={FotoKelas}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={FotoKelas}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>

          <br />

          {/* Foto Siswa */}
          <Container>
            <Row>
              <Col md={3} className="col">
                <Card
                  style={{
                    width: "95%",
                    height: "auto",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/240/280/tech"
                    style={{ width: "auto" }}
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="col">
                <Card
                  style={{
                    width: "255px",
                    height: "366px",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/250/200/tech"
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="col">
                <Card
                  style={{
                    width: "255px",
                    height: "366px",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/250/200/tech"
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="col">
                <Card
                  style={{
                    width: "255px",
                    height: "366px",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/250/200/tech"
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={3} className="col">
                <Card
                  style={{
                    width: "255px",
                    height: "366px",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/250/200/tech"
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="col">
                <Card
                  style={{
                    width: "255px",
                    height: "366px",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/250/200/tech"
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="col">
                <Card
                  style={{
                    width: "255px",
                    height: "366px",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/250/200/tech"
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3} className="col">
                <Card
                  style={{
                    width: "255px",
                    height: "366px",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/250/200/tech"
                  />
                  <Card.Body>
                    <p
                      style={{
                        fontSize: "19px",
                        fontWeight: "500",
                        marginBottom: "7%",
                      }}
                    >
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer style={{ color: "grey", fontSize: "15px" }}>
                        <cite>
                          " Some quick example text to build on the card title
                          and make up the bulk of the card's contentccccccc. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <br />
          {/* Foto Kelas Baris */}
          <Container>
            <Row>
              <Col md={6} xs={12} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={6} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>

              <Col md={6} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={6} xs={12} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
