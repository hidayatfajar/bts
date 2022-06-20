import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Table, Card, Button, Container } from "react-bootstrap";

const FotoList = () => {
  const { kelas_id } = useParams();
  const [foto, setFoto] = useState([]);

  const getFoto = async () => {
    const res = await axios.get(`/kelas/gambar/${kelas_id}`);
    try {
      setFoto(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoto();
  }, [kelas_id]);

  return (
    <div>
      <Card>
        <Table striped hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Gambar</th>
              <th>Jenis</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {foto.map((foto, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={
                      process.env.IMAGE_URL +
                      foto.gambar_nama
                    }
                    alt="gambar"
                    width={40}
                    height={40}
                    style={{ borderRadius: "20px" }}
                  />
                </td>
                <td>{foto.gambar_jenis}</td>
                <td>
                  <Button>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
};

export default FotoList;
