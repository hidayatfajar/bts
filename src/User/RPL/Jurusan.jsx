import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../LandingPage/NavBarMagic/NavBarMagic";
import bgBtn from "../assets/bgBtn.png";
import logo from "../assets/Logo.png";
import "./RPL.css";
import axios from "axios";

export default function RPL(props) {
  const { jurusanId } = useParams();

  const [kelas, setKelas] = useState([]);

  const getKelas = async () => {
    const data = await axios.get(
      `http://localhost:8000/kelas/jurusan/${jurusanId}`
    );
    setKelas(data.data.data);
  };
  useEffect(() => {
    getKelas();
  }, [jurusanId]);

  return (
    <div>
      <div className="bg-jurusan">
        <NavBar />
        <NavBarMagic />
        <br />
        <br />
        <Container>
          <div className="bg-white/30 backdrop-blur-xl p-4 rounded-md">
            <div className="flex">
              <div className="">
                {/* <img src={LogoRPL} className="w-96" /> */}
              </div>
              <div className="desc pl-9">
                <h1 className="text-3xl tracking-wider">{}</h1>
                <p className="max-w-md">
                  Kumpulan foto untuk mengenang masa kita Bersama selama 3 tahun
                  di SMKN 2 Kota Bekasi.
                </p>
              </div>
            </div>
          </div>

          <br />
          <br />

          {/* if index of array kelas is 3 return something if 4 return something */}
          {/* <a href="rpl1" className="no-underline">
                <div className="w-full mt-4 md:w-1/3 ">
                <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                    <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                    <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                      XII RPL 1
                      </h1>
                  </div>
                  </div>
                </a> */}
          {kelas ? (
            kelas.length === 4 ? (
              <div>
                {console.log(kelas)}
                <div className="md:flex justify-between">
                  <Link
                    to={`/kelas/${kelas[0].kelas_id}`}
                    className="no-underline"
                  >
                    <div className="w-full mt-4 md:w-1/2 ">
                      <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                        <img
                          src={bgBtn}
                          alt=""
                          className="max-w-xs object-cover"
                        />
                        <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                          {kelas[0].kelas_nama}
                        </h1>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={`/kelas/${kelas[1].kelas_id}`}
                    className="no-underline"
                  >
                    <div className="w-full mt-4 md:w-1/2 ">
                      <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                        <img
                          src={bgBtn}
                          alt=""
                          className="max-w-xs object-cover"
                        />
                        <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                          {kelas[1].kelas_nama}
                        </h1>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="md:flex justify-center">
                  <Link
                    to={`/kelas/${kelas[2].kelas_id}`}
                    className="no-underline"
                  >
                    <div className="w-full mt-4 md:w-1/2 ">
                      <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                        <img
                          src={bgBtn}
                          alt=""
                          className="max-w-xs object-cover"
                        />
                        <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                          {kelas[2].kelas_nama}
                        </h1>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to={`/kelas/${kelas[3].kelas_id}`}
                    className="no-underline"
                  >
                    <div className="w-full mt-4 md:w-1/2 ">
                      <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0">
                        <img
                          src={bgBtn}
                          alt=""
                          className="max-w-xs object-cover"
                        />
                        <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                          {kelas[3].kelas_nama}
                        </h1>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="md:flex justify-between">
                {kelas.map((kelas, index) => {
                  return (
                    <Link
                      to={`/kelas/${kelas.kelas_id}`}
                      className="no-underline"
                      key={kelas.kelas_id}
                    >
                      <div className="w-full mt-4 md:w-1/3 ">
                        <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                          <img
                            src={bgBtn}
                            alt=""
                            className="max-w-xs object-cover"
                          />
                          <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                            {kelas.kelas_nama}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )
          ) : null}

          <br />
          <br />
        </Container>
        <div className="pt-10 bg-gray-600">
          <Container>
            <div className="">
              <Image className="w-48" src={logo} />
            </div>
            <div className="py-2 md:flex justify-between">
              <div className="w-full md:w-5/12">
                <p className="tracking-wide">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur, tempore tenetur. Atque velit aliquid quibusdam,
                  saepe et nihil beatae necessitatibus, enim eum impedit
                  inventore ut, eveniet temporibus debitis possimus quasi!
                </p>
                <p className="pt-2 tracking-wide">
                  &copy; Copyright by 12 RPL 3 Team
                </p>
              </div>
              <div className="hidden md:block w-6/12">
                <div className="flex justify-between">
                  <h6 className="menu-footer">Home</h6>
                  <h6 className="menu-footer">Guru</h6>
                  <h6 className="menu-footer">TEI</h6>
                  <h6 className="menu-footer">TSM</h6>
                  <h6 className="menu-footer">TKJ</h6>
                  <h6 className="menu-footer">AK</h6>
                  <h6 className="menu-footer">RPL</h6>
                  <h6 className="menu-footer">TET</h6>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
