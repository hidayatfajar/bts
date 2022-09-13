import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCamera,
  faChalkboardTeacher,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Dashboard = () => {
  document.title = "BTS - Dashboard";

  const [jumlah, setJumlah] = useState({
    siswa: 0,
    guru: 0,
    jurusan: 0,
    foto: 0,
  });

  useEffect(async () => {
    await axios
      .get(`${process.env.REACT_APP_API_KEY}jumlah/siswa`)
      .then((res) =>
        setJumlah((prevState) => {
          return {
            ...prevState,
            siswa: res.data.data[0].total,
          };
        })
      );
    await axios.get(`${process.env.REACT_APP_API_KEY}jumlah/guru`).then((res) =>
      setJumlah((prevState) => {
        return {
          ...prevState,
          guru: res.data.data[0].jumlah,
        };
      })
    );
    await axios
      .get(`${process.env.REACT_APP_API_KEY}jumlah/gambar`)
      .then((res) =>
        setJumlah((prevState) => {
          return {
            ...prevState,
            foto: res.data.total,
          };
        })
      );
    await axios
      .get(`${process.env.REACT_APP_API_KEY}jumlah/jurusan`)
      .then((res) =>
        setJumlah((prevState) => {
          return {
            ...prevState,
            jurusan: res.data.data[0].jumlah,
          };
        })
      );
  }, []);

  console.log(jumlah);

  return (
    <>
      <div className="container">
        <p className="text-3xl font-semibold mb-5">Dashboard</p>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-row justify-between bg-[#0091D5] rounded text-white py-2 px-4">
            <div className="content">
              <h4>Siswa</h4>
              <h2>{jumlah.siswa}</h2>
            </div>
            <FontAwesomeIcon icon={faUsers} className="pt-2 text-4xl" />
          </div>

          <div className="flex flex-row justify-between bg-[#7E909A] rounded text-white py-2 px-4">
            <div className="content">
              <h4>Guru</h4>
              <h2>{jumlah.guru}</h2>
            </div>
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="pt-2 text-4xl"
            />
          </div>

          <div className="flex flex-row justify-between bg-[#A5D8DD] rounded text-white py-2 px-4">
            <div className="content">
              <h4>Jurusan</h4>
              <h2>{jumlah.jurusan}</h2>
            </div>
            <FontAwesomeIcon icon={faGraduationCap} className="pt-2 text-4xl" />
          </div>

          <div className="flex flex-row justify-between bg-[#1C4E80] rounded text-white py-2 px-4">
            <div className="content">
              <h4>Foto</h4>
              <h2>{jumlah.foto}</h2>
            </div>
            <FontAwesomeIcon icon={faCamera} className="pt-2 text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
