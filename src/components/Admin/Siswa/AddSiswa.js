import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const AddSiswa = (props) => {
  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [quotes, setQuotes] = useState("");
  const [kelas, setKelas] = useState([]);
  const [kelasid, setKelasid] = useState("");
  document.title = "BTS - Tambah Siswa";

  const loadGambar = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };
  const location = useLocation();
  console.log(location)
  const history = useNavigate();
  const getKelas = async () => {
    const res = await axios.get("/kelas");
    try {
      setKelas(res.data.data);
      
    } catch (error) {
      
    }
  };

  const addSiswa = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nis", nis);
    data.append("nama", nama);
    data.append("image", image);
    data.append("quote", quotes);
    data.append("kelas_id", kelasid);
    try {
      const res = await axios.post("/siswa/tambah", data, {
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
        history(`/admin/siswa/kelas/${location.state.id}`);
      }
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getKelas();
    
  }, []);

  return (
    <div>
      <div className="container">
        <p className="text-3xl font-semibold mb-3">Tambah Siswa</p>
        <div className="shadow rounded border-2 border-gray-200">
          <div className="p-4">
            <form onSubmit={addSiswa}>
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="col-span-2  rounded p-4 ">
                <div className="form-group mb-3">
                    <label className="text-md text-gray-700 mb-2 font-extrabold font-body">
                      NIS <span className="text-red-500">*</span>
                    </label>
                      <input
                        className="form-control placeholder:italic placeholder:text-sm font-body"
                        type="number"
                        placeholder="Masukkan NIS Siswa *"
                        onChange={(e) => setNis(e.target.value)}
                      />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-md text-gray-700 mb-2 font-extrabold font-body">
                      Nama <span className="text-red-500">*</span>
                    </label>
                      <input
                        className="form-control placeholder:italic placeholder:text-sm font-body"
                        type="text"
                        placeholder="Masukkan Nama Siswa *"
                        onChange={(e) => setNama(e.target.value)}
                      />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-md text-gray-700 mb-2 font-extrabold font-body">
                      Quote <span className="text-red-500">*</span>
                    </label>
                      <textarea
                        className="form-control placeholder:italic placeholder:text-sm font-body"
                        rows="3"
                        type="text"
                        placeholder="Masukkan Quotes * ( Max : 100 Karakter )"
                        onChange={(e) => setQuotes(e.target.value)}
                      />
                  </div>
                  <div className="form-group mb-3">
                    <label className="text-md text-gray-700 mb-2 font-extrabold font-body">
                      Kelas <span className="text-red-500">*</span>
                    </label>
                      <select
                        className="form-control italic text-sm font-body"
                      onChange={(e) => setKelasid(e.target.value)}
                        value={kelasid}
                      >
                        <option value="">=== Pilih Kelas ===</option>
                        {kelas.map((kelasid, index) => (
                          <option className="font-body" key={index} value={kelasid.kelas_id}>
                            {kelasid.kelas_nama}
                          </option>
                        ))}
                      </select> 
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-full text-left"> 
                    <label className="text-md text-gray-700 mb-2 font-extrabold font-body">
                      Gambar <span className="text-red-500">*</span>
                    </label>
                    </div>
                    {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                      />
                    ) : (
                      <div className="mt-3 w-64 h-64 object-cover rounded border-dashed border-2 border-gray-300 flex justify-center items-center mb-3">
                        <FontAwesomeIcon
                          className="text-gray-400 text-[100px]"
                          icon={faImage}
                        />
                      </div>
                    )}
                    <label className="block font-extrabold font-body">
                      <input
                        type="file"
                        className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-extrabold font-body
                            file:bg-gray-100 file:text-gray-700
                            hover:file:bg-gray-200
                          "
                        onChange={loadGambar}
                      />
                    </label>
                  </div>
                </div>

                <div className="inline-flex">
                  <button className="bg-sky-600 py-2 px-4 rounded hover:bg-sky-800 text-white text-sm font-semibold font-body flex items-center">
                    Tambah
                  </button>
                  <Link to={`/admin/siswa/kelas/${location.state.id}`} className="no-underline">
                    <button className="bg-gray-600 py-2 px-4 no-underline rounded hover:bg-gray-800 text-white text-sm font-semibold font-body flex items-center ml-3">
                      Batal
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSiswa;
