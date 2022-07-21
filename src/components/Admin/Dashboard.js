import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  document.title = "BTS - Dashboard";
  return (
    <>
      <div className="container">
        Dashboard
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-row justify-between bg-sky-500 rounded text-white py-2 px-4">
            <div className="content">
              <h4>Siswa</h4>
              <h2>660</h2>
            </div>
            <FontAwesomeIcon icon={faUsers} className="pt-2 text-4xl" />
          </div>
          <div className="flex flex-row justify-between bg-lime-500 rounded text-white py-2 px-4">
            <div className="content">
              <h4>Jurusan</h4>
              <h2>6</h2>
            </div>
            <FontAwesomeIcon icon={faUsers} className="pt-2 text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
