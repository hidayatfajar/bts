import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../RPL.css";

export default function KelasFotoFooter(props) {
  const gambar = props.gambar;
  return (
    <Container>
      <Row>
        {gambar.map((item, index) => {
          return item.gambar_jenis == "bebas" ? (
            <Col md={6} xs={12} className="col" key={index}>
              <Image
                src={
                  "http://localhost:8000/public/images/ak/ak1/" +
                  item.gambar_nama
                }
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          ) : null;
        })}
      </Row>
    </Container>
  );
}
