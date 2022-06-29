import React, { useState } from "react";
import { Card, Row, Col, Container, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "../RPL.css";

export default function GuruCardList(props) {
  const [modal, setModal] = useState(false);
  const [siswaIndex, setSiswaIndex] = useState(1);
  const siswa = props.siswa;
  console.log(props.input);

  const filteredData = siswa.filter((el) => {
    if (props.search === "") {
      return el;
    } else {
      return el.siswa_nama.toLowerCase().includes(props.search);
    }
  });

  const onModal = (e, siswa_id) => {
    e.preventDefault();
    setModal(!modal);
    setSiswaIndex(siswa_id);
  };

  return (
    <>
      {modal === true ? (
        <div className="">
          <div id="myModal" className="modal">
            <div className="flex justify-center">
              <div className="back mt-60 ">
                <button
                  className="bg-none md:bg-slate-600 sm:p-0 md:p-3 sm:w-auto md:w-14 sm:h-auto md:h-14 rounded-full"
                  disabled={siswaIndex === 0 ? true : false}
                  onClick={(e) => {
                    setSiswaIndex(siswaIndex - 1);
                  }}
                >
                  <FontAwesomeIcon
                    className="text-3xl md:text-base"
                    icon={faChevronLeft}
                  />
                </button>
              </div>
              {/* <!-- Modal content --> */}
              <div className="modal-content md:mx-3 -mx-1  ">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="close"
                  onClick={onModal}
                />
                {siswa[siswaIndex].siswa_gambar ? (
                  <img
                    src={
                      "http://localhost:8000/public/images/ak/ak1/" +
                      siswa[siswaIndex].siswa_gambar
                    }
                    alt={siswa[siswaIndex].siswa_nama}
                  />
                ) : (
                  <Spinner animation="border" />
                )}
              </div>
              <div className="next mt-60">
                <button
                  className="bg-none md:bg-slate-600 sm:p-0 md:p-3 sm:w-auto md:w-14 sm:h-auto md:h-14 rounded-full"
                  onClick={(e) => {
                    setSiswaIndex(siswaIndex + 1);
                  }}
                >
                  <FontAwesomeIcon
                    className="text-3xl md:text-base"
                    icon={faChevronRight}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {props.loading ? (
        <center>
          <Spinner variant="success" animation="border" />
        </center>
      ) : (
        <div className="md:grid grid-cols-4 space-y-4 md:space-y-0 gap-4 mx-auto">
          {filteredData.map((siswa, index) => (
            <div className="w-full pt-7" key={siswa.siswa_id}>
              <Card className="xs:h-auto laptop:h-96 mx-auto my-0 p-1 rounded-xl">
                <LazyLoadImage
                  className="img-siswa"
                  variant="top"
                  src={
                    "http://localhost:8000/public/images/ak/ak1/" +
                    siswa.siswa_gambar
                  }
                  onClick={(e) => onModal(e, index)}
                  loading="lazy"
                />
                <Card.Body className="text-black">
                  {/* <h6 className="text-black font-bold text-lg tablet:text-base laptop:text-base tracking-wide">
                    Nama
                  </h6> */}
                  <p className="text-black text-lg tablet:text-base laptop:text-base  font-bold tracking-wide ">
                    {siswa.siswa_nama}
                  </p>
                  {/* <h6 className="text-black font-bold text-lg tablet:text-base laptop:text-base tracking-wide pt-2">
                    Jabatan
                  </h6> */}
                  <p className="text-black text-lg tablet:text-base laptop:text-base  font-light tracking-wide -mt-2">
                    Guru Produktif Akuntansi
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
