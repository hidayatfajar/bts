import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEdit,
  faSort,
  faTrash,
  faPen,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

const SiswaList = () => {
  const [siswa, setSiswa] = useState([]);
  const { kelas_id } = useParams();
  const [order, setOrder] = useState("asc");

  const sort = (a, b) => {
    if (order === "asc") {
      return a.siswa_nama.localeCompare(b.siswa_nama);
    } else {
      return b.siswa_nama.localeCompare(a.siswa_nama);
    }
  };

  const getSiswa = async () => {
    const res = await axios.get(`/siswa/kelas/${kelas_id}`);
    try {
      setSiswa(res.data.data.sort(sort));
      console.log(res.data.data.sort(sort));
    } catch (error) {
      console.log(error);
    }
  };

  const sortByName = (col) => {
    if (order === "asc") {
      const sorted = [...siswa].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setSiswa(sorted);
      setOrder("desc");
    } else {
      const sorted = [...siswa].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setSiswa(sorted);
      setOrder("asc");
    }
  };

  useEffect(() => {
    getSiswa();
  }, [kelas_id]);

  return (
    <div>
      <div className="container">
        <p className="text-3xl font-semibold mb-5">Data Siswa</p>
        <div className="md:flex justify-between mb-3">
          <div>
            <Link
              to={{ pathname: `/admin/siswa/tambah/`, state: { id: kelas_id } }}
            >
              <button className="bg-sky-600 py-2 px-4 no-underline rounded hover:bg-sky-800 text-white text-sm font-medium flex items-center">
                <FontAwesomeIcon icon={faPlus} />
                &ensp;Add
              </button>
            </Link>
          </div>
          <div className="float-right w-full  md:-mt-2  md:w-52">
            <label class="relative block">
              <span class="sr-only">Search</span>
              <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                  <FontAwesomeIcon className="text-gray-300" icon={faSearch} />
                </svg>
              </span>
              <input
                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search for anything..."
                type="text"
                name="search"
              />
            </label>
          </div>
        </div>
        <div className="overflow-auto rounded-lg shadow mt-14 md:mt-0 ">
          <table className="w-full border-2 rounded-full">
            <thead className="bg-gray-50 border-b-2 border-gray-200">
              <tr>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  No
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  NIS
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Gambar
                </th>
                <th
                  className="p-3 text-sm font-semibold tracking-wide text-left"
                  onClick={() => sortByName("siswa_nama")}
                >
                  Nama &ensp;
                  <FontAwesomeIcon icon={faSort} />
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Quotes
                </th>
                <th className="p-3 text-sm font-semibold tracking-wide text-left">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y ">
              {siswa.map((siswa, index) => (
                <tr className="bg-white" key={siswa.siswa_id}>
                  <td className="p-3 text-sm font-bold text-black-500 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {siswa.siswa_nis}
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <img
                      src={
                        "http://localhost:8000/public/images/ak/ak3/" +
                        siswa.siswa_gambar
                      }
                      alt="gambar"
                      className="h-12 w-12 rounded"
                    />
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    {siswa.siswa_nama}
                  </td>
                  <td className="p-3 text-sm italic text-gray-700 whitespace-nowrap">
                    " {siswa.siswa_quote} "
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <Link to={`/admin/siswa/ubah/${siswa.siswa_id}`}>
                      <button className="bg-white py-2 px-3 rounded  hover:bg-sky-800 text-black text-base font-medium">
                        <FontAwesomeIcon icon={faPen} />
                      </button>
                    </Link>
                    <button
                      className="bg-white py-2 px-3 rounded  hover:bg-sky-800 text-black text-base font-medium"
                      onClick={""}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* </Card.Body>
        </Card> */}
      </div>
    </div>
  );
};

export default SiswaList;
