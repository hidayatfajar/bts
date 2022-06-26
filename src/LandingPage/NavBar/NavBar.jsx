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
            <Image src={logo} className="w-28 md:w-auto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          {/* Nav dekstop */}
          <div className="hidden tablet:hidden laptop:block md:block">
            <Nav>
              <Nav.Link as={Link} to={`/`}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={`/wisuda`} className="ml-8">
                Wisuda
              </Nav.Link>
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
                <Image src={logo2} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link
                  href="/"
                  className="text-blue-600 text-lg font-semibold tracking-widest"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  href="#deets"
                  className="mt-[10px] text-blue-600 text-lg font-semibold tracking-widest"
                >
                  Guru
                </Nav.Link>

                {jurusan.map(
                  (jurusan) => (
                    <Nav.Link
                      as={Link}
                      className="mt-[10px] text-blue-600 text-lg font-semibold tracking-widest"
                      to={`/jurusan/${jurusan.jurusan_id}`}
                      key={jurusan.jurusan_id}
                    >
                      {jurusan.jurusan_nama}
                    </Nav.Link>
                  ),
                  []
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
