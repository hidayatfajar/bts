import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSearch,
  faPen,
  faTrash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";

const GuruList = () => {
  const [guru, setGuru] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [Isloading, SetIsloading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("asc");
  document.title = "BTS - List Guru";

  const getGuru = async () => {
    const res = await axios.get(`/guru`);
    try {
      setGuru(res.data.data.sort(autoSort));
      
    } catch (error) {
      
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
    setTimeout(() => {
      getGuru();
      SetIsloading(false);
    }, 2000);
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

  const deleteGuru = async (guru_id) => {
    try {
      await axios.delete(`/guru/hapus/${guru_id}`);
      getGuru();
    } catch (error) {
      
    }
  };

  const dataPerPage = 5;
  const [pageCount, setPageCount] = useState(
    Math.ceil(guru.length / dataPerPage)
  );

  const pageVisited = pageNumber * dataPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setPageCount(Math.ceil(data.length / dataPerPage));
  }, [data]);

  return (
    <div>
      <div className="container">
        <p className="text-3xl font-semibold mb-5">Data Guru</p>
        <div className="md:flex justify-between mb-3">
          <div>
            <Link to={`/admin/guru/tambah/`}>
              <button className="bg-sky-600 py-2 px-4 no-underline rounded hover:bg-sky-800 text-white text-sm font-medium font-body flex items-center">
                Tambah
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
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm font-body"
                placeholder="Cari guru..."
                type="text"
                name="search"
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </label>
          </div>
        </div>
        {Isloading ? (
          <center>
            <Spinner
              className="justify-center"
              variant="dark"
              animation="border"
            />
          </center>
        ) : (
          <div className="overflow-auto rounded-lg shadow mt-14 md:mt-0">
            <table className="w-full border-2 rounded-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="p-3 text-black text-sm font-extrabold tracking-wide text-left">
                    No
                  </th>
                  <th
                    className="p-3 text-black text-sm font-extrabold tracking-wide text-left"
                    onClick={() => sortByName("guru_nama")}
                  >
                    Nama Guru &ensp;
                    <FontAwesomeIcon icon={faSort} />
                  </th>
                  <th className="p-3 text-black text-sm font-extrabold tracking-wide text-left">
                    Foto Guru
                  </th>
                  <th className="p-3 text-black text-sm font-extrabold tracking-wide text-left">
                    Jabatan
                  </th>
                  <th className="p-3 text-black text-sm font-extrabold tracking-wide text-left">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {data
                  .slice(pageVisited, pageVisited + dataPerPage)
                  .map((guru, index) => {
                    return (
                      <tr
                        className="odd:bg-white even:bg-gray-50"
                        key={guru.guru_id}
                      >
                        <td className="p-3 text-sm font-bold text-black-500 whitespace-nowrap">
                          {/* {index + 1} */}
                          {guru.guru_id}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {guru.guru_nama}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          <img
                            src={
                              `${process.env.REACT_APP_API_KEY}public/images/` +
                              guru.guru_gambar
                            }
                            alt="gambar"
                            className="h-12 w-12 rounded"
                          />
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {guru.guru_jabatan}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          <Link to={`/admin/guru/view/${guru.guru_id}`}>
                            <button className="text-black">
                              <FontAwesomeIcon icon={faEye} />
                            </button>
                          </Link>
                          <Link to={`/admin/guru/ubah/${guru.guru_id}`}>
                            <button className="text-black px-4">
                              <FontAwesomeIcon icon={faPen} />
                            </button>
                          </Link>
                          <button className="text-black">
                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => deleteGuru(guru.guru_id)}
                            />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
        <div className="my-3 flex justify-center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={changePage}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
};

export default GuruList;
