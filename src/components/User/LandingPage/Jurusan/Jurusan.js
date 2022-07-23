import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import NavBarMagic from "../NavBarMagic/NavBarMagic";
import Footer from "../Footer/Footer"

const Jurusan = () => {
  const Kaprogs = [
    {
      id_jurusan: "1",
      nama: "SRI SUPRIATININGSIH, S.Pd.",
      jurusan: "AK",
      img: "kaprog-ak",
    },
    {
      id_jurusan: "2",
      nama: "ANDI SUSANDI, S.Kom.",
      jurusan: "RPL",
      img: "kaprog-rpl",
    },
    {
      id_jurusan: "3",
      nama: "DANI KURNAWAN, S.Kom.",
      jurusan: "TKJ",
      img: "kaprog-tkj",
    },
    {
      id_jurusan: "4",
      nama: "DEWI MARLINA, S.Pd.",
      jurusan: "TEI",
      img: "kaprog-tei",
    },
    {
      id_jurusan: "5",
      nama: "ROHADI YUSUF, S.Pd.",
      jurusan: "TBSM",
      img: "kaprog-tsm",
    },
    {
      id_jurusan: "6",
      nama: "IMAM NURSYAHIED, S.Pd.",
      jurusan: "TET",
      img: "kaprog-tet",
    },
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      <div className="bg-bts">
        <NavBar />
        <NavBarMagic />
        {loading ? (
          <>
            {/* title */}
            <div className="container pt-4 animate-pulse">
              <div class="mini:w-56 mobile:w-60 laptop:w-96 h-10 bg-slate-700 rounded-full col-span-2"></div>
              <div class="mini:w-40 mobile:w-52 laptop:w-80 h-10 bg-slate-700 rounded-full mini:mt-3 mobile:mt-4 laptop:mt-6 col-span-1"></div>
            </div>
            <br />
            {/* Content Bar */}
            <div className="container">
              <div className="laptop:grid grid-cols-3 space-y-4 space-x-4 laptop:space-x-0 laptop:space-y-0 gap-4 mx-auto">
                <div className="w-full mx-auto bg-white/30 mini:p-2 mobile:p-[10px] tablet:p-6 laptop:p-3 rounded-xl">
                  <div className="flex flex-row items-center">
                    <div className="profile">
                      <div class="mini:w-14 mobile:w-14 tablet:w-20 laptop:w-14 mini:h-14 mobile:h-14 tablet:h-20 laptop:h-14 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>

                    <div className="mini:ml-3 mobile:ml-4 laptop:ml-4 ">
                      <div class="w-48 h-4 animate-pulse bg-slate-700 rounded-full"></div>
                      <div class="w-40 h-3 mt-1 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-full mini:h-36 mobile:h-44 laptop:h-44 mt-3 pt-3 bg-slate-700 animate-pulse rounded-lg">
                    <div class="mini:w-28 mini:h-28 mobile:w-36 mobile:h-36 laptop:w-36 laptop:h-36 animate-pulse bg-white/30 mx-auto rounded-full"></div>
                  </div>
                </div>

                <div className="w-full mx-auto bg-white/30 mini:p-2 mobile:p-[10px] tablet:p-6 laptop:p-3 rounded-xl">
                  <div className="flex flex-row items-center">
                    <div className="profile">
                      <div class="mini:w-14 mobile:w-14 tablet:w-20 laptop:w-14 mini:h-14 mobile:h-14 tablet:h-20 laptop:h-14 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>

                    <div className="mini:ml-3 mobile:ml-4 laptop:ml-4 ">
                      <div class="w-48 h-4 animate-pulse bg-slate-700 rounded-full"></div>
                      <div class="w-40 h-3 mt-1 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-full mini:h-36 mobile:h-44 laptop:h-44 mt-3 pt-3 bg-slate-700 animate-pulse rounded-lg">
                    <div class="mini:w-28 mini:h-28 mobile:w-36 mobile:h-36 laptop:w-36 laptop:h-36 animate-pulse bg-white/30 mx-auto rounded-full"></div>
                  </div>
                </div>

                <div className="w-full mx-auto bg-white/30 mini:p-2 mobile:p-[10px] tablet:p-6 laptop:p-3 rounded-xl">
                  <div className="flex flex-row items-center">
                    <div className="profile">
                      <div class="mini:w-14 mobile:w-14 tablet:w-20 laptop:w-14 mini:h-14 mobile:h-14 tablet:h-20 laptop:h-14 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>

                    <div className="mini:ml-3 mobile:ml-4 laptop:ml-4 ">
                      <div class="w-48 h-4 animate-pulse bg-slate-700 rounded-full"></div>
                      <div class="w-40 h-3 mt-1 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-full mini:h-36 mobile:h-44 laptop:h-44 mt-3 pt-3 bg-slate-700 animate-pulse rounded-lg">
                    <div class="mini:w-28 mini:h-28 mobile:w-36 mobile:h-36 laptop:w-36 laptop:h-36 animate-pulse bg-white/30 mx-auto rounded-full"></div>
                  </div>
                </div>

                <div className="w-full mx-auto bg-white/30 mini:p-2 mobile:p-[10px] tablet:p-6 laptop:p-3 rounded-xl">
                  <div className="flex flex-row items-center">
                    <div className="profile">
                      <div class="mini:w-14 mobile:w-14 tablet:w-20 laptop:w-14 mini:h-14 mobile:h-14 tablet:h-20 laptop:h-14 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>

                    <div className="mini:ml-3 mobile:ml-4 laptop:ml-4 ">
                      <div class="w-48 h-4 animate-pulse bg-slate-700 rounded-full"></div>
                      <div class="w-40 h-3 mt-1 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-full mini:h-36 mobile:h-44 laptop:h-44 mt-3 pt-3 bg-slate-700 animate-pulse rounded-lg">
                    <div class="mini:w-28 mini:h-28 mobile:w-36 mobile:h-36 laptop:w-36 laptop:h-36 animate-pulse bg-white/30 mx-auto rounded-full"></div>
                  </div>
                </div>

                <div className="w-full mx-auto bg-white/30 mini:p-2 mobile:p-[10px] tablet:p-6 laptop:p-3 rounded-xl">
                  <div className="flex flex-row items-center">
                    <div className="profile">
                      <div class="mini:w-14 mobile:w-14 tablet:w-20 laptop:w-14 mini:h-14 mobile:h-14 tablet:h-20 laptop:h-14 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>

                    <div className="mini:ml-3 mobile:ml-4 laptop:ml-4 ">
                      <div class="w-48 h-4 animate-pulse bg-slate-700 rounded-full"></div>
                      <div class="w-40 h-3 mt-1 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-full mini:h-36 mobile:h-44 laptop:h-44 mt-3 pt-3 bg-slate-700 animate-pulse rounded-lg">
                    <div class="mini:w-28 mini:h-28 mobile:w-36 mobile:h-36 laptop:w-36 laptop:h-36 animate-pulse bg-white/30 mx-auto rounded-full"></div>
                  </div>
                </div>

                <div className="w-full mx-auto bg-white/30 mini:p-2 mobile:p-[10px] tablet:p-6 laptop:p-3 rounded-xl">
                  <div className="flex flex-row items-center">
                    <div className="profile">
                      <div class="mini:w-14 mobile:w-14 tablet:w-20 laptop:w-14 mini:h-14 mobile:h-14 tablet:h-20 laptop:h-14 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>

                    <div className="mini:ml-3 mobile:ml-4 laptop:ml-4 ">
                      <div class="w-48 h-4 animate-pulse bg-slate-700 rounded-full"></div>
                      <div class="w-40 h-3 mt-1 animate-pulse bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div class="w-full mini:h-36 mobile:h-44 laptop:h-44 mt-3 pt-3 bg-slate-700 animate-pulse rounded-lg">
                    <div class="mini:w-28 mini:h-28 mobile:w-36 mobile:h-36 laptop:w-36 laptop:h-36 animate-pulse bg-white/30 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="container pt-4">
            <h1 className="max-w-sm laptop:max-w-md text-title">
              Beberapa list <span className="gradient-text"> Jurusan.</span>
            </h1>
            <br />
            <div className=" laptop:grid grid-cols-3 space-y-4 space-x-4 laptop:space-x-0 laptop:space-y-0 gap-4 mx-auto ">
              {Kaprogs.map((Kaprog, index) => {
                return (
                  <Link
                    to={`/jurusan/${Kaprog.id_jurusan}`}
                    className="no-underline text-white"
                  >
                    <div
                      key={index}
                      className="w-auto mx-auto bg-gray-500 mini:p-2 mobile:p-[10px] tablet:p-6 laptop:p-3 rounded-xl"
                    >
                      <div className="flex flex-row items-center">
                        <div className="profile">
                          <img
                            className="mini:w-14 mobile:w-14 tablet:w-20 laptop:w-14"
                            src={require(`../../../assets/LandingPage/jurusan/${Kaprog.img}.png`)}
                          />
                        </div>

                        <div className=" mini:ml-3 mobile:ml-4 laptop:ml-4 mt-2">
                          <h6 className="-mb-1 mini:leading-8 mini:text-sm mobile:text-base tablet:text-xl laptop:text-base tracking-wider">
                            {Kaprog.nama}
                          </h6>
                          <p className="mini:text-xs mobile:text-sm tablet:text-base laptop:text-sm font-light tracking-widest">
                            Kepala Program {Kaprog.jurusan}
                          </p>
                        </div>
                      </div>
                      <img
                        className="w-full rounded-lg pt-2"
                        src={require(`../../../assets/LandingPage/jurusan/${Kaprog.jurusan}.png`)}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
            <br />
            <br />
          </div>
            <Footer />
            </>
        )}
      </div>
    </>
  );
};

export default Jurusan;
