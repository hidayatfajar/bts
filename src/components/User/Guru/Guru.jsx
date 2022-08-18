import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavBar from "../LandingPage/NavBar/NavBar";
import NavBarMagic from "../LandingPage/NavBarMagic/NavBarMagic";
import GuruCardList from "./GuruCardList";
import GuruFooter from "../LandingPage/Footer/Footer";
import GuruHeader from "./GuruHeader";
import "../RPL.css";
import {
  Form,
  FloatingLabel,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import bg404 from "../../assets/bg404.png";
import img404 from "../../assets/404.png";

export default function Guru() {
  const [guru, setGuru] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const sort = (a, b) => {
    if (a.guru_nama < b.guru_nama) {
      return -1;
    }
    if (a.guru_nama > b.guru_nama) {
      return 1;
    }
  };

  const getData = async () => {
    const guru = await axios.get(`${process.env.REACT_APP_API_KEY}guru/`);
    console.log(guru);
    setGuru(guru.data.data.sort(sort));
  };
  useEffect(() => {
    getData();
    setTimeout(() => {
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
          <>
            {/* title */}
            <div className="container animate-pulse">
              <div className="mini:w-56 mobile:w-60 laptop:w-96 h-10 bg-slate-700 rounded-full col-span-2"></div>
              <div className="mini:w-40 mobile:w-52 laptop:w-80 h-10 bg-slate-700 rounded-full mini:mt-3 mobile:mt-4 laptop:mt-6 col-span-1"></div>
            </div>

            {/* header */}
            <br />
            <div className="container">
              <div className="backdrop-blur-sm bg-white/30 shadow rounded-md p-3 h-[450px] laptop:p-4 laptop:h-auto w-full mx-auto">
                <div className="animate-pulse laptop:flex laptop:space-x-4 mini:py-8 mobile:py-8 laptop:py-6 laptop:px-4">
                  <div className="rounded-full bg-slate-700 mini:w-36 mini:h-36 mobile:w-36 mobile:h-36  mx-auto laptop:pt-0 laptop:w-40 laptop:h-40"></div>

                  <div className="laptop:flex-1 laptop:space-y-6 py-1">
                    <div className="space-y-3 mobile:pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 tablet:pl-10">
                      <div className="w-[90%] mini:mx-auto mobile:mx-auto laptop:w-128 laptop:mx-0 h-8 bg-slate-700 mini:mt-8 mobile:mt-8 laptop:mt-1 rounded-full"></div>
                      <br />
                      <div className="mobile:w-full laptop:w-[22rem] h-4 bg-slate-700 rounded-full"></div>
                      <div className="mobile:w-full laptop:w-[20rem] h-4 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* search */}
              <div className="w-[98%] h-fit backdrop-blur-sm bg-white/30 p-3 mt-4 mb-3 mx-auto rounded-lg">
                <div className="w-32 h-5 animate-pulse bg-slate-700 rounded-full"></div>
              </div>
              {/* card */}
              <div className="tablet:grid laptop:grid tablet:grid-cols-2 laptop:grid-cols-4 space-y-4 md:space-y-0 gap-4 mx-auto min-h-screen">
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div className="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div className="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div className="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div className="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : guru.length !== 0 ? (
          <>
            <Container>
              <div className="">
                <h1 className="text-title">
                  Foto Seluruh <br />
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
                      className="font-body"
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
        ) : (
          <div className="text-center">
            <h4>Gagal Mengambil Data Guru</h4>
          </div>
        )}
      </div>
    </>
  );
}
