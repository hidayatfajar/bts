import React, { Component } from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Row,
  Col,
  Button,
  Image,
  Form,
  FormControl,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import NavBar from "../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../LandingPage/NavBarMagic/NavBarMagic";
import LogoRPL from "../assets/logo-rpl.svg";

import bgBtn from "../assets/bgBtn.png";

import logo from "../assets/Logo.png";

import "./RPL.css";

export default class RPL extends Component {
  render() {
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
                  <h1 className="text-3xl tracking-wider">
                    Rekayasa Perangkat Lunak
                  </h1>
                  <p className="max-w-md">
                    Kumpulan foto untuk mengenang masa kita Bersama selama 3
                    tahun di SMKN 2 Kota Bekasi.
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="md:flex justify-between">
              <a href="rpl1" className="no-underline">
                <div className="w-full mt-4 md:w-1/3 ">
                  <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                    <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                    <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                      XII RPL 1
                    </h1>
                  </div>
                </div>
              </a>
              <div className="w-full mt-4 md:w-1/3 ">
                <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                  <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                  <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider">
                    XII RPL 1
                  </h1>
                </div>
              </div>
              <div className="w-full mt-4 md:w-1/3 ">
                <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                  <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                  <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider">
                    XII RPL 1
                  </h1>
                </div>
              </div>
            </div>

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
}
