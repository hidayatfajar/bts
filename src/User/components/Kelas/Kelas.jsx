import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import "../RPL.css";
import axios from "axios";
import KelasFotoSlide from "./KelasFotoSlide";
import KelasFotoFooter from "./KelasFotoFooter";
import KelasCardListing from "./KelasCardListing";
import {LazyLoadImage} from "react-lazy-load-image-component";
import { Form, FloatingLabel, Container, InputGroup, Card, Col, Row } from "react-bootstrap";

export default function RPL1() {
  const [gambar, setGambar] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [siswaIndex, setSiswaIndex] = useState(1);

  const sort = (a, b) => {
    if (a.siswa_nama < b.siswa_nama) {
      return -1;
    }
    if (a.siswa_nama > b.siswa_nama) {
      return 1;
    }
  };

  const filteredData = siswa.filter((el) => {
    if (search === "") {
      return el;
    } else {
      return el.siswa_nama.toLowerCase().includes(search);
    }
  });

  const onModal = (e, siswa_id) => {
    e.preventDefault();
    setModal(!modal);
    setSiswaIndex(siswa_id);
  };

  const getData = async () => {
    const gambar = await axios.get("http://localhost:8000/kelas/gambar/1/");
    setGambar(gambar.data.data);
    const siswa = await axios.get("http://localhost:8000/siswa/kelas/1/");
    setSiswa(siswa.data.data.sort(sort));
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
      setLoading(false);
    }, 3000);
  }, [null]);
  return (
    <div>
      <div className="bg-jurusan min-h-screen">
        <NavBarMagic />
        <NavBar />
        {<KelasFotoSlide props={{ gambar, loading }} />}
        <br />
        <br />
        {loading ? null : (
          <Container>
            <FloatingLabel
              style={{ color: "black" }}
              controlId="floatingInput"
              className="mb-3"
            >
              <InputGroup className="mb-3">
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="Search here..."
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
                <InputGroup.Text>Q</InputGroup.Text>
              </InputGroup>
            </FloatingLabel>
          </Container>
        )}
        {<KelasCardListing siswa={siswa} search={search} loading={loading} />}
        
        <br />
        {<KelasFotoFooter gambar={gambar} />}
        <br />
        <br />
      </div>
    </div>
  );
}
