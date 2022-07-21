import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
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
          <div className="container">
          <div class="backdrop-blur-sm bg-white/30 shadow rounded-md mobile:p-3 mobile:h-128 laptop:p-4 laptop:h-auto w-full mx-auto">
            <div class="animate-pulse laptop:flex laptop:space-x-4 mobile:pt-11 laptop:pt-0">
              <div class="rounded-full bg-slate-700 mobile:w-36 mobile:h-36  mx-auto laptop:pt-0 laptop:w-52 laptop:h-52"></div>

              <div class="laptop:flex-1 laptop:space-y-6 py-1">
                <div class="space-y-3 mobile:pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 tablet:pl-10">
                  <div class="mobile:w-[90%] laptop:w-128 h-8 bg-slate-700 mt-8 mobile:mx-auto laptop:mx-0 rounded-full"></div>
                  <br />
                  <div class="mobile:w-full laptop:w-[22rem] h-4 bg-slate-700 rounded-full"></div>
                  <div class="mobile:w-full laptop:w-[20rem] h-4 bg-slate-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-4">
            <div className="rounded bg-white/30 p-3">
              <div class="h-48 animate-pulse bg-slate-700 rounded">
                <div class="w-36 h-8 animate-pulse bg-white/30 absolute my-20 mobile:mx-20 laptop:mx-24 rounded-full"></div>
              </div>
            </div>

            <div className="rounded bg-white/30 p-3">
              <div class="h-48 animate-pulse bg-slate-700 rounded">
                <div class="w-36 h-8 animate-pulse bg-white/30 absolute my-20 mobile:mx-20 laptop:mx-24 rounded-full"></div>
              </div>
            </div>

            <div className="rounded bg-white/30 p-3">
              <div class="h-48 animate-pulse bg-slate-700 rounded">
                <div class="w-36 h-8 animate-pulse bg-white/30 absolute my-20 mobile:mx-20 laptop:mx-24 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
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
