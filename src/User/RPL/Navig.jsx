import React, { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Image,
  Offcanvas,
} from "react-bootstrap";
import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.svg";
import "./RPL.css";
import axios from "axios";

export default function Navig() {
    const [kelasNama, setKelasNama] = useState([]);
    useEffect(() => {
        const getData = async () => {
          const data = await axios.get("http://localhost:8000/kelas/");
          const dataKelas = data.data.data;
          const jurusanNama = {
            1: "AK",
            2: "RPL",
            3: "TKJ",
            4: "TEI",
            5: "TBSM",
            6: "TET",
          };
          const kelasNama = dataKelas.reduce((acc, curr) => {
            const jurusan = jurusanNama[curr.jurusan_id];
            if (!acc[jurusan]) {
              acc[jurusan] = [];
            }
            // push kelas_nama and kelas_id to acc[jurusan]
            acc[jurusan].push({
                kelas_nama: curr.kelas_nama,
                kelas_id: curr.kelas_id
            });
          }, {});
          setKelasNama(kelasNama);
        };
        getData();
      }, []);
  return (
    <div>
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

              {/* Nav Jurusan */}
              {Object.keys(kelasNama).map((jurusan, index) => (
                <NavDropdown
                  key={index}
                  title={jurusan}
                  id="basic-nav-dropdown"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  {kelasNama[jurusan].map((kelas, index) => (
                    <NavDropdown.Item href={`http://localhost:3000/rpl/${kelas}`} key={index}>
                      {kelas}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ))}
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

                  {/* Nav Jurusan */}
                  {Object.keys(kelasNama).map((jurusan) => (
                    <NavDropdown
                      title={jurusan}
                      id="basic-nav-dropdown"
                      style={{ paddingLeft: "30px", marginTop: "-10px" }}
                    >
                      {kelasNama[jurusan].map((kelas) => (
                        <NavDropdown.Item href="#action/3.1">
                          {kelas}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ))}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}
