import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import "../RPL.css";
import axios from "axios";
import KelasFotoSlide from "./KelasFotoSlide";
import KelasFotoFooter from "./KelasFotoFooter";
import KelasCardListing from "./KelasCardListing";
import { LazyLoadImage } from "react-lazy-load-image-component";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
import {useParams} from "react-router-dom";
>>>>>>> 8a0a30330cc1024b3114c3b96de15d99df37620f
import {
  Form,
  FloatingLabel,
  Container,
  InputGroup,
  Card,
  Col,
  Row,
} from "react-bootstrap";

export default function RPL1() {
  const [gambar, setGambar] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [modal, setModal] = useState(false);
  const [siswaIndex, setSiswaIndex] = useState(1);
  const route = useParams();
  const { kelasId } = route;

=======
  const routeParams = useParams();
  const {kelasId} = routeParams;
>>>>>>> 8a0a30330cc1024b3114c3b96de15d99df37620f
  const sort = (a, b) => {
    if (a.siswa_nama < b.siswa_nama) {
      return -1;
    }
    if (a.siswa_nama > b.siswa_nama) {
      return 1;
    }
  };

  const getData = async () => {
<<<<<<< HEAD
    const gambar = await axios.get(
      `http://localhost:8000/kelas/gambar/${kelasId}/`
    );
    setGambar(gambar.data.data);
    const siswa = await axios.get(
      `http://localhost:8000/siswa/kelas/${kelasId}/`
    );
=======
    const gambar = await axios.get(`http://localhost:8000/kelas/gambar/${kelasId}/`);
    setGambar(gambar.data.data);
    const siswa = await axios.get(`http://localhost:8000/siswa/kelas/${kelasId}/`);
>>>>>>> 8a0a30330cc1024b3114c3b96de15d99df37620f
    setSiswa(siswa.data.data.sort(sort));
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
      setLoading(false);
    }, 1000);
  }, [null]);

  return (
    <div>
      <div className="bg-bts min-h-screen">
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
