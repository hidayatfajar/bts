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
  Carousel,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../LandingPage/NavBarMagic/NavBarMagic";

import FotoKelas from "../assets/FotoKelas.jpg";

import "./RPL.css";

export default class RPL1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  onModal = (e) => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <div className="bg-jurusan">
          {/* Modal */}
          {this.state.modal === true ? (
            <div className="">
              <div id="myModal" class="modal">
                {/* <!-- Modal content --> */}
                <div class="modal-content">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="close"
                    onClick={this.onModal}
                  />
                  <img src="https://placeimg.com/240/340/tech" alt="" />
                </div>
              </div>
            </div>
          ) : null}

          {/* Navbar */}
          <NavBar />
          <NavBarMagic />

          {/* Foto Kelas Slide */}
          <Carousel className="z-0">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={FotoKelas}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={FotoKelas}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={FotoKelas}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>

          <br />

          {/* Foto Siswa */}
          <Container>
            <div className="md:flex justify-between">
              <div className="w-full md:w-3/12 pt-7">
                <Card className="h-auto mx-auto my-0 p-1 rounded-xl">
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/240/240/tech"
                    style={{ width: "auto" }}
                    onClick={this.onModal}
                  />
                  <Card.Body>
                    <p className="text-black text-base font-medium tracking-wide -mt-1">
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer className="text-gray-600 text-sm font-normal tracking-wide -mt-2">
                        <cite>
                          " Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis molestias vero eos labore ea
                          maiores voluptates eaque iusto, dicta inventore a
                          rerum. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="w-full md:w-3/12 pt-7">
                <Card className="h-auto mx-auto my-0 p-1 rounded-xl">
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/240/240/tech"
                    style={{ width: "auto" }}
                    onClick={this.onModal}
                  />
                  <Card.Body>
                    <p className="text-black text-base font-medium tracking-wide -mt-1">
                      Fajar Nur Hidayat
                    </p>
                    <Card.Text>
                      <footer className="text-gray-600 text-sm font-normal tracking-wide -mt-2">
                        <cite>
                          " Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis molestias vero eos labore ea
                          maiores voluptates eaque iusto, dicta inventore a
                          rerum. "
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Container>

          <br />
          {/* Foto Kelas Baris */}
          <Container>
            <Row>
              <Col md={6} xs={12} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={6} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>

              <Col md={6} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col md={6} xs={12} className="col">
                <Image
                  src={FotoKelas}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
            </Row>
          </Container>
          <br />
          <br />
        </div>
      </div>
    );
  }
}
