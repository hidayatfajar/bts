import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";

const EditSiswa = () => {
  const [nis, setNis] = useState("");
  const [nama, setNama] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [quotes, setQuotes] = useState("");
  const [kelas, setKelas] = useState([]);
  const [kelasid, setKelasid] = useState(kelas);
  const { siswa_id } = useParams();
  const history = useHistory();

  const loadGambar = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
    console.log(kelas);
  };

  const getDataById = async () => {
    const res = await axios.get(`/siswa/${siswa_id}`);
    setNis(res.data.data[0].siswa_nis);
    setNama(res.data.data[0].siswa_nama);
    setQuotes(res.data.data[0].siswa_quote);
    setKelasid(res.data.data[0].kelas_id);
    setImage(res.data.data[0].siswa_gambar);
    console.log(res.data.data);
    console.log(res.data.data[0].kelas_id);
  };

  const getKelas = async () => {
    const res = await axios.get("/kelas");
    try {
      setKelas(res.data.data);
      //   console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  //make onChange for select option
  const handleChange = (e) => {
    setKelasid(e.target.value);
  };

  const updateSiswa = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nis", nis);
    data.append("nama", nama);
    data.append("image", image);
    data.append("quote", quotes);
    data.append("kelas_id", kelasid);
    try {
      const res = await axios.put(`/siswa/ubah/${siswa_id}`, data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      if (res.data.error === true) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${res.data.message}`,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Good Job!",
          text: `${res.data.message}`,
        });
        history.push(`/admin/siswa/kelas/`);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getKelas();
    getDataById();
  }, [siswa_id]);

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Edit Siswa</Card.Title>
            <hr />
            <Form onSubmit={updateSiswa}>
              <Card.Text as="div">
                <Row>
                  <Col md={8}>
                    <Form.Group className="mb-3">
                      <Form.Label>NIS</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="NIS"
                        value={nis}
                        onChange={(e) => setNis(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Nama</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Quote</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Quotes"
                        value={quotes}
                        onChange={(e) => setQuotes(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Kelas</Form.Label>
                      <Form.Select name="kelasid" onChange={handleChange}>
                        <option value="">=== Pilih Kelas ===</option>
                        {kelas.map((kelasid, index) => (
                          <option key={index} value={kelasid.kelas_id}>
                            {kelasid.kelas_nama}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Gambar</Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={loadGambar}
                      />
                    </Form.Group>
                    {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        width={200}
                        height={245}
                        style={{
                          marginLeft: "20px",
                          border: "1px solid black",
                        }}
                      />
                    ) : ( 
                      <img
                        src={"http://localhost:8000/public/images/ak/ak3/" + image}
                        alt="preview"
                        width={190}
                        height={245}
                        style={{
                          marginLeft: "20px",
                          border: "1px solid black",
                        }}
                      />
                    )}
                  </Col>
                </Row>
              </Card.Text>
              <Button variant="primary" type="submit">
                Edit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default EditSiswa;
