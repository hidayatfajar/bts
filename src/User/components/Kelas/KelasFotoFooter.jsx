import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../RPL.css";

export default function KelasFotoFooter(props) {
  const gambar = props.gambar;
  const imageForFooter = [];
  gambar.map((item) => {
    if (item.gambar_jenis === "bebas") {
      imageForFooter.push(item);
    }})
    console.log(imageForFooter);
    return (
    <Container>
      <Row>
        {imageForFooter.map((item, index) => {
          return item.gambar_jenis == "bebas" ? (
            <Col md={6} xs={12} className="col" key={index}>
              <Image
                src={
                  "http://localhost:8000/public/images/" +
                  item.gambar_nama
                }
                // style={{ width: "100%", height: "100%" }}
              />
            </Col>
          ) : null;
        })}
      </Row>
    </Container>
  );
}
