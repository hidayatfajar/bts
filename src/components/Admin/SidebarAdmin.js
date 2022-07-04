import React, { useState, useEffect } from "react";
import { Link, } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartArea,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import ProtectedRoutes from "../../ProtectedRoutes";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import KelasList from "./Kelas/KelasList";

import SiswaList from "./Siswa/SiswaList";
import AddSiswa from "./Siswa/AddSiswa";
import EditSiswa from "./Siswa/EditSiswa";
import ViewSiswa from './Siswa/ViewSiswa';

import GuruList from "./Guru/GuruList";
import AddGuru from './Guru/AddGuru';
import EditGuru from './Guru/EditGuru';
import ViewGuru from "./Guru/ViewGuru";

import FotoList from "./Photo/FotoList";
import AddFoto from './Photo/AddFoto';
import EditFoto from './Photo/EditFoto';

const SideBar = () => {

  const [content, setContent] = useState([]);

  const getContent = async () => {
    const res = await axios.get(`/jurusan`);
    try {
      setContent(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

 

  return (
    <div>
        <Navigation />

        <div className="hidden tablet:hidden laptop:block h-full w-60 fixed z-10 top-10 left-0 bg-[#25262D] overflow-auto overflow-x-hidden overflow-y-auto">
            <br />
            <br />
            <Link to={`/admin`} className="menu-sidebar">
              <span >
                <FontAwesomeIcon
                  icon={faChartArea}
                  className="ml-1"
                />{" "}
                Dashboard
              </span>
            </Link>
            <Link to={`/admin/guru`} className="menu-sidebar">
              <span  >
                <FontAwesomeIcon
                  icon={faChartArea}
                  className="ml-1"
                />{" "}
                Guru
              </span>
            </Link>
            {content.map((jurusan, index) => {
              return (
                <div key={index}>
                  <Link to={`/admin/jurusan/${jurusan.jurusan_id}`} className="menu-sidebar">
                    <span >
                      <FontAwesomeIcon
                        icon={faChartArea}
                        className="ml-1"
                      />{" "}
                      {jurusan.jurusan_nama}
                    </span>
                  </Link>
                </div>
              );
            })}

        </div>

        {/* Route in class main */}
        <div className="mt-24 ml-1 tablet:ml-1 laptop:ml-64 mr-2 tablet:mr-2 md:mr-3">

          <ProtectedRoutes exact path="/admin/" component={Dashboard} />
          <ProtectedRoutes path="/admin/jurusan/:jurusan_id" component={KelasList} />

          {/* GURU */}
          <ProtectedRoutes exact path="/admin/guru/" component={GuruList} />
          <ProtectedRoutes path="/admin/guru/tambah" component={AddGuru} />
          <ProtectedRoutes path="/admin/guru/ubah/:guru_id" component={EditGuru} />
          <ProtectedRoutes path="/admin/guru/view/:guru_id" component={ViewGuru} />

          {/* SISWA */}
          <ProtectedRoutes  exact path="/admin/siswa/kelas/:kelas_id" component={SiswaList} />
          <ProtectedRoutes path="/admin/siswa/tambah" component={AddSiswa} />
          <ProtectedRoutes path="/admin/siswa/ubah/:siswa_id" component={EditSiswa} />
          <ProtectedRoutes path="/admin/siswa/view/:siswa_id" component={ViewSiswa} />
          
          {/* PHOTO */}
          <ProtectedRoutes exact path="/admin/foto/kelas/:kelas_id" component={FotoList} />
          <ProtectedRoutes path="/admin/foto/tambah/" component={AddFoto} />
          <ProtectedRoutes path="/admin/foto/kelas/ubah/:gambar_id" component={EditFoto} />
        </div>
      </div>
  );
};

export default SideBar;
