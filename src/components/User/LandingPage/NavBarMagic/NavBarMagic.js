import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  Image,
  Offcanvas,
} from "react-bootstrap";
import axios from "axios";

import { Link } from "react-router-dom";

import logo from "../../../assets/LandingPage/Logo.png";
import logo2 from "../../../assets/LandingPage/logo2.svg";

import "./NavBarMagic.css";
import "../LandingPage.css";

const NavBarMagic = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [jurusan, setJurusan] = useState([]);

  // nav function
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  };

  const [loading, setLoading] = useState(true);
  const getJurusan = async () => {
    const data = await axios.get("http://localhost:8000/jurusan/");
    setJurusan(data.data.data);
  };
  useEffect(() => {
    if (loading === true) {
      getJurusan();
      setLoading(false);
    }
  }, [loading]);
  // new useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        id="nav"
        className="bg-white/30 backdrop-blur-xl flex items-center z-[2]"
        style={{ top: visible ? "-220px" : "0" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} className="w-28 md:w-auto " />
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
                  className="text-blue-600 text-lg font-semibold tracking-widest"
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={`/wisuda`}
                  className="text-blue-600 text-lg font-semibold tracking-widest"
                >
                  Wisuda
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={`/guru`}
                  className="mt-[10px] text-blue-600 text-lg font-semibold tracking-widest"
                >
                  Guru
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={`/jurusan/menu`}
                  className="mt-[10px] text-blue-600 text-lg font-semibold tracking-widest"
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
};

export default NavBarMagic;
