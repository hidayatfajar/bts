import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import "../../components/RPL.css";
import JurusanHeader from "./JurusanHeader";
import JurusanCardList from "./JurusanCardList";
import JurusanFooter from "./JurusanFooter";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function RPL() {
  const { jurusanId } = useParams();

  const [kelas, setKelas] = useState([]);
  const [jurusan, setJurusan] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKelas();
    getJurusan();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [jurusanId, loading]);

  const getKelas = async () => {
    const result = await axios.get(
      `http://localhost:8000/kelas/jurusan/${jurusanId}`
    );
    setKelas(result.data.data);
  };

  const getJurusan = async () => {
    const result = await axios.get(
      `http://localhost:8000/jurusan/${jurusanId}`
    );
    setJurusan(result.data.data);
  };

  return (
    <div>
      <div className="bg-bts">
        <NavBarMagic />
        <NavBar />
        <br />
        <br />
        {loading ? (
          <center>
            <Spinner animation="border" />
          </center>
        ) : (
          jurusan.length !== 0 || kelas.length !== 0 ? (
          <>
            <Container>
              <JurusanHeader jurusan={jurusan} />
              <br />
              <br />
              <JurusanCardList kelas={kelas} />
              <br />
              <br />
            </Container>
            <JurusanFooter />
          </>
          ) : (
            <div className="text-center">
              <h1>
                Gagal mengambil data Jurusan
              </h1>
            </div>
          )
        )}
      </div>
    </div>
  );
}
