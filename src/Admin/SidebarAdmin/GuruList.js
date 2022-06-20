import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table, Card, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSort,
} from "@fortawesome/free-solid-svg-icons";

const GuruList = () => {
  const [guru, setGuru] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [order, setOrder] = useState("asc");

  const getGuru = async () => {
    const res = await axios.get(`/guru`);
    try {
      setGuru(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGuru();
  }, []);

  const sortByName = (col) => {
    if (order === "asc"){
    const sorted = [...guru].sort((a,b)=>
    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1)
    setGuru(sorted);
    setOrder("desc");
   } else {
    const sorted = [...guru].sort((a,b)=> 
    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1)
    setGuru(sorted)
    setOrder("asc")
   }
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = guru.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(guru);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Data Guru</Card.Title>
          <hr />
          <div style={{ display: "flex" }}>
            <Link to={`/admin/guru/tambah/`} className="btn btn-primary">
              Add
            </Link>
            <br />
            <br />
            <div style={{ display: "flex", marginLeft: "auto" }}>
              <Form.Control
                placeholder="Cari Guru"
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
          </div>
          <Table striped hover>
            <thead>
              <tr>
                <th>No</th>
                <th onClick={() => sortByName("guru_nama")}>Nama Guru &ensp;<FontAwesomeIcon icon={faSort}/></th>
                <th>Foto Guru</th>
                <th>Jabatan</th>
                <th>Aksi</th>
              </tr>
            </thead>

            <tbody>
              {searchInput.length > 1
                ? filteredResults.map((guru, index) => {
                    return (
                      <tr key={guru.guru_id}>
                        <td>{index + 1}</td>
                        <td>{guru.guru_nama}</td>
                        <td>
                          <img
                            src={
                              `http://localhost:8000/public/images/` +
                              guru.guru_gambar
                            }
                            alt="gambar"
                            width={40}
                            height={40}
                            style={{
                              borderRadius: "20px",
                            }}
                          />
                        </td>
                        <td>{guru.guru_jabatan}</td>
                        <td>
                          <Link
                            to={`/admin/guru/tambah/`}
                            className="btn-sm btn-primary"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                : guru.map((guru, index) => (
                    <tr key={guru.guru_id}>
                      <td>{index + 1}</td>
                      <td>{guru.guru_nama}</td>
                      <td>
                        <img
                          src={
                            `http://localhost:8000/public/images/` +
                            guru.guru_gambar
                          }
                          alt="gambar"
                          width={40}
                          height={40}
                          style={{
                            borderRadius: "20px",
                          }}
                        />
                      </td>
                      <td>{guru.guru_jabatan}</td>
                      <td>
                        <Link
                          to={`/admin/guru/tambah/`}
                          className="btn-sm btn-primary"
                          style={{ textDecoration: "none" }}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default GuruList;
