import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../LandingPage/NavBar/NavBar";
import NavBarMagic from "../LandingPage/NavBarMagic/NavBarMagic";
import WisudaGalery from "./WisudaGalery";
import WisudaHeader from "./WisudaHeader";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

import bg404 from "../../assets/bg404.png";
import img404 from "../../assets/404.png";

import "../RPL.css";

export default function Wisuda() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await axios.get(`/user/wisuda`);
    try {
      setData(response.data.data);
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="bg-bts ">
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
              {/* grid */}
              <div className="w-36 h-8 animate-pulse bg-slate-700 mx-auto mt-14 mobile:mb-1 laptop:-mb-8 rounded-full"></div>
              <div className="image-galery-s animate-pulse">
                <div className="image-box-s"></div>
                <div className="image-box-s"></div>
                <div className="image-box-s"></div>
                <div className="image-box-s"></div>
                <div className="image-box-s"></div>
              </div>
            </div>
          </>
        ) : data.length !== 0 ? (
          <>
            <Container>
              <div className="">
                <h1 className="max-w-md text-title">
                  Moment Wisuda{" "}
                  <span className="gradient-text">Angkatan 16</span>{" "}
                </h1>
              </div>
            </Container>
            <br />
            <Container>
              <WisudaHeader />
              <br />
              <h1 className="mt-4 -mb-0 text-center text-3xl font-semibold tracking-wider tablet:-mb-6 laptop:-mb-8">
                Galery
              </h1>
              <WisudaGalery image={data} />
            </Container>
          </>
        ) : (
          <div className="text-center">
            <h4>Gagal Mengambil Data Wisuda</h4>
          </div>
        )}
      </div>
    </>
  );
}
