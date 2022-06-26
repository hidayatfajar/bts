import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Image, Offcanvas } from "react-bootstrap";
import { Link, Route, useParams } from "react-router-dom";
import axios from "axios";

const Navigation = () => {
  const [content, setContent] = useState([]);
  const [guru, setGuru] = useState([]);

  const getContent = async () => {
    const res = await axios.get(`/jurusan`);
    try {
      setContent(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">MEMO</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          {/* Nav mobile */}
          <Navbar.Offcanvas
            className="offcanvas-navbar"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <span className="font-medium">MEMO</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <Nav.Link className="text-blue-600 text-lg font-semibold tracking-widest">
                  <Link to={`/admin`} className="no-underline">
                    Dashboard
                  </Link>
                </Nav.Link>

                <Nav.Link className="mt-[10px] text-blue-600 text-lg font-semibold tracking-widest">
                  <Link to={`/admin/guru`} className="no-underline">
                    Guru
                  </Link>
                </Nav.Link>

                {content.map((jurusan, index) => {
                  return (
                    <Nav.Link
                      as={Link}
                      className="mt-[10px] text-blue-600 text-lg font-semibold tracking-widest"
                      to={`/admin/jurusan/${jurusan.jurusan_id}`}
                      key={index}
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
};

export default Navigation;
