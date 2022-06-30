import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import GuruCardList from "./GuruCardList";
import GuruFooter from "./GuruFooter";
import GuruHeader from "./GuruHeader";
import "../RPL.css";
import {
  Form,
  FloatingLabel,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";

export default function Guru() {
  const [gambar, setGambar] = useState([]);
  const [guru, setGuru] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [siswaIndex, setSiswaIndex] = useState(1);

  const sort = (a, b) => {
    if (a.guru_nama < b.guru_nama) {
      return -1;
    }
    if (a.guru_nama > b.guru_nama) {
      return 1;
    }
  };

  const getData = async () => {
    const guru = await axios.get("http://localhost:8000/guru/");
    console.log(guru);
    setGuru(guru.data.data.sort(sort));
  };
  useEffect(() => {
    setTimeout(() => {
      getData();
      setLoading(false);
    }, 1000);
  }, [null]);
  return (
    <>
      <div className="bg-bts min-h-screen">
        <NavBarMagic />
        <NavBar />
        <br />
        {loading ? (
          <center>
            <Spinner animation="border" />
          </center>
        ) : (
          <>
            <Container>
              <div className="">
                <h1 className="max-w-sm text-title">
                  Foto Seluruh{" "}
                  <span className="gradient-text">Guru & Staf</span>{" "}
                </h1>
              </div>
            </Container>
            <br />
            <Container>
              <GuruHeader loading={loading} />
              <br />
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
              <GuruCardList guru={guru} search={search} loading={loading} />
            </Container>
            <br />
            <br />
            <GuruFooter />
          </>
        )}
      </div>
    </>
  );
}
