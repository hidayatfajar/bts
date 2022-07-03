import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const ViewGuru = () => {
  const [guru, setGuru] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  document.title = "BTS - View Guru";

  const history = useHistory();
  const { guru_id } = useParams();
  const loadGambar = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
    console.log(guru);
  };

  const getDataById = async () => {
    try {
      const res = await axios.get(`/guru/${guru_id}`);
      setGuru(res.data.data[0].guru_nama);
      setJabatan(res.data.data[0].guru_jabatan);
      setImage(res.data.data[0].guru_gambar);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
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
            <form>
              <div className="form-group mb-3">
                <label className="font-semibold text-sm text-gray-700 mb-2">
                  Foto Guru <span className="text-red-500">*</span>
                </label>
                <img
                  src={`http://localhost:8000/public/images/` + image}
                  alt="preview"
                  className="mt-3 w-64 h-64 object-cover rounded border-2 border-gray-300 mx-auto mb-3"
                />
              </div>
              <div className="form-group mb-3">
                <label className="font-semibold text-sm text-gray-700 mb-2">
                  Nama Guru <span className="text-red-500">*</span>
                </label>
                <input
                  className="form-control placeholder:italic placeholder:text-sm"
                  type="text"
                  placeholder="Nama Guru"
                  value={guru}
                  disabled
                />
              </div>
              <div className="form-group mb-3">
                <label className="font-semibold text-sm text-gray-700 mb-2">
                  Jabatan <span className="text-red-500">*</span>
                </label>
                <input
                  className="form-control placeholder:italic placeholder:text-sm"
                  type="text"
                  placeholder="Jabatan"
                  value={jabatan}
                  disabled
                />
              </div>
              <Link to={`/admin/guru/`}>
                <button className="bg-gray-600 py-2 px-4 no-underline rounded hover:bg-gray-700 text-white text-sm font-medium ">
                  Batal
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewGuru;
