import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const EditGuru = () => {
  const [guru, setGuru] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  document.title = "BTS - Ubah Guru";

  const history = useNavigate();
  const { guru_id } = useParams();
  const loadGambar = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
    
  };

  const getDataById = async () => {
    try {
      const res = await axios.get(`/guru/${guru_id}`);
      setGuru(res.data.data[0].guru_nama);
      setJabatan(res.data.data[0].guru_jabatan);
      setImage(res.data.data[0].guru_gambar);
      
    } catch (error) {
      
    }
  }

  const updateGuru = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama", guru);
    data.append("jabatan", jabatan);
    data.append("image", image);
    try {
      const res = await axios.put(`/guru/ubah/${guru_id}`, data, {
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
        history.push("/admin/guru");
      }
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getDataById(guru_id);
  }, []);

  return (
    <div>
      <div className="container">
        <p className="text-3xl text-black font-semibold mb-3">Ubah Guru</p>
        <div className="shadow rounded border-2 border-gray-200">
          <div className="px-5 py-5">
            <form onSubmit={updateGuru}>
              <div className="columns-2">
                  <div className="form-group mb-3">
                    <label className="font-extrabold font-body text-sm text-gray-700 mb-2">
                      Nama Guru<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="form-control placeholder:italic placeholder:text-sm font-body"
                      type="text"
                      placeholder="Nama Guru *"
                      value={guru}
                      onChange={(e) => setGuru(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-extrabold font-body text-sm text-gray-700 mb-2">
                      Jabatan<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="form-control placeholder:italic placeholder:text-sm font-body"
                      type="text"
                      placeholder="Jabatan *"
                      value={jabatan}
                      onChange={(e) => setJabatan(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="font-extrabold font-body text-sm text-gray-700 mb-2">Foto<span className="text-red-500">*</span></label>
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 font-body 
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-full file:border-0
                            file:text-sm file:font-extrabold                             file:bg-gray-100 file:text-gray-700
                            hover:file:bg-gray-200
                          "
                      onChange={loadGambar}
                    />
                  </div>
                  <div className="inline-flex">
                  <button className="bg-sky-600 py-2 px-4 rounded hover:bg-sky-800 text-white text-sm font-bold font-body flex items-center">
                    Tambah
                  </button>
                  &ensp;
                  <Link to={`/admin/guru/`} >
                    <button className="bg-gray-600 py-2 px-4 no-underline rounded hover:bg-gray-700 text-white text-sm font-bold font-body flex items-center ml-3">
                    Batal
                    </button>
                  </Link>
                  </div>
                <div className="flex flex-col justify-center items-center">
                  <label className="flex w-full text-left font-bold font-body">Preview :</label>
                  {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                      />
                    ) : (
                      <img
                        src={`${process.env.REACT_APP_API_KEY}public/images/`+ image}
                        alt="preview"
                        className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                      />
                    )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGuru;
