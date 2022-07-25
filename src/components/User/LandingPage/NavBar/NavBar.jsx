import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Image, Offcanvas } from "react-bootstrap";

import logo from "../../../assets/LandingPage/Logo.png";
import logo2 from "../../../assets/LandingPage/logo2.svg";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [jurusan, setJurusan] = useState([]);
  const [loading, setLoading] = useState(true);
  const getJurusan = async () => {
    const data = await axios.get("http://localhost:8000/jurusan/");
    setJurusan(data.data.data);
  };
  useEffect(() => {
    setLoading(true);
    getJurusan().then(setLoading(false));
  }, [loading]);
  return (
    <div>
      {" "}
      <Navbar collapseOnSelect expand="lg" variant="dark" className="z-[2]">
        <Container>
          <Navbar.Brand href="/">
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
              <Nav.Link as={Link} to={`/guru`} className="ml-8">
                Guru
              </Nav.Link>
              <Nav.Link as={Link} to={`/jurusan/menu`} className="ml-8">
                Jurusan
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
                <Image src={logo2} />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link
                  as={Link}
                  to={`/`}
                  className="text-blue-600 text-lg font-semibold font-body tracking-widest"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={`/wisuda`}
                  className="text-blue-600 text-lg font-semibold font-body tracking-widest"
                >
                  Wisuda
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={`/guru`}
                  className="mt-[10px] text-blue-600 text-lg font-semibold font-body tracking-widest"
                >
                  Guru
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={`/jurusan/menu`}
                  className="mt-[10px] text-blue-600 text-lg font-semibold font-body tracking-widest"
                >
                  Jurusan
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
