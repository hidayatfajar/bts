import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import WisudaGalery from "./WisudaGalery";
import WisudaHeader from "./WisudaHeader";
import axios from "axios";

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
          <center>
            <Spinner animation="border" />
          </center>
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
            <div className="text-center">
              <h1>Gagal mengambil data wisuda</h1>
            </div>
          )
        )}
      </div>
    </>
  );
}
