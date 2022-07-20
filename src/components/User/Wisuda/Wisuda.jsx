import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import WisudaGalery from "./WisudaGalery";
import WisudaHeader from "./WisudaHeader";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

import "../RPL.css";

export default function Wisuda() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const response = await axios.get(`/user/wisuda`);
    try {
      setData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
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
          <div className="container animate-pulse">
            <div class="w-96 h-10 bg-slate-700 rounded-full col-span-2"></div>
            <div class="w-80 h-10 bg-slate-700 rounded-full mt-6 col-span-1"></div>
          </div>

          <br />
          <div className="container">
            <div class="backdrop-blur-sm bg-white/30 shadow rounded-md p-4 w-full mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-700 w-60 h-60 pt-3 mx-auto laptop:pt-0 laptop:w-52 laptop:h-52"></div>
                <div class="flex-1 space-y-6 py-1">
                  <div class="space-y-3 pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 tablet:pl-10">
                    <div class="w-128 h-8 bg-slate-700 mt-8 rounded-full"></div>
                    <br />
                    <div class="w-[22rem] h-4 bg-slate-700 rounded-full"></div>
                    <div class="w-[20rem] h-4 bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-36 h-8 animate-pulse bg-slate-700 mx-auto mt-14 -mb-8 rounded-full"></div>
            <div className="image-galery-s animate-pulse">
              <div className="image-box-s"></div>
              <div className="image-box-s"></div>
              <div className="image-box-s"></div>
              <div className="image-box-s"></div>
              <div className="image-box-s"></div>
            </div>
          </div>
        </>
        ) : (
          data.length !== 0 ? (
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
          </> ) : (
            <div className="text-center">Gagal mengambil data</div>
          )
        )}
      </div>
    </>
  );
}
