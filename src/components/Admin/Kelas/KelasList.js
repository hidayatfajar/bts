import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const KelasList = () => {
  const [kelas, setKelas] = useState([]);
  document.title = "BTS - List Kelas";

  const { jurusan_id } = useParams();

  const getKelas = async () => {
    const res = await axios.get(`/kelas/jurusan/${jurusan_id}`);
    try {
      setKelas(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKelas();
  }, [jurusan_id]);

  return (
    <div>
      <div className="container w-full">
        <p className="text-3xl font-semibold mb-5">Data Kelas</p>
        <div className="overflow-auto rounded-lg shadow mt-14 md:mt-0">
          <table className="w-full border-2 rounded-full">
            <thead className="bg-gray-50 border-2 border-gray-200">
              <tr>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  No
                </th>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  Kelas
                </th>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  Jurusan
                </th>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {kelas.map((kelas, index) => (
                <tr
                  className="odd:bg-white even:bg-gray-50"
                  key={kelas.kelas_id}
                >
                  <td className="p-3 text-sm text-black whitespace-nowrap font-bold">
                    {index + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    XII
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {kelas.kelas_nama}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <Link to={`/admin/siswa/kelas/${kelas.kelas_id}`}>
                      <button className="text-black h-8 w-32 rounded bg-gray-200 font-semibold">
                        go to foto siswa
                      </button>
                    </Link>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <Link to={`/admin/foto/kelas/${kelas.kelas_id}`}>
                      <button className="text-black h-8 w-32 rounded bg-gray-200 font-bold">
                        <p>go to foto kelas</p>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KelasList;
