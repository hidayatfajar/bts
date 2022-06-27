import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import GuruFooter from "./GuruFooter";
import GuruHeader from "./GuruHeader";

export default function Guru() {
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
          {/* <WisudaHeader /> */}
          <br />
        </Container>
        <GuruFooter />
      </div>
    </>
  );
}
