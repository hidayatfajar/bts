import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
const AddGuru = () => {
  const [guru, setGuru] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  document.title = "BTS - Tambah Guru";

  const history = useHistory();

  const loadGambar = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
    console.log(guru);
  };

  const addGuru = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama", guru);
    data.append("jabatan", jabatan);
    data.append("image", image);
    try {
      const res = await axios.post("/guru/tambah", data, {
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
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container">
        <p className="text-3xl text-black font-semibold mb-3">Tambah Guru</p>
        <div className="shadow rounded border-2 border-gray-200">
          <div className="px-5 py-5">
            <form onSubmit={addGuru}>
              <div className="columns-2">
                <div className="form-group mb-3">
                  <label className="font-semibold text-sm text-gray-700 mb-2">
                    Nama Guru <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-control placeholder:italic placeholder:text-sm"
                    type="text"
                    placeholder="Nama Guru *"
                    onChange={(e) => setGuru(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="font-semibold text-sm text-gray-700 mb-2">
                    Jabatan <span className="text-red-500">*</span>
                  </label>
                  <input
                    className="form-control placeholder:italic placeholder:text-sm"
                    type="text"
                    placeholder="Jabatan *"
                    onChange={(e) => setJabatan(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="font-semibold text-sm text-gray-700 mb-2">
                    Foto <span className="text-red-500">*</span>
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
                    Tambah
                  </button>
                  &ensp;
                  <Link to={`/admin/guru/`}>
                    <button className="bg-gray-600 py-2 px-4 no-underline rounded hover:bg-gray-700 text-white text-sm font-medium flex items-center ml-3">
                      Batal
                    </button>
                  </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <label className="flex w-full text-left font-semibold text-sm text-gray-700">
                    Preview :
                  </label>
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGuru;
