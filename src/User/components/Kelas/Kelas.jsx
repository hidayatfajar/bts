import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import "../RPL.css";
import axios from "axios";
import KelasFotoSlide from "./KelasFotoSlide";
import KelasFotoFooter from "./KelasFotoFooter";
import KelasCardListing from "./KelasCardListing";
import { useParams } from "react-router-dom";
import {
  Form,
  FloatingLabel,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";

export default function RPL1() {
  const [gambar, setGambar] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const routeParams = useParams();
  const { kelasId } = routeParams;
  const sort = (a, b) => {
    if (a.siswa_nama < b.siswa_nama) {
      return -1;
    }
    if (a.siswa_nama > b.siswa_nama) {
      return 1;
    }
  };

  const getData = async () => {
    const gambar = await axios.get(
      `http://localhost:8000/kelas/gambar/${kelasId}/`
    );
    setGambar(gambar.data.data);
    const siswa = await axios.get(
      `http://localhost:8000/siswa/kelas/${kelasId}/`
    );
    setSiswa(siswa.data.data.sort(sort));
  };
  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [null]);

  return (
    <div>
      <div className="bg-bts min-h-screen">
        <NavBarMagic />
        <NavBar />
        {loading ? (
          <center>
            <Spinner animation="border" />
          </center>
        ) : siswa.length !== 0 ? (
          <>
            {<KelasFotoSlide props={{ gambar, loading }} />}
            <br />
            <br />
            <Container>
              <FloatingLabel
                style={{ color: "black" }}
                controlId="floatingInput"
                className="mb-3"
              >
                <InputGroup className="mb-3">
                  <Form.Control
                    className="font-body"
                    size="lg"
                    type="email"
                    placeholder="Search here..."
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />
                  {/* <InputGroup.Text>Q</InputGroup.Text> */}
                </InputGroup>
              </FloatingLabel>
            </Container>
            {<KelasCardListing siswa={siswa} search={search} />}
            <br />
            {<KelasFotoFooter gambar={gambar} />}
          </>
        ) : (
          <div className="text-center">
            <h1>Gagal mengambil data siswa</h1>
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

// {loading ? null : (

// )}
