import React from "react";
import { Image } from "react-bootstrap";
import ReactPlayer from "react-player/lazy";
import { Link } from "react-router-dom";

// import image
import img1 from "../../assets/LandingPage/bg1.png";
import img1_2 from "../../assets/LandingPage/bg1-2.png";

import smk from "../../assets/LandingPage/smk.svg";

import img2 from "../../assets/LandingPage/bg2.png";
import img3 from "../../assets/LandingPage/kepsek.png";
import img4 from "../../assets/LandingPage/bg3.png";
import img6 from "../../assets/LandingPage/bg5.png";

import team1 from "../../assets/LandingPage/varits.png";
import team2 from "../../assets/LandingPage/fajar.png";
import team3 from "../../assets/LandingPage/rafly.png";
import team4 from "../../assets/LandingPage/angga.png";
import team5 from "../../assets/LandingPage/ade.png";
import team6 from "../../assets/LandingPage/raka.png";
import team7 from "../../assets/LandingPage/abel.png";
import team9 from "../../assets/LandingPage/fadil.png";

// import folder
import NavBarMagic from "./NavBarMagic/NavBarMagic";
import NavBar from "./NavBar/NavBar";

// import css
import "./LandingPage.css";
import Footer from "./Footer/Footer";

const LandingPage = () => {
  return (
    <>
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
            <div className="container laptop:flex justify-between">
              <div className="w-full text-center laptop:w-6/12 ">
                <h1 className="max-w-md text-title tablet:max-w-none laptop:max-w-md tablet:text-center laptop:text-left">
                  LET'S WRITE OUR STORY{" "}
                  <span className="gradient-text">EXIST 16.</span>
                </h1>

                <p className="max-w-lg pt-4 text-lg font-light tracking-wider tablet:mx-auto laptop:mx-0    laptop:font-normal laptop:text-left">
                  Kumpulan foto untuk mengenang masa kita Bersama selama 3 tahun
                  di SMKN 2 Kota Bekasi.
                </p>
                <div className="flex justify-center pt-4 laptop:justify-start">
                  <Link to="/wisuda">
                    <button
                      variant="outline-success"
                      className="w-28 h-9 rounded-full transition delay-150 outline 
                    text-green-700 outline-green-700 hover:bg-green-700 hover:text-white
                    "
                    >
                      See Albums
                    </button>
                  </Link>
                </div>
                <br />
                <br />
              </div>
            </div>

            <div className="laptop:flex justify-end">
              <img
                src={img1}
                className=" w-[1020px] h-auto mt-[-600px] mr-[-100px]
                  hidden laptop:block "
                alt=""
              />
              <img
                src={img1_2}
                className="mt-2 w-full mx-auto tablet:mt-0 tablet:w-[80%] laptop:hidden laptop:mt-0 "
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Page akt */}
        <div className="container -mt-16 laptop:-mt-52">
          <div className="laptop:flex justify-between">
            <div className="w-full pt-0">
              <h1 className="text-title  laptop:pt-3">
                REWIND VIDEO <br />
                <span className="gradient-text">EXIST 16.</span>{" "}
              </h1>
              <p className="max-w-xs laptop:max-w-[420px] pt-4 text-lg font-light laptop:font-normal tracking-wider ">
                Beberapa video rewind untuk mengenang kebersamaan kita angkatan
                16, sebagai bagian dari siswa SMKN 2.
              </p>
              <div className="pt-4">
                <Link to="/jurusan/menu">
                  <button
                    variant="outline-success"
                    className="w-32 h-9 rounded-full transition delay-150 outline 
                    text-green-700 outline-green-700 hover:bg-green-700 hover:text-white
                    "
                  >
                    See Albums
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full pt-20 mx-auto laptop:pt-0">
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player "
                  width="100%"
                  height="100%"
                  url="https://youtu.be/qoseOKNYIw0"
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Page Sekolah */}
        <div className="container pt-40 laptop:pt-56">
          <div className="laptop:flex">
            <div className="laptop:-ml-16">
              <img
                className="w-64 mx-auto tablet:w-72 laptop:w-96 pt-16  laptop:mx-0"
                src={smk}
              />
            </div>
            <div className="w-full ml-0 pt-3 laptop:w-8/12 laptop:ml-14 laptop:pt-0">
              <div className="text-center">
                <h1 className="max-w-none mt-5 text-3xl font-semibold font-body laptop:max-w-2xl  laptop:text-5xl laptop:font-bold laptop:text-left tracking-wide">
                  THIS IS OUR SCHOOL
                  <br />
                  <span className="gradient-text">
                    SMKN 2 KOTA BEKASI.
                  </span>{" "}
                </h1>
                <p className="pt-4 pb-3 text-light tracking-wider text-lg laptop:text-left laptop:tracking-wide">
                  Sekolah yang memiliki 6 jurusan didalam nya, serta kelas
                  unggulan yang siap untuk memajukan perkembangan industri di
                  indonesia. berikut ini adalah pengenalan sekolah kami.
                </p>
              </div>
              <div className="flex justify-center  laptop:justify-start">
                <a href="https://youtu.be/piBf6ca5npw">
                  <button
                    className="w-40 laptop:w-32 h-9 rounded-full transition delay-150 outline
                    text-green-700 outline-green-700 hover:bg-green-700 hover:text-white
                    "
                  >
                    See Video
                  </button>
                </a>
              </div>
            </div>
            <div className="hidden laptop:block mt-10 -mr-40 ">
              {" "}
              <img className="" src={img6} />
            </div>
          </div>
        </div>

        {/* Page Sambutan */}
        <div className="container pt-52 pb-10">
          <div className="laptop:flex">
            <div className="hidden laptop:block -ml-44 -mt-14 ">
              <Image className="" src={img2} />
            </div>
            <div className="laptop:w-[1300px] ml-0 laptop:ml-16">
              <h4 className="text-left laptop:text-right text-3xl laptop:text-2xl font-semibold font-body laptop:font-bold tracking-widest">
                KATA SAMBUTAN {""}
                <br className="block laptop:hidden" />
                <span className="gradient-text"> KEPALA SEKOLAH</span>
              </h4>
              <br />
              <div className=" laptop:flex bg-gray-500 mini:px-3 mini:py-8 mobile:px-4 mobile:py-8 laptop:pl-3 laptop:py-3 laptop:pr-4 rounded-xl">
                <Image
                  className="w-60 mini:hidden mobile:hidden laptop:block"
                  src={img3}
                />
                <div className="mobile:pl-0 laptop:pl-4 flex flex-col justify-center">
                  <p className="font-normal text-justify leading-snug">
                    <span className="font-body mini:leading-8 mobile:leading-10 laptop:leading-9">
                      Assalamu’alaikum Wr Wb,
                    </span>
                    <br />
                    Sukacita dan rasa gembira mengiringi keberhasilan yang
                    diraih, yaitu LULUS dari SMKN 2 Kota Bekasi. Tetaplah
                    berpijak pada keyakinan bahwa KITA BISA dan PASTI BISA
                    meraih sukses di masa depan dengan gemilang. Selamat atas
                    Kelulusan yang sudah dicapai, dan semoga sukses selalu
                    anak-anak ku Angkatan ke 16 SMKN 2 Kota Bekasi. Semoga Allah
                    SWT, Tuhan Yang Maha Esa memberikan kemudahan dan kelancaran
                    dalam setiap langkah mengarungi perjalanan kehidupan. Mohon
                    maaf apabila saya, para guru dan karyawan pernah memiliki
                    khilaf dan salah. Terima kasih.
                    <br />
                    <span className="font-body mini:leading-8 mobile:leading-10 laptop:leading-9">
                      Wasassalamu’alaikum Wr Wb.
                    </span>
                  </p>
                  <div className="mini:flex mobile:flex mobile:pt-2 laptop:block laptop:pt-0">
                    <Image
                      className="w-24 mobile:block laptop:hidden"
                      src={img3}
                    />
                    <div className="mini:pl-3 mobile:pl-3 laptop:pl-0">
                      <p className="flex tracking-wider pt-3">
                        Kepala Sekolah{" "}
                        <span className="mini:hidden mobile:hidden laptop:block">
                          &nbsp;SMKN2 Kota Bekasi,
                        </span>
                      </p>
                      <h6 className="font-bold tracking-widest">
                        B. Agus Wimbadi, M.Pd{" "}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden">
            <Image className="" src={img4} />
          </div>
        </div>

        {/* Page Tim Pembuat */}
        <div className="container pt-56">
          <div className="flex justify-between">
            <div className="w-full laptop:w-5/12">
              <h1 className="text-title max-w-sm">
                Tim Pembuat <span className="gradient-text">Website.</span>
              </h1>
            </div>
            <div className="-mt-12 -mr-36 laptop:-mr-40">
              <Image className="" src={img6} />
            </div>
          </div>
          <br />

          <div className="tablet:grid laptop:grid tablet:grid-cols-2 laptop:grid-cols-4 space-y-4 laptop:space-y-0 gap-4 mini:-mt-12 mobile:-mt-24 tablet:-mt-28 laptop:-mt-36">
            <div className="">
              <Image
                className="w-full mobile:mt-0 tablet:mt-3 laptop:mt-0"
                src={team1}
              />
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
        </div>

        {/* Footer */}
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
