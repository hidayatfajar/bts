import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";
const FotoList = () => {
  const { kelas_id } = useParams();
  const [foto, setFoto] = useState([]);
  const [order, setOrder] = useState("asc");

  const getFoto = async () => {
    const res = await axios.get(`/kelas/gambar/${kelas_id}`);
    try {
      setFoto(res.data.data.sort(autoSort));
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const autoSort = (a, b) => {
    if (order === "asc") {
      return a.gambar_nama.localeCompare(b.gambar_nama);
    } else {
      return b.gambar_nama.localeCompare(a.gambar_nama);
    }
  };

  const deleteFoto = async (gambar_id) => {
    try {
      await axios.delete(`/gambar/kelas/hapus/${gambar_id}`);
      getFoto();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFoto();
  }, [kelas_id]);

  return (
    <div>
      <div className="container w-full">
        <p className="text-3xl font-bold mb-5">Data Foto</p>
        <div className="md:flex justify-between mb-3">
          <div>
            <Link
              to={{
                pathname: `/admin/foto/tambah/`,
                state: { id: kelas_id }
              }}
            >
              <button className="bg-sky-600 py-2 px-4 no-underline rounded hover:bg-sky-800 text-white text-sm font-medium flex items-center">
                Tambah Foto
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-auto rounded-lg shadow mt-14 md:mt-0">
          <table className="w-full border-2 border-gray-200">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-black font-bold tracking-wide whitespace-nowrap text-sm text-left">
                  No
                </th>
                <th className="p-3 text-black font-bold tracking-wide whitespace-nowrap text-sm text-left">
                  Gambar
                </th>
                <th className="p-3 text-black font-bold tracking-wide whitespace-nowrap text-sm text-left">
                  Jenis
                </th>
                <th className="p-3 text-black font-bold tracking-wide whitespace-nowrap text-sm text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {foto.map((foto, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="p-3 text-sm font-bold text-black whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img
                      // src={`${process.env.REACT_APP_IMAGE_URL}` + foto.gambar_nama}
                      src={
                        `http://localhost:8000/public/images/` +
                        foto.gambar_nama
                      }
                      alt="gambar"
                      className="w-12 rounded"
                    />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {foto.gambar_jenis}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <button className="text-black text-left">
                      <FontAwesomeIcon icon={faEye} onClick={""} />
                    </button>
                    <Link
                      to={{
                        pathname: `/admin/foto/kelas/ubah/${foto.gambar_id}`,
                        state: { id: kelas_id },
                      }}
                    >
                      <button className="text-black text-center px-4">
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                    </Link>
                    <button
                      className="text-black text-end"
                      onClick={() => deleteFoto(foto.gambar_id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
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

export default FotoList;
