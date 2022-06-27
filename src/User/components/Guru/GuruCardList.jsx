import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import bgBtn from "../../assets/bgBtn.png";
import axios from 'axios'

export default function JurusanCardList() {
  const { jurusanId } = useParams();

  const [kelas, setKelas] = useState([]);

  useEffect(() => {
    getKelas();
  }, [jurusanId]);

  const getKelas = async () => {
    const result = await axios.get(
      `http://localhost:8000/kelas/jurusan/${jurusanId}`
    );
    setKelas(result.data.data);
  };
  return (
    <div>
      {kelas ? (
        kelas.length == 4 ? (
          <div>
            <div className="md:flex justify-between">
              <Link to={`/kelas/${kelas[0].kelas_id}`} className="no-underline">
                <div className="w-full mt-4 md:w-1/2 ">
                  <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                    <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                    <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                      {kelas[0].kelas_nama}
                    </h1>
                  </div>
                </div>
              </Link>
              <Link to={`/kelas/${kelas[1].kelas_id}`} className="no-underline">
                <div className="w-full mt-4 md:w-1/2 ">
                  <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                    <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                    <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                      {kelas[1].kelas_nama}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:flex justify-center">
              <Link to={`/kelas/${kelas[2].kelas_id}`} className="no-underline">
                <div className="w-full mt-4 md:w-1/2 ">
                  <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                    <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                    <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                      {kelas[2].kelas_nama}
                    </h1>
                  </div>
                </div>
              </Link>
              <Link to={`/kelas/${kelas[3].kelas_id}`} className="no-underline">
                <div className="w-full mt-4 md:w-1/2 ">
                  <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0">
                    <img src={bgBtn} alt="" className="max-w-xs object-cover" />
                    <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                      {kelas[3].kelas_nama}
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          <div className="md:flex justify-between">
            {kelas
              ? kelas.map((kelas, index) => {
                  return (
                    <Link
                      to={`/kelas/${kelas.kelas_id}`}
                      className="no-underline"
                      key={kelas.kelas_id}
                    >
                      <div className="w-full mt-4 md:w-1/3 ">
                        <div className="w-min mx-auto bg-white/30 backdrop-blur-xl px-3 pt-4 pb-16 rounded-md z-0 ">
                          <img
                            src={bgBtn}
                            alt=""
                            className="max-w-xs object-cover"
                          />
                          <h1 className="z-10 -mt-24 text-center text-5xl font-semibold tracking-wider text-white">
                            {kelas.kelas_nama}
                          </h1>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        )
      ) : (
        console.warn("tidak tersedia")
      )}{" "}
    </div>
  );
}
