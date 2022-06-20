import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faImage } from "@fortawesome/free-solid-svg-icons";

const AddSiswa = (props) => {
  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [quotes, setQuotes] = useState("");
  const [kelas, setKelas] = useState([]);
  const [kelasid, setKelasid] = useState("");

  const loadGambar = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
  };
  const location = useLocation();

  const getKelas = async () => {
    const res = await axios.get("/kelas");
    try {
      setKelas(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  //make onChange for select option
  const handleChange = (e) => {
    setKelasid(e.target.value);
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
      await axios.post("/siswa/tambah", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKelas();
    console.log(location.state.id);
  }, []);

  return (
    <div>
      <div className="container">
        <p className="text-3xl font-semibold mb-3">Tambah Siswa</p>
        <div className="shadow rounded border-2 border-gray-200">
          <div className="p-4">
            <Form onSubmit={addSiswa}>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="col-span-2  rounded p-4 ">
                      <div className="form-group mb-3">
                        <label className="block font-semibold">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-gray-700 mb-2">
                            NIS
                          </span>
                          <input
                            className="form-control placeholder:italic placeholder:text-sm"
                            type="text"
                            placeholder="Masukkan NIS Siswa *"
                            onChange={(e) => setNis(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <label className="block font-semibold">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-gray-700 whitespace-nowrap mb-2">
                            Nama
                          </span>
                          <input
                            className="form-control placeholder:italic placeholder:text-sm"
                            type="text"
                            placeholder="Nama"
                            onChange={(e) => setNama(e.target.value)}
                          />
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <label className="block font-semibold">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-gray-700 whitespace-nowrap mb-2">
                            Quote
                          </span>
                          <textarea
                            className="form-control placeholder:italic placeholder:text-sm"
                            rows="3"
                            type="text"
                            placeholder="Masukkan Quotes * ( Max : 100 Karakter )"
                            onChange={(e) => setQuotes(e.target.value)}
                          />
                        </label>
                      </div>

                      <div className="form-group mb-3">
                        <label className="block font-semibold">
                          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md text-gray-700 whitespace-nowrap mb-2">
                            Kelas
                          </span>
                          <select
                            className="form-control italic text-sm"
                            onChange={handleChange}
                            value={kelasid}
                            name="kelas_id"
                          >
                            <option value="">=== Pilih Kelas ===</option>
                            {kelas.map((kelasid, index) => (
                              <option key={index} value={kelasid.kelas_id}>
                                {kelasid.kelas_nama}
                              </option>
                            ))}
                            <FontAwesomeIcon icon={faChevronDown} />
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex w-full text-left">
                          <span className="font-semibold">Gambar <span className="text-red-500">*</span></span>
                        </div>
                        {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                      />
                    ) : (
                      <img
                        src={
                          "http://localhost:8000/public/images/ak/ak3/" + image
                        }
                        alt="preview"
                        className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 flex justify-center items-center mb-3"
                      />
                    )}
                        <label className="block font-semibold">
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
                        </label>
                      </div>
                    </div>

                    <div className="inline-flex">
                      <button className="bg-sky-600 py-2 px-4 rounded hover:bg-sky-800 text-white text-sm font-medium flex items-center">
                        Edit
                      </button>
                      <Link to={`/admin/siswa/kelas/${location.state.id}`}>
                        <button className="bg-gray-600 py-2 px-4 rounded hover:bg-gray-800 text-white text-sm font-medium flex items-center ml-3">
                          Back
                        </button>
                      </Link>
                    </div>
                  </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSiswa;
