import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import GuruCardList from "./GuruCardList";
import GuruFooter from "./GuruFooter";
import GuruHeader from "./GuruHeader";
import "../RPL.css";

export default function Guru() {
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
    <>
      <div className="bg-bts ">
        <NavBarMagic />
        <NavBar />
        <br />
        <Container>
          <div className="">
            <h1 className="max-w-sm text-title">
              Foto Seluruh <span className="gradient-text">Guru & Staf</span>{" "}
            </h1>
          </div>
        </Container>
        <br />
        <Container>
          <GuruHeader />
          <br />
          <GuruCardList siswa={siswa} search={search} loading={loading} />
        </Container>
        <br />
        <br />
        <GuruFooter />
      </div>
    </>
  );
}
