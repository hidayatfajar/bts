import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../RPL.css";

export default function KelasFotoFooter(props) {
  const gambar = props.gambar;
  const imageForFooter = [];
  gambar.map((item) => {
    if (item.gambar_jenis === "bebas") {
      imageForFooter.push(item);
    }
  });
  console.log(imageForFooter);
  return (
    <Container>
      <div className="image-galery">
        {imageForFooter.map((item, index) => {
          return item.gambar_jenis == "bebas" ? (
            <div className="image-box" key={index}>
              <Image
                src={"http://localhost:8000/public/images/" + item.gambar_nama}
                // style={{ width: "100%", height: "100%" }}
              />
            </div>
          ) : null;
        })}
      </div>
    </Container>
  );
}
