import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bgBtn from "../../assets/bgBtn.png";
import axios from "axios";

export default function JurusanCardList() {
  const { jurusanId } = useParams();

  const [kelas, setKelas] = useState([]);
  let jurusanNama = []

  useEffect(() => {
    getKelas();
  }, [jurusanId]);

  const [loading, setLoading] = useState(true);
  const getKelas = async () => {
    const result = await axios.get(
      `http://localhost:8000/kelas/jurusan/${jurusanId}`
    );
    setKelas(result.data.data);
  };
  useEffect(() => {
    if(loading === true){
      getKelas();
      setLoading(false);
    }
  }, [loading]);

  
  kelas.map((item) => {
    console.log(item.kelas_nama);
    const lastChar = item.kelas_nama.slice(-1);
    if(item.jurusan_id === 1){
      jurusanNama.push("AK " + lastChar);
    } else if(item.jurusan_id === 2){
      jurusanNama.push("RPL " + lastChar);
    } else if(item.jurusan_id === 3){
      jurusanNama.push("TKJ " + lastChar);
    } else if(item.jurusan_id === 4){
      jurusanNama.push("TEI " + lastChar);
    } else if(item.jurusan_id === 5){
      jurusanNama.push("TBSM " + lastChar);
    } else if(item.jurusan_id === 6){
      jurusanNama.push("TET " + lastChar);
    }
  })
  console.log(jurusanNama)
  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-4">
      {kelas.map((kelas, index) => {
        return (
          <Link
            to={`/kelas/${kelas.kelas_id}`}
            className="no-underline"
            key={kelas.kelas_id}
          >
            <div className="relative flex items-center justify-center rounded bg-white/30 p-3">
              <img src={"http://localhost:8000/public/images/" + kelas.kelas_gambar} alt={kelas.kelas_gambar} className="object-fit" />
              <p className="absolute text-white text-center text-[2rem] md:text-xl lg:text-2xl font-semibold tracking-wide">
                {jurusanNama[index]}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
