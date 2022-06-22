import React from "react";
import { Carousel, Spinner } from "react-bootstrap";
import "../RPL.css";
import Foto from "../../assets/FotoKelas.jpg";

export default function KelasFotoSlide(props) {
  const gambar = props.props.gambar;
  return props.props.loading ? (
   null
  ) : (
    <Carousel className="z-0">
      <Carousel.Item>
        <img className="d-block w-100" src={Foto} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Foto} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Foto} alt="Third slide" />
      </Carousel.Item>
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
