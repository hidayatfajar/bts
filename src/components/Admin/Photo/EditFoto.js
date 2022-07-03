import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const EditFoto = (props) => {
  const [image, setImage] = useState("");
  const [jenis, setJenis] = useState("");
  const [kelas_id, setKelas_id] = useState("");
  const [preview, setPreview] = useState("");
  const [kelas, setKelas] = useState([]);
  document.title = "BTS - Ubah Foto";

  const { gambar_id } = useParams();
  const history = useHistory();
  const location = useLocation();

  const loadGambar = async (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };

  const getDataById = async () => {
    const res = await axios.get(`/gambar/kelas/${gambar_id}`);
    try {
      setJenis(res.data.data[0].gambar_jenis);
      setKelas_id(res.data.data[0].kelas_id);
      setImage(res.data.data[0].gambar_nama);
      console.log(res.data.data[0].gambar_nama);
    } catch (error) {
      console.log(error);
    }
  };

  const getKelas = async () => {
    const res = await axios.get("/kelas");
    try {
      setKelas(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const EditFoto = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);
    data.append("jenis", jenis);
    data.append("kelas_id", kelas_id);
    try {
      const res = await axios.put(`/gambar/kelas/ubah/${gambar_id}`, data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      if (res.data.error === true) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res.data.message}`,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Good Job!",
          text: `${res.data.message}`,
        });
        history.push(`/admin/foto/kelas/${location.state.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKelas();
    getDataById();
    console.log(jenis);
  }, []);

  return (
    <div className="container">
      <p className="text-3xl font-bold mb-3">Ubah Foto Kelas</p>
      <div className="shadow rounded border-2 border-gray-200">
        <div className="px-4 py-4">
          <form onSubmit={EditFoto}>
            <div className="columns-2">
              <div className="form-group mb-3">
                <label className="text-md text-gray-700 mb-2 font-semibold">
                  Jenis <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-select italic text-sm mb-3"
                  type="text"
                  onChange={(e) => setJenis(e.target.value)}
                  value={jenis}
                >
                  <option value="">=== Pilih Jenis Gambar ===</option>
                  <option value="wajib">Wajib</option>
                  <option value="bebas">Bebas</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label className="text-md text-gray-700 mb-2 font-semibold">
                  Kelas <span className="text-red-500">*</span>
                </label>
                <select
                  className="form-select italic text-sm mb-3"
                  onChange={(e) => setKelas_id(e.target.value)}
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
              <div className="form-group mb-3">
                <label className="text-md text-gray-700 mb-2 font-semibold">
                  Photo <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-semibold
                            file:bg-gray-100 file:text-gray-700
                            hover:file:bg-gray-200
                          "
                  onChange={loadGambar}
                />
              </div>
              <div className="inline-flex">
                <button className="bg-sky-600 py-2 px-4 rounded hover:bg-sky-800 text-white text-sm font-medium flex items-center">
                  Ubah
                </button>
                &ensp;
                <Link to={`/admin/foto/kelas/${location.state.id}`}>
                  <button className="bg-gray-600 py-2 px-4 no-underline rounded hover:bg-gray-800 text-white text-sm font-medium flex items-center ml-3">
                    Batal
                  </button>
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <label className="flex w-full text-left text-md text-gray-700 mb-2 font-semibold">
                  Preview :
                </label>
                {preview ? (
                  <img
                    src={preview}
                    alt="preview"
                    className="mt-3 w-90 h-60 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                  />
                ) : (
                  <img
                    src={"http://localhost:8000/public/images/" + image}
                    alt="preview"
                    className="mt-3 w-90 h-60 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditFoto;
