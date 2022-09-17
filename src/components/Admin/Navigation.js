import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

const Navigation = () => {
  const [content, setContent] = useState([]);

  const getContent = async () => {
    const res = await axios.get(`/jurusan`);
    try {
      setContent(res.data.data);
    } catch (error) {
      
    }
  };

  const history = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      // title: "Apakah anda yakin, ingin keluar?",
      text:"Apakah anda yakin, ingin keluar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
    localStorage.removeItem("dataAdmin");
    history("/auth/login");
      }
    });
  };

  useEffect(() => {
    getContent();
  }, []);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">MEMO</Navbar.Brand>
          <button className="bg-white w-10 h-9 rounded" me={-2} onClick={handleLogout}><FontAwesomeIcon icon={faRightFromBracket} /></button>
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
