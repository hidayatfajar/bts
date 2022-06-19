import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Image, Offcanvas } from "react-bootstrap";

import logo from "../asset/Logo.png";
import logo2 from "../asset/logo2.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [jurusan, setJurusan] = useState([]);
  useEffect(() => {
    const getJurusan = async () => {
      const data = await axios.get("http://localhost:8000/jurusan/");
      setJurusan(data.data.data);
    };
    getJurusan();
  }, []);
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
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link href="#deets" className="ml-8">
                Guru
              </Nav.Link>
              {jurusan.map(
                (jurusan) => (
                  <Nav.Link
                    as={Link}
                    className="ml-8"
                    to={`/jurusan/${jurusan.jurusan_id}`}
                    key={jurusan.jurusan_id}
                  >
                    {jurusan.jurusan_nama}
                  </Nav.Link>
                ),
                []
              )}
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
                {jurusan.map((jurusan, index) => {
                  return (
                    <Nav.Link
                      key={index}
                      to={`/jurusan/${jurusan.jurusan_id}`}
                      style={{
                        marginTop: "10px",
                        color: "#0275d8",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      {jurusan.jurusan_nama}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
