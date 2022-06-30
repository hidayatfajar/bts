import React from "react";
import { Carousel, Spinner } from "react-bootstrap";
import "../RPL.css";
import Foto from "../../assets/FotoKelas.jpg";

export default function KelasFotoSlide(props) {
  const gambar = props.props.gambar;
  const imageForSlider = [];
  gambar.map((item) => {
    if (item.gambar_jenis === "wajib") {
      imageForSlider.push(item);
    }
  });
  console.log(imageForSlider);

  return props.props.loading ? null : (
    <Carousel className="z-0">
      {imageForSlider.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={
              "http://localhost:8000/public/images/" +
              item.gambar_nama
            }
            alt={item.gambar_nama}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

{
  /* {gambar.map((item, index) => {
      return item.gambar_jenis == "wajib" ? (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={"http://localhost:8000/public/images/ak/ak1/" + item.gambar_nama}
            alt={item.gambar_nama} />
        </Carousel.Item>
      ) : null;
    })} */
}
