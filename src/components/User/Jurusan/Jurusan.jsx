import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import NavBar from "../LandingPage/NavBar/NavBar";
import NavBarMagic from "../LandingPage/NavBarMagic/NavBarMagic";
import JurusanHeader from "./JurusanHeader";
import JurusanCardList from "./JurusanCardList";
import JurusanFooter from "../LandingPage/Footer/Footer";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import bg404 from "../../assets/bg404.png";
import img404 from "../../assets/404.png";

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
          // <div className="container">
          //   {/* header */}
          //   <div class="backdrop-blur-sm bg-white/30 shadow rounded-md p-3 h-[450px] laptop:p-4 laptop:h-auto w-full mx-auto">
          //     <div class="animate-pulse laptop:flex laptop:space-x-4 pt-11 laptop:pt-0">
          //       <div class="rounded-full bg-slate-700 mini:w-36 mini:h-36 mobile:w-36 mobile:h-36  mx-auto laptop:pt-0 laptop:w-52 laptop:h-52"></div>

          //       <div class="laptop:flex-1 laptop:space-y-6 py-1">
          //         <div class="space-y-3 mobile:pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 tablet:pl-10">
          //           <div class="w-[90%] mini:mx-auto mobile:mx-auto laptop:w-128 laptop:mx-0 h-8 bg-slate-700 mt-8 rounded-full"></div>
          //           <br />
          //           <div class="mobile:w-full laptop:w-[22rem] h-4 bg-slate-700 rounded-full"></div>
          //           <div class="mobile:w-full laptop:w-[20rem] h-4 bg-slate-700 rounded-full"></div>
          //         </div>
          //       </div>
          //     </div>
          //   </div>

          //   <br />
          //   <br />
          //   {/* card jurusan */}
          //   <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-4">
          //     <div className="rounded bg-white/30 p-3">
          //       <div class="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
          //         <div class="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
          //       </div>
          //     </div>

          //     <div className="rounded bg-white/30 p-3">
          //       <div class="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
          //         <div class="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
          //       </div>
          //     </div>

          //     <div className="rounded bg-white/30 p-3">
          //       <div class="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
          //         <div class="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
          //       </div>
          //     </div>
          //   </div>
          // </div>
          <div className="container">
            {/* header */}
            <div class="backdrop-blur-sm bg-white/30 shadow rounded-md p-3 h-[450px] laptop:p-4 laptop:h-auto w-full mx-auto">
              <div class="animate-pulse laptop:flex laptop:space-x-4 mini:py-8 mobile:py-8 laptop:py-6 laptop:px-4">
                <div class="rounded-full bg-slate-700 mini:w-36 mini:h-36 mobile:w-36 mobile:h-36  mx-auto laptop:pt-0 laptop:w-40 laptop:h-40"></div>

                <div class="laptop:flex-1 laptop:space-y-6 py-1">
                  <div class="space-y-3 mobile:pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 tablet:pl-10">
                    <div class="w-[90%] mini:mx-auto mobile:mx-auto laptop:w-128 laptop:mx-0 h-8 bg-slate-700 mini:mt-8 mobile:mt-8 laptop:mt-1 rounded-full"></div>
                    <br />
                    <div class="mobile:w-full laptop:w-[22rem] h-4 bg-slate-700 rounded-full"></div>
                    <div class="mobile:w-full laptop:w-[20rem] h-4 bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <br />
            {/* card jurusan */}
            <div className="grid mobile:grid-cols-1 laptop:grid-cols-3 gap-4">
              <div className="rounded bg-white/30 p-3">
                <div class="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
                  <div class="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
                </div>
              </div>

              <div className="rounded bg-white/30 p-3">
                <div class="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
                  <div class="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
                </div>
              </div>

              <div className="rounded bg-white/30 p-3">
                <div class="mini:h-40 mobile:h-48 laptop:h-48 animate-pulse bg-slate-700 rounded">
                  <div class="w-36 h-8 animate-pulse bg-white/30 absolute mini:my-16 mobile:my-20 laptop:my-20 mini:mx-16 mobile:mx-20 laptop:mx-24 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ) : jurusan.length !== 0 || kelas.length !== 0 ? (
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
            <h4>Gagal Mengambil Data Jurusan</h4>
          </div>
        )}
      </div>
    </div>
  );
}
