import { useState, useEffect } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartArea, faSignOut } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

import ProtectedRoutes from "../../ProtectedRoutes";


import control from "../assets/images/control.png";
import logo from "../assets/images/LogoM.png";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [content, setContent] = useState([]);
  const getContent = async () => {
    const res = await axios.get(`/jurusan`);
    try {
      setContent(res.data.data);
    } catch (error) {}
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      // title: "Apakah anda yakin, ingin keluar?",
      text: "Apakah anda yakin, ingin keluar?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, keluar!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("dataAdmin");
        navigate("/auth/login");
      }
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <div className="flex overflow-y-scroll overflow-x-hidden">
      <div
        className={` ${
          open ? "w-[265px]" : "w-20 "
        } bg-slate-600 h-screen p-4  pt-8 fixed duration-300`}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-sky-600
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`w-7 ml-0 cursor-pointer duration-500 ${
              open && "-ml-1"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 mt-2 ${
              !open && "scale-0"
            }`}
          >
            MEMO
          </h1>
        </div>
        <hr className="bg-white" />

        {/* Menu SideBar */}
        <ul className="">
          <Link to={`/admin`} className="no-underline text-white">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-400 text-gray-300 text-sm items-center gap-x-4 -ml-2 ${
                !open && "-ml-9"
              } text-lg duration-200
              `}
            >
              <FontAwesomeIcon
                icon={faChartArea}
                className={` text-lg duration-200`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Dashboard
              </span>
            </li>
          </Link>

          <Link to={`/admin/guru`} className="no-underline text-white">
            <li
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-400 text-gray-300 text-sm items-center gap-x-4 mt-3 -ml-2 ${
                !open && "-ml-9"
              } text-lg duration-200
              `}
            >
              <FontAwesomeIcon
                icon={faChartArea}
                className={` text-lg duration-200`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Guru
              </span>
            </li>
          </Link>

          {content.map((jurusan, index) => {
            return (
              <Link
                to={`/admin/jurusan/${jurusan.jurusan_id}`}
                className="no-underline text-white"
              >
                <li
                  key={index}
                  className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-400 text-gray-300 text-sm items-center gap-x-4 mt-3 -ml-2 ${
                    !open && "-ml-9"
                  } text-lg duration-200 
              `}
                >
                  <FontAwesomeIcon
                    icon={faChartArea}
                    className={` text-lg duration-200`}
                  />
                  <span
                    className={`${!open && "hidden"} origin-left duration-200`}
                  >
                    {jurusan.jurusan_nama}
                  </span>
                </li>
              </Link>
            );
          })}

          <li
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-400 text-gray-300 text-sm items-center gap-x-4 mt-6 -ml-2 ${
              !open && "-ml-9"
            } text-lg duration-200
              `}
            onClick={handleLogout}
          >
            <FontAwesomeIcon
              icon={faSignOut}
              className={` text-lg duration-200`}
            />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              Logout
            </span>
          </li>
        </ul>
      </div>

      {/* Main */}
      <div
        className={`w-full h-screen flex-1 p-7 duration-200 ${
          open ? "pl-72" : "pl-14 "
        }`}
      >
        <Outlet />
        
      </div>
    </div>
  );
};
export default SideBar;
