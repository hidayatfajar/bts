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
} from "react-bootstrap";

// import image
import logo from "./asset/Logo.png";
import img1 from "./asset/bg1.png";

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

import team1 from "./asset/varits.svg";
import team2 from "./asset/fajar.svg";
import team3 from "./asset/rafly.svg";
import team4 from "./asset/angga.svg";
import team5 from "./asset/ade.svg";
import team6 from "./asset/raka.svg";
import team7 from "./asset/abel.svg";
import team8 from "./asset/maghvi.svg";
import team9 from "./asset/fadil.svg";

// import css
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="bg-bts">
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
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
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
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <br />
          <br />
          <br />

          <div className="page1">
            <Container>
              <Row>
                <Col md={6}>
                  <div className="page1-content">
                    <h1>
                      LET'S DO OUR OWN{" "}
                      <span className="gradient-text">JOURNEY.</span>{" "}
                    </h1>
                    <p>
                      Kumpulan foto untuk mengenang masa kita Bersama selama 3
                      tahun di SMKN 2 Kota Bekasi.
                    </p>
                    <Button className="login">Sign Up</Button>
                    &ensp;&ensp;&ensp;
                    <Button variant="outline-success" className="video">
                      See Video
                    </Button>
                    <br />
                    <br />
                    <div className="fungsi">
                      <Row>
                        <Col md={1}>
                          <Image className="icon1-page1" src={icon1} />
                        </Col>
                        <Col md={4}>
                          <h6>Upload Foto</h6>
                          <p>
                            Dapat mengupload foto untuk menjadi kenangan atau
                            candaan.
                          </p>
                        </Col>
                        <Col md={1}>
                          <Image className="garis" src={garis} />
                        </Col>
                        <Col md={1}>
                          <Image className="icon2-page1" src={icon2} />
                        </Col>
                        <Col md={4}>
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
                </Col>
              </Row>
            </Container>
          </div>

          {/* Page 2 */}
          <div className="page2">
            <Container>
              <div className="page2-content">
                <Row>
                  <Col md={3}>
                    <Image className="page2-img1" src={img2} />
                  </Col>
                  <Col md={9}>
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
                <Col md={4}>
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

                <Col md={4}>
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

                <Col md={4}>
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
            </Container>
          </div>

          {/* Page 5 */}
          <div className="page5">
            <Container>
              <Row>
                <Col md={4}>
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
                <Col md={4}>
                  <div className="box-team">
                    <Image className="varits" src={team1} />
                  </div>
                </Col>
                <Col md={4}>
                  <div className="box-team">
                    <Image className="fajar" src={team2} />
                  </div>
                </Col>
                <Col md={4}>
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
          <div className="creator">
            <p className="text-center">
              Powered by 12 RPL 3 Team & SMKN 2 KOTA BEKASI
            </p>
          </div>
        </div>
      </div>
    );
  }
}
