import React, { useState } from "react";
// package
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
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCreditCard,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faChartArea,
  faCalendarWeek,
  faBook,
  faBahai,
  faCalendar,
  faFileInvoice,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

import "./SidebarAdmin.css";
import PostGambar from "../PostGambar/PostGambar";

import logo from "../Assets/icons-dashboard.svg";

const SideBar = () => {

  const [sidebar, setSidebar] = useState("sidebar");
  const [main, setMain] = useState("main");
  const [text, setText] = useState("block");
  const [button, setbutton] = useState("button");
  const [btnleft, setBtnleft] = useState("block");
  const [btnright, setBtnright] = useState("none");

  const [dropdown, setDown] = useState("none");
  const [dropdown2, setDown2] = useState("none");

  const [mode, setMode] = useState(1);

  const changeSidebar = () => {
    if (mode === 0) {
      setSidebar("sidebar1");
      setMain("main1");
      setbutton("button1");
      setText("none");
      setDown("none");
      setBtnleft("none");
      setBtnright("block");
      setMode(1);
    } else {
      setSidebar("sidebar");
      setMain("main");
      setbutton("button");
      setText("block");
      setBtnleft("block");
      setBtnright("none");
      setMode(0);
    }
  };

  const changeDropdown = () => {
    if (mode === 0) {
      setSidebar("sidebar");
      setMain("main");
      setbutton("button");
      setText("block");
      setDown("block");
      setBtnleft("block");
      setBtnright("none");
      setMode(1);
    } else {
      setDown("none");
      setMode(0);
    }
  };

  const changeDropdown2 = () => {
    if (mode === 0) {
      setSidebar("sidebar");
      setMain("main");
      setbutton("button");
      setText("block");
      setDown2("block");
      setBtnleft("block");
      setBtnright("none");
      setMode(1);
    } else {
      setDown2("none");
      setMode(0);
    }
  };

  return (
    <div>
      <div className="admin">
        {/* Navbar */}

        <Navbar
          collapseOnSelect
          className="navbar"
          expand="lg"
          variant="dark"
          fixed="top"
        >
          {/* add image for navbar */}
          <Navbar.Brand>
            <Image
              src={logo}
              position="absolute"
              width="537px"
              height="38px"
              style={{ marginLeft: "-60px" }}
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav>
              {/* <div className="img"> */}
              <Nav.Item>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={
                    <span style={{ color: "white", fontSize: "20px" }}>
                      <Image
                        width={40}
                        height={40}
                        src={logo}
                        style={{
                          borderRadius: "50%",
                          marginTop: "-4px",
                          border: "solid 2px white",
                        }}
                      />
                      &ensp;
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="/admin/profile/">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                    Logout
                </NavDropdown>
              </Nav.Item>
              {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* ------------------------------------------------------ */}

        {/* Sidebar */}

        <div className={sidebar}>
          <div className="admin">
            <br />
            <br />
            {/* Admin Yang Sudah Login */}
            <center>
              {/* Img Admin besar */}
              <Container>
                <span style={{ display: "flex", marginLeft: 10 }}>
                  <img
                    alt="profile"
                    src={logo}
                    style={{
                      borderRadius: "5px",
                      width: "60px",
                      height: "60px",
                      border: "solid 2px white",
                      marginTop: "3px",
                      display: text,
                    }}
                  />
                  <div className="text-admin" style={{ display: text }}>

                    <h6>Administrator</h6>
                    <p
                      className="status"
                      style={{ fontSize: 10, marginTop: -5 }}
                    >
                      <FontAwesomeIcon
                        icon={faCircle}
                        style={{ color: "#14CC9E", fontSize: 7 }}
                      />
                      &nbsp;Online
                    </p>
                  </div>
                </span>
                <hr style={{ color: "white" }} />

              </Container>

              {/* Img Admin kecil */}
              <img
                alt="profile"
                src={logo}
                style={{
                  borderRadius: "5px",
                  width: "50px",
                  height: "50px",
                  border: "solid 2px gray",
                  marginTop: "-10px",
                  display: btnright,
                }}
              />
              {/* <hr style={{ color: "white" }} /> */}
            </center>

            {/* Menu Sidebar */}
            <Link to="/admin">
              <span className="icon">
                <FontAwesomeIcon
                  icon={faChartArea}
                  style={{ marginLeft: "3px" }}
                />
              </span>
              <span style={{ display: text}}>
                {" "}
                Dashboard
              </span>
            </Link>

            {/* --------- */}
            <div className="dropdown">
              <span className="drop">
                <a onClick={changeDropdown}>
                  <span className="icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <span style={{ display: text }}>Management Data</span>
                </a>
              </span>
              <div
                id="myDropdown"
                className="dropdown-content"
                style={{ display: dropdown }}
              >
                <ul>
                  <Link to="/admin/siswa">
                    <li>Siswa </li>
                  </Link>
                  <Link to="/admin/jurusan">
                    <li>Jurusan</li>{" "}
                  </Link>
                  <Link to="/admin/kelas">
                    <li>Kelas</li>{" "}
                  </Link>
                  <Link to="/admin/daftar-kelas">
                    <li>Daftar Kelas</li>{" "}
                  </Link>
                  <Link to="/admin/kenaikan-kelas">
                    <li>Kenaikan Kelas</li>{" "}
                  </Link>
                  <Link to="/admin/kelulusan">
                    <li>Kelulusan</li>{" "}
                  </Link>
                </ul>
              </div>
            </div>

            {/* -------- */}
            <Link to="/admin/periode">
              <span className="icon">
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ marginLeft: "3px" }}
                />
              </span>{" "}
              <span style={{ display: text }}>
                Tahun Ajaran
              </span>
            </Link>

            {/* --------- */}
            <Link to="/admin/pos">
              <span className="icon">
                <FontAwesomeIcon icon={faClipboardList} style={{ marginLeft: "2px" }} />
              </span>{" "}
              <span style={{ display: text, paddingLeft: "4px" }}>Pos Pembayaran</span>
            </Link>

            <Link to="/admin/pembayaran">
              <span className="icon">
                <FontAwesomeIcon
                  icon={faCreditCard}
                  style={{ marginLeft: "1px" }}
                />
              </span>{" "}
              <span style={{ display: text}}>
                Pembayaran
              </span>
            </Link>

            {/* ----------- */}
            <Link to="/admin/jenis-pembayaran">
              <span className="icon">
                <FontAwesomeIcon icon={faBook} style={{ marginLeft: "1px" }} />
              </span>{" "}
              <span style={{ display: text, marginLeft: "3px" }}>
                Jenis Pembayaran
              </span>
            </Link>

            <div className="dropdown">
              <span className="drop">
                <a onClick={changeDropdown2}>
                  <span className="icon">
                    <FontAwesomeIcon icon={faFileInvoice} />
                  </span>
                  <span style={{ display: text, marginLeft: "5px" }}> Laporan</span>
                </a>
              </span>

              <div
                id="myDropdown"
                className="dropdown-content"
                style={{ display: dropdown2 }}
              >
                <ul>
                  <Link to="/admin/laporan/pembayaran-bulanan-bebas">
                    <li>Laporan Pembayaran </li>
                  </Link>
                  <Link to="/admin/laporan/angkatan">
                    <li>Laporan Angkatan </li>
                  </Link>
                  <Link to="/admin/laporan/kelas">
                    <li>Laporan Kelas </li>

                  </Link>
                </ul>
              </div>
            </div>

            {/* Button for hide and show sidebar */}
            <div className={button}>
              <FontAwesomeIcon
                style={{ display: btnleft }}
                icon={faChevronLeft}
                onClick={changeSidebar}
              />
              <FontAwesomeIcon
                style={{ display: btnright }}
                icon={faChevronRight}
                onClick={changeSidebar}
              />
            </div>
          </div>
        </div>

        {/* Route in class main */}
        <div className={main}>
          < PostGambar/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
