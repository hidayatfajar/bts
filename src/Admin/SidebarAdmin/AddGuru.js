import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";
const AddGuru = () => {
  const [guru, setGuru] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const history = useHistory();

  const loadGambar = (e) => {
    const img = e.target.files[0];
    setImage(img);
    setPreview(URL.createObjectURL(img));
    console.log(guru);
  };

  const addGuru = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama", guru);
    data.append("jabatan", jabatan);
    data.append("image", image);
    try {
      const res = await axios.post("/guru/tambah", data, {
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
        history.push("/admin/guru");
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Card.Title>Tambah Guru</Card.Title>
            <hr />
            <Form onSubmit={addGuru}>
              <Card.Text as="div">
                <Row>
                  <Col md={8}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nama Guru</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nama Guru"
                        onChange={(e) => setGuru(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Jabatan</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nama"
                        onChange={(e) => setJabatan(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Gambar</Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={loadGambar}
                      />
                    </Form.Group>
                        <Button variant="outline-success" type="submit">
                            Tambah
                          </Button>&ensp;
                          <Link to={`/admin/guru/`} className="btn btn-outline-dark">
              Batal
            </Link>
                  </Col>
                  <Col>
                  <Form.Group className="mb-2">
                      Preview :
                      </Form.Group>
                    {preview ? (
                      <img
                        src={preview}
                        alt="preview"
                        width={170}
                        height={250}
                        style={{
                          marginLeft: "20px",
                          border: "2px solid black",
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
              </Card.Text>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AddGuru;
