import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import "../../components/RPL.css";
import JurusanHeader from "./JurusanHeader";
import JurusanCardList from "./JurusanCardList";
import JurusanFooter from "./JurusanFooter";

export default function RPL(props) {
  return (
    <div>
      <div className="bg-bts">
        <NavBarMagic />
        <NavBar />
        <br />
        <br />
        <Container>
          <JurusanHeader />
          <br />
          <br />
          <JurusanCardList />
          <br />
          <br />
        </Container>
        <JurusanFooter />
      </div>
    </div>
  );
}
