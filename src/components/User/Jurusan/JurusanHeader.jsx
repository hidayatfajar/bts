import React from "react";

export default function JurusanHeader(props) {
  const jurusan = props.jurusan;

  let jurusanHeader = [];
  jurusan.map((item) => {
    if (item.jurusan_id === 1) {
      jurusanHeader.push({
        jurusanNama: "Akuntansi",
        jurusanDesc: item.jurusan_deskripsi,
      });
    } else if (item.jurusan_id === 2) {
      jurusanHeader.push({
        jurusanNama: "Rekayasa Perangkat Lunak",
        jurusanDesc: item.jurusan_deskripsi,
      });
    } else if (item.jurusan_id === 3) {
      jurusanHeader.push({
        jurusanNama: "Teknik Komputer dan Jaringan",
        jurusanDesc: item.jurusan_deskripsi,
      });
    } else if (item.jurusan_id === 4) {
      jurusanHeader.push({
        jurusanNama: "Teknik Elektronika Industri",
        jurusanDesc: item.jurusan_deskripsi,
      });
    } else if (item.jurusan_id === 5) {
      jurusanHeader.push({
        jurusanNama: "Teknik dan Bisnis Sepeda Motor",
        jurusanDesc: item.jurusan_deskripsi,
      });
    } else if (item.jurusan_id === 6) {
      jurusanHeader.push({
        jurusanNama: "Teknik Energi Terbarukan",
        jurusanDesc: item.jurusan_deskripsi,
      });
    }
  });

  return (
    <div className="bg-white/30 backdrop-blur-xl p-3 laptop:p-2 rounded-md">
      {jurusan.map((item, index) => {
        return (
          <div className="laptop:flex" key={index}>
            <div className="">
              <img
                src={`${process.env.REACT_APP_API_KEY}public/images/` + item.jurusan_logo}
                className="w-56 mr-0 laptop:mr-8 mx-auto"
                alt={item.jurusan_nama}
                // style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className="desc pl-0 laptop:pl-9 flex flex-col justify-center text-center">
              <h1 className=" text-3xl laptop:text-left tracking-wider">
                {jurusanHeader[index].jurusanNama}
              </h1>
              <p className="max-w-xl pt-2 font-light laptop:font-normal tracking-wider text-justify laptop:text-left">
                {jurusanHeader[index].jurusanDesc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
