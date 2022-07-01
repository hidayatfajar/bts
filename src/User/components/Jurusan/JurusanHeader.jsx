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
    <div className="bg-white/30 backdrop-blur-xl p-4 rounded-md">
      {jurusan.map((item, index) => {
        return (
          <div className="flex" key={index}>
            <div className="">
              <img
                src={"http://localhost:8000/public/images/" + item.jurusan_logo}
                className="w-36 mr-8"
                alt={item.jurusan_nama}
                // style={{ width: "150px", height: "150px" }}
              />
            </div>
            <div className="desc pl-9">
              <h1 className="text-3xl tracking-wider">
                {jurusanHeader[index].jurusanNama}
              </h1>
              <p className="max-w-xl mt-6">
                {jurusanHeader[index].jurusanDesc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
