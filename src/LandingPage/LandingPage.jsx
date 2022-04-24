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
} from "react-bootstrap";
import ReactPlayer from "react-player/lazy";

// import image
import logo from "./asset/Logo.png";
import img1 from "./asset/bg1.png";
import img1_2 from "./asset/bg1-2.png";

import icon1 from "./asset/icon1.png";
import icon2 from "./asset/icon2.png";
import garis from "./asset/garis.png";

import img2 from "./asset/bg2.png";
import img3 from "./asset/kepsek.png";
import img4 from "./asset/bg3.png";
import img5 from "./asset/bg4.png";
import img6 from "./asset/bg5.png";

import kaprog1 from "./asset/kaprog1.png";
import kodok from "./asset/kodok.png";

import galery from "./asset/Galery.png";

import team1 from "./asset/varits.svg";
import team2 from "./asset/fajar.svg";
import team3 from "./asset/rafly.svg";
import team4 from "./asset/angga.svg";
import team5 from "./asset/ade.svg";
import team6 from "./asset/raka.svg";
import team7 from "./asset/abel.svg";
import team8 from "./asset/maghvi.svg";
import team9 from "./asset/fadil.svg";

// import folder
import NavBar from "./NavBar/NavBar";

// import css
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="bg-bts">
          <NavBar />

          <Navbar
            collapseOnSelect
            className="navbar-lp"
            expand="lg"
            variant="dark"
          >
            <Container>
              <Navbar.Brand href="#home">
                <Image src={logo} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Nav className="menu">
                <Nav.Link
                  href="#deets"
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
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  TEI
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  TBSM
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  TKJ
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  AK
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
                >
                  RPL
                </Nav.Link>
                <Nav.Link
                  href="#deets"
                  style={{ paddingLeft: "30px", marginTop: "-10px" }}
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
                    <Image src={logo} style={{ color: "black" }} />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
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
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      Guru
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      TEI
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      TBSM
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "100",
                        letterSpacing: "2px",
                      }}
                    >
                      TKJ
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      AK
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      RPL
                    </Nav.Link>
                    <Nav.Link
                      href="#deets"
                      style={{
                        marginTop: "10px",
                        color: "gray",
                        fontSize: "18px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                      }}
                    >
                      TET
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
          <br />
          <br />
          <br />

          {/* Page1 */}
          <div className="page1">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="page1-content">
                    <h1>
                      LET'S WRITE OUR STORY{" "}
                      <span className="gradient-text">EXIST 16.</span>{" "}
                    </h1>
                    <p>
                      Kumpulan foto untuk mengenang masa kita Bersama selama 3
                      tahun di SMKN 2 Kota Bekasi.
                    </p>
                    <div className="button">
                      <Button className="login">Sign Up</Button>
                      <br />
                      <Button variant="outline-success" className="video">
                        See Video
                      </Button>
                    </div>
                    <br />
                    <br />
                    <div className="fungsi">
                      <Row>
                        <Col md={1} xs={1}>
                          <Image className="icon1-page1" src={icon1} />
                        </Col>
                        <Col md={4} xs={5}>
                          <h6>Upload Foto</h6>
                          <p>
                            Dapat mengupload foto untuk menjadi kenangan atau
                            candaan.
                          </p>
                        </Col>
                        <Col md={1} xs={1}>
                          <Image className="garis" src={garis} />
                        </Col>
                        <Col md={1} xs={1}>
                          <Image className="icon2-page1" src={icon2} />
                        </Col>
                        <Col md={4} xs={4}>
                          <h6 className="qoutes">Upload Quotes</h6>
                          <p className="qoutes">
                            Dapat mengupload quotes yang bersifat membangun
                            untuk menjadi Tujuan.
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <Image src={img1} className="page1-img" alt="" />
                  <Image src={img1_2} className="page1-img2" alt="" />
                </Col>
              </Row>
            </Container>
          </div>

          {/* Page akt */}
          <div className="page-akt">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="page-akt-content">
                    <h1>
                      REWIND VIDEO{" "}
                      <span className="gradient-text">EXIST 16.</span>{" "}
                    </h1>
                    <p>
                      Beberapa video rewind untuk mengenang kebersamaan kita
                      angkatan 16, sebagai bagian dari siswa SMKN 2.
                    </p>
                    <div className="button">
                      <Button variant="outline-success" className="video">
                        See Video
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="col-video">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player"
                      url="https://youtu.be/JzPknKdkGO8"
                      width="100%"
                      height="100%"
                      loop={true}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Page Sekolah */}
          <div className="page-sekolah">
            <Container>
              <Row>
                <Col md={3}>Logo Sekolah</Col>
                <Col md={7}>
                  <h1>
                    THIS IS OUR SCHOOL
                    <br />
                    <span className="gradient-text">
                      SMKN 2 KOTA BEKASI.
                    </span>{" "}
                  </h1>
                  <p>
                    Sekolah yang memiliki 6 jurusan didalam nya, serta kelas
                    unggulan yang siap untuk memajukan perkembangan industri di
                    indonesia. berikut ini adalah pengenalan sekolah kami.
                  </p>
                  <Button variant="outline-success" className="video">
                    See Video
                  </Button>
                </Col>
                <Col md={2}>
                  {" "}
                  <Image className="page5-img2" src={img6} />
                </Col>
              </Row>
            </Container>
          </div>

          {/* Page 2 */}
          <div className="page2">
            <Container>
              <div className="page2-content">
                <Row>
                  <Col md={3} xs={0}>
                    <Image className="page2-img1" src={img2} />
                  </Col>
                  <Col md={9} xs={12}>
                    <h4>
                      KATA SAMBUTAN{" "}
                      <span className="gradient-text">KEPALA SEKOLAH</span>
                    </h4>
                    <br />
                    <div className="box-sambutan">
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officia excepturi, modi, perferendis quasi neque, illum
                        molestiae nulla atque debitis adipisci est facere
                        repellendus dolorem facilis nostrum veniam possimus qui.
                        Nulla?
                      </p>
                      <br />
                      <br />
                      <h6>Dr. Agus Wimbadi M.pd</h6>
                      <p>Kepala Sekolah SMKN 2</p>
                    </div>
                    <Image className="page2-img2" src={img3} />
                  </Col>
                  <Col></Col>
                  <Col>
                    <Image className="page2-img3" src={img4} />
                  </Col>
                </Row>
              </div>
            </Container>
          </div>

          {/* Page 3 */}
          <div className="page3">
            <Container>
              <h1 className="page3-title">
                Beberapa list <span className="gradient-text"> Jurusan.</span>
              </h1>
              <br />
              <Row>
                <Col md={4} className="col">
                  <div className="page3-box">
                    <Container>
                      <Row>
                        <Col md={2}>
                          <Image className="imgKaprog" src={kaprog1} />
                        </Col>
                        <Col md={10}>
                          <h6>Nama Kaprog</h6>
                          <p>Jabatan</p>
                        </Col>
                      </Row>
                    </Container>
                    <Image className="page3-img1" src={kodok} />
                  </div>
                </Col>

                <Col md={4} className="col">
                  <div className="page3-box">
                    <Container>
                      <Row>
                        <Col md={2}>
                          <Image className="imgKaprog" src={kaprog1} />
                        </Col>
                        <Col md={10}>
                          <h6>Nama Kaprog</h6>
                          <p>Jabatan</p>
                        </Col>
                      </Row>
                    </Container>
                    <Image className="page3-img1" src={kodok} />
                  </div>
                </Col>

                <Col md={4} className="col">
                  <div className="page3-box">
                    <Container>
                      <Row>
                        <Col md={2}>
                          <Image className="imgKaprog" src={kaprog1} />
                        </Col>
                        <Col md={10}>
                          <h6>Nama Kaprog</h6>
                          <p>Jabatan</p>
                        </Col>
                      </Row>
                    </Container>
                    <Image className="page3-img1" src={kodok} />
                  </div>
                </Col>

                <Col md={4} className="col">
                  <div className="page3-box">
                    <Container>
                      <Row>
                        <Col md={2}>
                          <Image className="imgKaprog" src={kaprog1} />
                        </Col>
                        <Col md={10}>
                          <h6>Nama Kaprog</h6>
                          <p>Jabatan</p>
                        </Col>
                      </Row>
                    </Container>
                    <Image className="page3-img1" src={kodok} />
                  </div>
                </Col>

                <Col md={4} className="col">
                  <div className="page3-box">
                    <Container>
                      <Row>
                        <Col md={2}>
                          <Image className="imgKaprog" src={kaprog1} />
                        </Col>
                        <Col md={10}>
                          <h6>Nama Kaprog</h6>
                          <p>Jabatan</p>
                        </Col>
                      </Row>
                    </Container>
                    <Image className="page3-img1" src={kodok} />
                  </div>
                </Col>

                <Col md={4} className="col">
                  <div className="page3-box">
                    <Container>
                      <Row>
                        <Col md={2}>
                          <Image className="imgKaprog" src={kaprog1} />
                        </Col>
                        <Col md={10}>
                          <h6>Nama Kaprog</h6>
                          <p>Jabatan</p>
                        </Col>
                      </Row>
                    </Container>
                    <Image className="page3-img1" src={kodok} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          {/* Page 4 */}
          <div className="page4">
            <Container>
              <Row>
                <Col md={8}>
                  <Image className="page4-img1" src={img5} />
                </Col>
                <Col md={4}>
                  <h1 className="page4-title text-end">
                    Galery Foto
                    <br />
                    <span className="gradient-text">Siswa.</span>
                  </h1>
                </Col>
              </Row>
              <div className="slide-galery">
                <Image className="galery" src={galery} />
              </div>
            </Container>
          </div>

          {/* Page 5 */}
          <div className="page5">
            <Container>
              <Row>
                <Col md={5}>
                  <h1 className="page5-title">
                    Tim Pembuat <span className="gradient-text">Website.</span>
                  </h1>
                </Col>
                <Col className="garis" md={1}>
                  <Image className="page5-img1" src={garis} />
                </Col>
                <Col md={4}>
                  <p className="page5-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugit, molestiae obcaecati rerum illo velit earum
                    perferendis! Velit quod voluptatibus, tenetur qui illum,
                    dolorem iste tempore accusantium delectus rem, ipsa
                    molestias?
                  </p>
                </Col>
                <Col md={1}>
                  <Image className="page5-img2" src={img6} />
                </Col>
              </Row>
              <br />
              <Row>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="varits" src={team1} />
                  </div>
                </Col>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="fajar" src={team2} />
                  </div>
                </Col>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="rafly" src={team3} />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="angga" src={team4} />
                  </div>
                </Col>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="ade" src={team5} />
                  </div>
                </Col>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="raka" src={team6} />
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="abel" src={team7} />
                  </div>
                </Col>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="maghvi" src={team8} />
                  </div>
                </Col>
                <Col md={4} className="col">
                  <div className="box-team">
                    <Image className="fadil" src={team9} />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <br />
          <br />
          <br />
          <div className="footer">
            <Container>
              <div className="footer-logo">
                <Image className="footer-logo-img" src={logo} />
              </div>
              <Row style={{ paddingTop: "6px" }}>
                <Col md={5}>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Aspernatur, tempore tenetur. Atque velit aliquid
                      quibusdam, saepe et nihil beatae necessitatibus, enim eum
                      impedit inventore ut, eveniet temporibus debitis possimus
                      quasi!
                    </p>
                    <p style={{ paddingTop: "6px" }}>
                      &copy; Copyright by 12 RPL 3 Team
                    </p>
                  </div>
                </Col>
                <Col md={{ span: 6, offset: 1 }}>
                  <div className="footer-menu d-flex">
                    <h6>Home</h6>
                    <h6>Guru</h6>
                    <h6>TEI</h6>
                    <h6>TSM</h6>
                    <h6>TKJ</h6>
                    <h6>AK</h6>
                    <h6>RPL</h6>
                    <h6>TET</h6>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
