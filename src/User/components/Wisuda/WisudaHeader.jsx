import React from "react";

import smk from "./assets/smk.svg";

export default function WisudaHeader() {
  return (
    <div className="bg-white/30 backdrop-blur-xl p-4 rounded-md">
      <div className="flex-col laptop:flex laptop:flex-row ">
        <div className="">
          <img
            src={smk}
            className="w-60 pt-3 mx-auto laptop:pt-0 laptop:w-52"
          />
        </div>
        <div className="desc pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 ">
          <h1 className="text-lg laptop:text-2xl laptop:text-left laptop:pt-8 font-semibold tracking-wider">
            Prosesi Wisuda Angkatan 16
          </h1>
          <p className="max-w-[22rem] text-base laptop:text-left">
            Kumpulan foto-foto moment wisuda angkatan 16 SMK Negeri 2 Kota
            Bekasi.
          </p>
        </div>
      </div>
    </div>
  );
}
