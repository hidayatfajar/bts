import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const ViewSiswa = (props) => {
  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [quotes, setQuotes] = useState("");
  const [kelas, setKelas] = useState([]);
  const [kelas_id, setKelas_id] = useState("");
  document.title = "BTS - View Siswa";

  const { siswa_id } = useParams(); 

  const location = useLocation();

  const getDataById = async () => {
    const res = await axios.get(`/siswa/${siswa_id}`);
    setNis(res.data.data[0].siswa_nis);
    setNama(res.data.data[0].siswa_nama);
    setQuotes(res.data.data[0].siswa_quote);
    setKelas_id(res.data.data[0].kelas_id);
    setImage(res.data.data[0].siswa_gambar); 
    console.log(res.data.data[0].kelas_id);
  };

  const getKelas = async () => {
    const res = await axios.get("/kelas");
    try {
      setKelas(res.data.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKelas();
    getDataById();
  }, [siswa_id]);

  return (
    <div>
      <div className="container">
        <p className="text-3xl font-semibold mb-3">View Siswa</p>
        <div className="w-full shadow rounded border-2 border-gray-200">
          <div className="p-2">
            <form>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="col-span-2  rounded p-4 ">
                  <div className="form-group mb-3">
                    <label className="text-md text-gray-700 mb-2 font-semibold">
                      NIS <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="form-control placeholder:italic placeholder:text-sm"
                      type="number"
                      placeholder="Masukkan NIS Siswa *"
                      disabled
                      value={nis}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-md text-gray-700 mb-2 font-semibold">
                      Nama <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="form-control placeholder:italic placeholder:text-sm"
                      type="text"
                      placeholder="Nama"
                      disabled
                      value={nama}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-md text-gray-700 mb-2 font-semibold">
                      Quote <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="form-control placeholder:italic placeholder:text-sm"
                      rows="3"
                      type="text"
                      placeholder="Masukkan Quotes * ( Max : 100 Karakter )"
                      disabled
                      value={quotes}
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-md text-gray-700 mb-2 font-semibold">
                      Kelas <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="form-control text-sm mb-3"
                      disabled
                      value={kelas_id}
                    >
                      <option value="">=== Pilih Kelas ===</option>
                      {kelas.map((kelasid, index) => (
                        <option key={index} value={kelasid.kelas_id}>
                          {kelasid.kelas_nama}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Link to={`/admin/siswa/kelas/${location.state.id}`}>
                    <button className="bg-gray-600 py-2 px-4 rounded no-underline hover:bg-gray-800 text-white text-sm font-medium flex items-center">
                      Batal
                    </button>
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center -mt-20">
                  <div className="flex flex-col justify-center items-center ">
                    <div className="flex w-full text-left">
                      <label className="font-semibold">
                        Gambar <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                        name="img"
                        accept="image/*"
                      />
                    ) : (
                      <img
                        src={"http://localhost:8000/public/images/" + image}
                        alt="preview"
                        className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                      />
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSiswa;
