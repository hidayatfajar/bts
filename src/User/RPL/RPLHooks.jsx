import React, { useState, useEffect } from "react";
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
import logo from "../assets/Logo.png";
import logo2 from "../assets/Logo2.svg";
import FotoKelas from "../assets/FotoKelas.jpg";
import "./RPL.css";
import axios from "axios";
import Navig from "./Navig";

export default function RPLHooks() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [kelasNama, setKelasNama] = useState([]);
  const [gambar, setGambar] = useState([]);
  const [siswa, setSiswa] = useState([]);

  const onModal = (e) => {
    setModal(!modal);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8000/kelas/");
      setData(data.data);
      const gambar = await axios.get("http://localhost:8000/kelas/gambar/1/");
      setGambar(gambar.data.data);
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
        acc[jurusan].push(curr.kelas_nama);
        return acc;
      }, {});
      setKelasNama(kelasNama);
      const siswa = await axios.get("http://localhost:8000/siswa/kelas/1/");
      console.log(siswa.data.data);
      setSiswa(siswa.data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="bg-rpl">
        {/* Modal */}
        {modal === true ? (
          <div className="">
            <div id="myModal" class="modal" onClick={onModal}>
              {/* <!-- Modal content --> */}
              <div class="modal-content" onClick={onModal}>
                <img src="https://placeimg.com/240/340/tech" alt="" />
              </div>
            </div>
          </div>
        ) : null}

        {/* Navbar */}
        <Navig/>

        {/* Foto Kelas Slide */}
        <Carousel style={{ zIndex: "0" }}>
          <Carousel.Item>
            <img className="d-block w-100" src={FotoKelas} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={FotoKelas} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={FotoKelas} alt="First slide" />
          </Carousel.Item>
        </Carousel>

        <br />

        {/* Foto Siswa */}
        <Container>
          <Row>
            {siswa.map((siswa, index) => (
              <Col key={index} md={3} className="col">
                <Card
                  style={{
                    width: "95%",
                    height: "auto",
                    margin: "0 auto",
                  }}
                >
                  <Card.Img
                    variant="top"
                    src="https://placeimg.com/240/240/tech"
                    alt="Gambar tidak tampil"
                    style={{ width: "auto" }}
                    onClick={onModal}
                  />
                  <Card.Body>
                    <p className="nama-siswa">{siswa.siswa_nama}</p>
                    <Card.Text>
                      <footer className="quotes">
                        <cite>
                          "{siswa.siswa_quote}"
                        </cite>
                      </footer>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
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
