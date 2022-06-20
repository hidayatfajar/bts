import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Table, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartArea, faCircle, faCircleInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const KelasList = () => {
  const [kelas, setKelas] = useState([]);

  const { jurusan_id } = useParams();

  const getKelas = async () => {
    const res = await axios.get(
      `/kelas/jurusan/${jurusan_id}`
    );
    try {
      setKelas(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKelas();
  }, [jurusan_id]);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Data Kelas</Card.Title>
          <hr />
          <Table striped hover>
            <thead>
              <tr>
                <th>Kelas</th>
                <th>Jurusan</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {kelas.map((kelas) => (
                <tr key={kelas.kelas_id}>
                  <td>XII</td>
                  <td>{kelas.kelas_nama}</td>
                  <td>
                    <Link to={`/admin/siswa/kelas/${kelas.kelas_id}`}>
                      <Button variant="primary"><FontAwesomeIcon icon={faInfoCircle}/></Button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/admin/foto/kelas/${kelas.kelas_id}`}>
                      <Button variant="primary"><FontAwesomeIcon icon={faInfoCircle}/></Button>
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

export default KelasList;
