import React, { useState, useEffect, } from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSearch,
  faPlus,
  faPen,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

const GuruList = () => {
  const [guru, setGuru] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("asc");
  const getGuru = async () => {
    const res = await axios.get(`/guru`);
    try {
      setGuru(res.data.data.sort(autoSort));
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const autoSort = (a, b) => {
    if (order === "asc") {
      return a.guru_nama.localeCompare(b.guru_nama);
    } else {
      return b.guru_nama.localeCompare(a.guru_nama);
    }
  };

  useEffect(() => {
    getGuru();
  }, []);

  const sortByName = (col) => {
    if (order === "asc") {
      const sorted = [...guru].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setGuru(sorted);
      setOrder("desc");
    } else {
      const sorted = [...guru].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setGuru(sorted);
      setOrder("asc");
    }
  };

  const data = guru.filter((el) => {
    if (searchInput === "") {
      return el;
    } else {
      return el.guru_nama.toLowerCase().includes(searchInput);
    }
  });

  return (
    <div>
      <div className="container">
        <p className="text-3xl font-semibold mb-5">Data Guru</p>
        <div className="md:flex justify-between mb-3">
          <div>
            <Link to={`/admin/guru/tambah/`}>
              <button className="bg-sky-600 py-2 px-4 no-underline rounded hover:bg-sky-800 text-white text-sm font-medium flex items-center">
                <FontAwesomeIcon icon={faPlus} />
                &ensp;Add
              </button>
            </Link>
          </div>
          <div className="float-right w-full  md:-mt-2  md:w-52">
            <label className="relative block">
              <span className="sr-only">Search</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <FontAwesomeIcon className="text-gray-300" icon={faSearch} />
                </svg>
              </span>
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="overflow-auto rounded-lg shadow mt-14 md:mt-0">
          <table className="w-full border-2 rounded-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  No
                </th>
                <th
                  className="p-3 text-black text-sm font-semibold tracking-wide text-left"
                  onClick={() => sortByName("guru_nama")}
                >
                  Nama Guru &ensp;
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  Foto Guru
                </th>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  Jabatan
                </th>
                <th className="p-3 text-black text-sm font-semibold tracking-wide text-left">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y">
              
              {data.map((guru, index) => (
                <tr className="odd:bg-white even:bg-gray-50" key={guru.guru_id}>
                  <td className="p-3 text-sm font-bold text-black-500 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {guru.guru_nama}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img
                      src={
                        "http://localhost:8000/public/images/" +
                        guru.guru_gambar
                      }
                      alt="gambar"
                      className="h-12 w-12 rounded-full"
                    />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {guru.guru_jabatan}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <Link to={`/admin/guru/view/`}>
                      <button className="text-black">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </Link>
                    <Link to={`/admin/guru/ubah/${guru.guru_id}`}>
                      <button className="text-black px-4">
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                      <button className="text-black">
                        <FontAwesomeIcon icon={faTrash} />
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

export default GuruList;
