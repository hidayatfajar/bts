import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import WisudaGalery from "./WisudaGalery";
import WisudaHeader from "./WisudaHeader";

export default function Wisuda() {
  return (
    <>
      <div className="bg-bts ">
        <NavBarMagic />
        <NavBar />
        <br />
        <Container>
          <div className="">
            <h1 className="max-w-md text-title">
              Moment Wisuda <span className="gradient-text">Angkatan 16.</span>{" "}
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
          <WisudaGalery />
        </Container>
      </div>
    </>
  );
}
