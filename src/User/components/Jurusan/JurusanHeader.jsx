import React from "react";

export default function JurusanHeader() {
  return (
    <div className="bg-white/30 backdrop-blur-xl p-4 rounded-md">
      <div className="flex">
        <div className="">{/* <img src={LogoRPL} className="w-96" /> */}</div>
        <div className="desc pl-9">
          <h1 className="text-3xl tracking-wider">{}</h1>
          <p className="max-w-md">
            Kumpulan foto untuk mengenang masa kita Bersama selama 3 tahun di
            SMKN 2 Kota Bekasi.
          </p>
        </div>
      </div>
    </div>
  );
}
