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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../LandingPage/NavBarMagic/NavBarMagic";

import FotoKelas from "../assets/FotoKelas.jpg";

import "./RPL.css";
import axios from "axios";

export default function RPL1() {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [kelasNama, setKelasNama] = useState([]);
  const [gambar, setGambar] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const [siswaIndex, setSiswaIndex] = useState(1);

  const onModal = (e, siswa_id) => {
    e.preventDefault();
    setModal(!modal);
    setSiswaIndex(siswa_id);
  };

  const sort = (a, b) => {
    if (a.siswa_nama < b.siswa_nama) {
      return -1;
    }
    if (a.siswa_nama > b.siswa_nama) {
      return 1;
    }
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
      // sort siswa by nama
      setSiswa(siswa.data.data.sort(sort));
      // setSiswa(siswa.data.data);
    };
    getData();
  }, []);
  return (
    <div>
      <div className="bg-jurusan">
        {/* Modal */}
        {modal === true ? (
          <div className="">
            <div id="myModal" className="modal">
              <div className="flex justify-center">
                <div className="back mt-60 ">
                  <button
                    className="bg-slate-600 md:p-3 md:w-14 md:h-14 sm:p-2 sm:w-12 sm:h-12 rounded-full"
                    disabled={siswaIndex === 0 ? true : false}
                    onClick={(e) => {
                      setSiswaIndex(siswaIndex - 1);
                    }}
                  >
                    <FontAwesomeIcon  icon={faArrowLeft} />
                  </button>
                </div>
                {/* <!-- Modal content --> */}
                <div className="modal-content md:mx-3 sm:mx-2">
                  <FontAwesomeIcon
                    icon={faTimes}
                    className="close"
                    onClick={onModal}
                  />
                  <img
                    src={
                      "http://localhost:8000/public/images/ak/ak1/" +
                      siswa[siswaIndex].siswa_gambar
                    }
                    alt={siswa[siswaIndex].siswa_nama}
                  />
                </div>
                <div className="next mt-60">
                  <button
                    className="bg-slate-600 md:p-3 md:w-14 md:h-14 sm:p-2 sm:w-12 sm:h-12 rounded-full"
                    onClick={(e) => {
                      setSiswaIndex(siswaIndex + 1);
                    }}
                  >
                    <FontAwesomeIcon icon={faArrowRight}/>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Navbar */}
        <NavBar />
        <NavBarMagic />

        {/* Foto Kelas Slide */}
        <Carousel className="z-0">
          {gambar.map((item, index) => {
            return (
              item.gambar_jenis == 'wajib' ? (<Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={
                    'http://localhost:8000/public/images/ak/ak1/' + item.gambar_nama
                  }
                  alt={item.gambar_nama}
                />
              </Carousel.Item>) : null
            );
          })}
        </Carousel>

        <br />

        {/* Foto Siswa */}
        <Container>
          <div className="md:flex justify-between">
            <Row xs={1} md={4} className="g-4">
              {siswa.map((siswa, index) => (
                <div className="w-full md:w-3/12 pt-7" key={siswa.siswa_id}>
                  <Col>
                    <Card className="xs:h-auto md:h-custom mx-auto my-0 p-1 rounded-xl">
                      <Card.Img
                        className="img-siswa"
                        variant="top"
                        src={
                          "http://localhost:8000/public/images/ak/ak1/" +
                          siswa.siswa_gambar
                        }
                        onClick={(e) => onModal(e, index)}
                      />
                      <Card.Body>
                        <p className="text-black text-base font-medium tracking-wide -mt-1">
                          {siswa.siswa_nama}
                        </p>
                        <Card.Text as="div">
                          <footer className="text-gray-600 text-sm font-normal tracking-wide -mt-2">
                            <cite>"{siswa.siswa_quote}"</cite>
                          </footer>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              ))}
            </Row>
          </div>
        </Container>

        <br />
        {/* Foto Kelas Baris */}
        <Container>
          <Row>
            {gambar.map((item, index) => {
              return (
                item.gambar_jenis == 'bebas' ? (<Col md={6} xs={12} className="col">
                <Image 
                  key={index}
                  src={
                    'http://localhost:8000/public/images/ak/ak1/' + item.gambar_nama
                  }
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>) : null
              )
            })}
            
          </Row>
        </Container>
        <br />
        <br />
      </div>
    </div>
  );
}
