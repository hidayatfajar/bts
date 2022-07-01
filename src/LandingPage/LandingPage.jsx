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
import ReactPlayer from "react-player/lazy";
import { Link, useParams } from "react-router-dom";

// import image
import logo from "./asset/Logo.png";
import logo2 from "./asset/logo2.svg";
import img1 from "./asset/bg1.png";
import img1_2 from "./asset/bg1-2.png";

import awan from "./asset/awan.svg";

import smk from "./asset/smk.svg";

import icon1 from "./asset/icon1.png";
import icon2 from "./asset/icon2.png";
import garis from "./asset/garis.png";

import img2 from "./asset/bg2.png";
import img3 from "./asset/kepsek.png";
import img4 from "./asset/bg3.png";
import img5 from "./asset/bg4.png";
import img6 from "./asset/bg5.png";

import kaprogRPL from "./asset/jurusan/kaprog-rpl.png";
import kaprogAK from "./asset/jurusan/kaprog-ak.png";
import kaprogTEI from "./asset/jurusan/kaprog-tei.png";
import kaprogTET from "./asset/jurusan/kaprog-tet.png";
import kaprogTKJ from "./asset/jurusan/kaprog-tkj.png";
import kaprogTSM from "./asset/jurusan/kaprog-tsm.png";

import RPL from "./asset/jurusan/RPL.png";
import AK from "./asset/jurusan/AK.png";
import TEI from "./asset/jurusan/TEI.png";
import TET from "./asset/jurusan/TET.png";
import TKJ from "./asset/jurusan/TKJ.png";
import TSM from "./asset/jurusan/TSM.png";

import galery from "./asset/Galery.png";

import team1 from "./asset/varits.png";
import team2 from "./asset/fajar.png";
import team3 from "./asset/rafly.png";
import team4 from "./asset/angga.png";
import team5 from "./asset/ade.png";
import team6 from "./asset/raka.png";
import team7 from "./asset/abel.png";
// import team8 from "./asset/maghvi.png";
import team9 from "./asset/fadil.png";

// import folder
import NavBarMagic from "./NavBarMagic/NavBarMagic";
import NavBar from "./NavBar/NavBar";

// import css
import "./LandingPage.css";
import Footer from "./Footer/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMore: false,
    };
  }
  handleClick = () => {
    this.setState(!readMore);
  };

  render() {
    return (
      <div>
        <div className="bg-bts ">
          <NavBarMagic />

          <NavBar />
          <br />
          <br />
          <br />
          <br />

          {/* Page1 */}
          <div className="-mt-12 md:pt-20 pb-36">
            <div>
              <Container className="md:flex justify-between">
                <div className="w-full text-center md:w-6/12 ">
                  <h1 className="max-w-md text-title">
                    LET'S WRITE OUR STORY{" "}
                    <span className="gradient-text">EXIST 16.</span>{" "}
                  </h1>

                  <p className="max-w-lg pt-4 text-lg font-light tracking-wider md:font-normal  md:text-left">
                    Kumpulan foto untuk mengenang masa kita Bersama selama 3
                    tahun di SMKN 2 Kota Bekasi.
                  </p>
                  <div className="flex justify-center pt-4 md:justify-start">
                    <button
                      variant="outline-success"
                      className="w-28 h-9 rounded-full transition delay-150 outline 
                        text-green-700 outline-green-700 hover:bg-green-700 hover:text-white
                        "
                    >
                      See Video
                    </button>
                  </div>
                  <br />
                  <br />
                </div>
              </Container>

              <div className="md:flex justify-end">
                <img
                  src={img1}
                  className=" w-[1020px] h-auto mt-[-600px] mr-[-100px]
                  hidden md:block "
                  alt=""
                />
                <img
                  src={img1_2}
                  className="mt-2 w-full mx-auto md:hidden md:mt-0 "
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Page akt */}
          <div className="-mt-16 md:-mt-52">
            <Container>
              <div className="md:flex justify-between">
                <div className="w-full pt-0">
                  <h1 className="text-title  md:pt-3">
                    REWIND VIDEO <br />
                    <span className="gradient-text">EXIST 16.</span>{" "}
                  </h1>
                  <p className="max-w-xs md:max-w-[420px] pt-4 text-lg font-light md:font-normal tracking-wider ">
                    Beberapa video rewind untuk mengenang kebersamaan kita
                    angkatan 16, sebagai bagian dari siswa SMKN 2.
                  </p>
                  <div className="pt-4">
                    <button
                      variant="outline-success"
                      className="w-32 h-9 rounded-full transition delay-150 outline 
                    text-green-700 outline-green-700 hover:bg-green-700 hover:text-white
                    "
                    >
                      See Video
                    </button>
                  </div>
                </div>
                <div className="w-full pt-20 mx-auto md:pt-0">
                  <div className="player-wrapper">
                    <ReactPlayer
                      className="react-player "
                      width="100%"
                      height="100%"
                      url="https://youtu.be/JzPknKdkGO8"
                      loop={true}
                    />
                  </div>
                </div>
              </div>
            </Container>
          </div>

          {/* Page Sekolah */}
          <div className="pt-40 md:pt-56">
            <Container>
              <div className="md:flex">
                <div className="md:-ml-16">
                  <img
                    className="w-64 mx-auto md:w-96 pt-16  md:mx-0"
                    src={smk}
                  />
                </div>
                <div className="w-full ml-0 pt-3 md:w-8/12 md:ml-14 md:pt-0">
                  <div className="text-center">
                    <h1 className="max-w-none mt-5 text-3xl font-semibold font-body md:max-w-2xl  md:text-5xl md:font-bold md:text-left tracking-wide">
                      THIS IS OUR SCHOOL
                      <br />
                      <span className="gradient-text">
                        SMKN 2 KOTA BEKASI.
                      </span>{" "}
                    </h1>
                    <p className="pt-4 pb-3 text-light tracking-wider text-lg md:text-left md:tracking-wide">
                      Sekolah yang memiliki 6 jurusan didalam nya, serta kelas
                      unggulan yang siap untuk memajukan perkembangan industri
                      di indonesia. berikut ini adalah pengenalan sekolah kami.
                    </p>
                  </div>
                  <div className="flex justify-center  md:justify-start">
                    <button
                      className="w-40 md:w-32 h-9 rounded-full transition delay-150 outline
                    text-green-700 outline-green-700 hover:bg-green-700 hover:text-white
                    "
                    >
                      See Video
                    </button>
                  </div>
                </div>
                <div className="hidden md:block mt-10 -mr-40 ">
                  {" "}
                  <img className="" src={img6} />
                </div>
              </div>
            </Container>
          </div>

          {/* Page Sambutan */}
          <div className="pt-52 pb-10">
            <Container>
              <div className="md:flex">
                <div className="hidden md:block -ml-44 -mt-14 ">
                  <Image className="" src={img2} />
                </div>
                <div className="w-full ml-0 md:w-9/12 md:ml-16">
                  <h4 className="text-left md:text-right text-3xl md:text-2xl font-semibold font-body md:font-bold tracking-widest">
                    KATA SAMBUTAN {""}
                    <br className="block md:hidden" />
                    <span className="gradient-text"> KEPALA SEKOLAH</span>
                  </h4>
                  <br />
                  <div className="bg-gray-500 py-8 pl-4 pr-4 md:pl-60 md:pr-4 rounded-xl">
                    <p>
                      Bismillah Wal Hamdulillah,
                      <br />
                      Sukacita dan rasa gembira mengiringi keberhasilan yang
                      diraih, yaitu LULUS dari SMKN 2 Kota Bekasi. Tetaplah
                      berpijak pada keyakinan bahwa KITA BISA dan PASTI BISA
                      meraih sukses di masa depan dengan gemilang. Selamat atas
                      Kelulusan yang sudah dicapai, dan semoga sukses selalu
                      anak-anak ku Angkatan ke 16 SMKN 2 Kota Bekasi. Semoga
                      Alloh SWT, Tuhan Yang Maha Esa memberikan kemudahan dan
                      kelancaran dalam setiap langkah mengarungi perjalanan
                      kehidupan. Mohon maaf apabila saya, para guru dan karyawan
                      pernah memiliki khilaf dan salah. Terima kasih.
                      <br />
                      Wasassalamu’alaikum Wr Wb.
                    </p>
                    <br />
                    <br />
                    <h6>Dr. Agus Wimbadi M.pd</h6>
                    <p>Kepala Sekolah SMKN 2</p>
                  </div>
                </div>
              </div>
              <Image className="-mt-40 md:-mt-96 ml-32" src={img3} />
              <div className="hidden">
                <Image className="" src={img4} />
              </div>
            </Container>
          </div>

          {/* Page Jurusan */}
          <div className="pt-32">
            <Container>
              <h1 className="max-w-sm md:max-w-md text-title">
                Beberapa list <span className="gradient-text"> Jurusan.</span>
              </h1>
              <br />
              <div className=" md:grid grid-cols-3 space-y-4 md:space-y-0 gap-4 mx-auto ">
                {/* AK */}
                <Link to="/jurusan/1" className="no-underline text-white">
                  <div className="w-auto mx-auto bg-gray-500 p-3 rounded-xl">
                    <div className="flex ">
                      <div className="profile">
                        <img className="w-14" src={kaprogAK} />
                      </div>

                      <div className="ml-4 mt-2">
                        <h6 className="-mb-1 text-base tracking-wider">
                          SRI SUPRIATININGSIH, S. Pd.
                        </h6>
                        <p className="text-sm font-light tracking-widest">
                          Kepala Program AK
                        </p>
                      </div>
                    </div>
                    <img className="rounded-lg pt-2" src={AK} />
                  </div>
                </Link>

                {/* RPL */}
                <Link to="/jurusan/2" className="no-underline text-white">
                  <div className="w-auto mx-auto bg-gray-500 p-3 rounded-xl">
                    <div className="flex ">
                      <div className="profile">
                        <img className="w-14" src={kaprogRPL} />
                      </div>

                      <div className="ml-4 mt-2">
                        <h6 className="-mb-1 text-base tracking-wider">
                          ANDI SUSANDI, S.Kom.
                        </h6>
                        <p className="text-sm font-light tracking-widest">
                          Kepala Program RPL
                        </p>
                      </div>
                    </div>
                    <img className="rounded-lg pt-2" src={RPL} />
                  </div>
                </Link>
                {/* TKJ */}
                <Link to="/jurusan/3" className="no-underline text-white">
                  <div className="w-auto mx-auto bg-gray-500 p-3 rounded-xl">
                    <div className="flex ">
                      <div className="profile">
                        <img className="w-14" src={kaprogTKJ} />
                      </div>

                      <div className="ml-4 mt-2">
                        <h6 className="-mb-1 text-base tracking-wider">
                          DANI KURNAWAN, S.Kom.
                        </h6>
                        <p className="text-sm font-light tracking-widest">
                          Kepala Program TKJ
                        </p>
                      </div>
                    </div>
                    <img className="rounded-lg pt-2" src={TKJ} />
                  </div>
                </Link>

                {/* TEI */}
                <Link to="/jurusan/4" className="no-underline text-white">
                  <div className="w-auto mx-auto bg-gray-500 p-3 rounded-xl">
                    <div className="flex ">
                      <div className="profile">
                        <img className="w-14" src={kaprogTEI} />
                      </div>

                      <div className="ml-4 mt-2">
                        <h6 className="-mb-1 text-base tracking-wider">
                          DEWI MARLINA, S.Pd.
                        </h6>
                        <p className="text-sm font-light tracking-widest">
                          Kepala Program TEI
                        </p>
                      </div>
                    </div>
                    <img className="rounded-lg pt-2" src={TEI} />
                  </div>
                </Link>
                {/* TBSM */}
                <Link to="/jurusan/5" className="no-underline text-white">
                  <div className="w-auto mx-auto bg-gray-500 p-3 rounded-xl">
                    <div className="flex ">
                      <div className="profile">
                        <img className="w-14" src={kaprogTSM} />
                      </div>

                      <div className="ml-4 mt-2">
                        <h6 className="-mb-1 text-base tracking-wider">
                          ROHADI YUSUF, S.Pd.
                        </h6>
                        <p className="text-sm font-light tracking-widest">
                          Kepala Program TBSM
                        </p>
                      </div>
                    </div>
                    <img className="rounded-lg pt-2" src={TSM} />
                  </div>
                </Link>
                {/* TET */}
                <Link to="/jurusan/6" className="no-underline text-white">
                  <div className="w-auto mx-auto bg-gray-500 p-3 rounded-xl">
                    <div className="flex ">
                      <div className="profile">
                        <img className="w-14" src={kaprogTET} />
                      </div>

                      <div className="ml-4 mt-2">
                        <h6 className="-mb-1 text-base tracking-wider">
                          IMAM NURSYAHIED, S.Pd.
                        </h6>
                        <p className="text-sm font-light tracking-widest">
                          Kepala Program TET
                        </p>
                      </div>
                    </div>
                    <img className="rounded-lg pt-2" src={TET} />
                  </div>
                </Link>
              </div>
            </Container>
          </div>

          {/* Page Tim Pembuat */}
          <div className="pt-56">
            <Container>
              <div className="flex ">
                <div className="w-full md:w-5/12">
                  <h1 className="text-title max-w-sm">
                    Tim Pembuat <span className="gradient-text">Website.</span>
                  </h1>
                </div>
                <div className="hidden md:block w-1/12">
                  <Image className="h-32 -ml-4" src={garis} />
                </div>
                <div className="hidden md:block w-4/12">
                  <p className="-ml-7 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Fugit, molestiae obcaecati rerum illo velit earum
                    perferendis! Velit quod voluptatibus, tenetur qui illum,
                    dolorem iste tempore accusantium delectus rem, ipsa
                    molestias?
                  </p>
                </div>
                <div className="-mt-12 -mr-36 md:-mr-40">
                  <Image className="" src={img6} />
                </div>
              </div>
              <br />

              <div className="md:grid grid-cols-4 space-y-4 md:space-y-0 gap-4 -mt-24 md:-mt-36">
                <div className="">
                  <Image className="w-full" src={team1} />
                </div>
                <div className="">
                  <Image className="w-full " src={team2} />
                </div>
                <div className="">
                  <Image className="w-full pt-[3px]" src={team3} />
                </div>{" "}
                <div className="">
                  <Image className="w-full" src={team4} />
                </div>{" "}
                <div className="">
                  <Image className="w-full pt-1" src={team5} />
                </div>
                <div className="">
                  <Image className="w-full" src={team6} />
                </div>{" "}
                <div className="">
                  <Image className="w-full" src={team7} />
                </div>{" "}
                {/* <div className="">
                  <Image className="w-full pt-2  " src={team8} />
                </div>{" "} */}
                <div className="">
                  <Image className="w-full" src={team9} />
                </div>
              </div>
            </Container>
          </div>

          {/* Footer */}
          <br />
          <br />
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}
