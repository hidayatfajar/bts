import React, { useState } from "react";
import { Card, Row, Col, Container, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../RPL.css";

export default function GuruCardList(props) {
  const [modal, setModal] = useState(false);
  const [guruIndex, setGuruIndex] = useState(1);
  const guru = props.guru;
  console.log(props.guru);

  const filteredData = guru.filter((el) => {
    if (props.search === "") {
      return el;
    } else {
      return el.guru_nama.toLowerCase().includes(props.search);
    }
  });

  const onModal = (e, guru_id) => {
    e.preventDefault();
    setModal(!modal);
    setGuruIndex(guru_id);
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
                  disabled={guruIndex === 0 ? true : false}
                  onClick={(e) => {
                    setGuruIndex(guruIndex - 1);
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
                {filteredData[guruIndex].guru_gambar ? (
                  <img
                    src={
                      "http://localhost:8000/public/images/" +
                      filteredData[guruIndex].guru_gambar
                    }
                    alt={filteredData[guruIndex].guru_nama}
                  />
                ) : (
                  <Spinner animation="border" />
                )}
              </div>
              <div className="next mt-60">
                <button
                  className="bg-none md:bg-slate-600 sm:p-0 md:p-3 sm:w-auto md:w-14 sm:h-auto md:h-14 rounded-full"
                  disabled={
                    guruIndex === filteredData.length + 1 ? true : false
                  }
                  onClick={(e) => {
                    setGuruIndex(guruIndex + 1);
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
        <div className="tablet:grid laptop:grid tablet:grid-cols-2 laptop:grid-cols-4 space-y-4 md:space-y-0 gap-4 mx-auto min-h-screen">
          {filteredData.map((guru, index) => (
            <div className="w-full pt-7" key={guru.guru_id}>
              <Card className="w-fit mobile:h-auto laptop:h-96 mx-auto my-0 p-1 rounded-xl">
                <img
                  className="mobile:w-auto laptop:w-[280px] mobile:h-[356px] laptop:h-[270px] object-cover"
                  variant="top"
                  src={
                    "http://localhost:8000/public/images/" + guru.guru_gambar
                  }
                  onClick={(e) => onModal(e, index)}
                  loading="lazy"
                />
                <Card.Body className="text-black">
                  {/* <h6 className="text-black font-bold text-lg tablet:text-base laptop:text-base tracking-wide">
                    Nama
                  </h6> */}
                  <p className="text-black text-lg tablet:text-base laptop:text-base  font-bold tracking-wide ">
                    {guru.guru_nama}
                  </p>
                  {/* <h6 className="text-black font-bold text-lg tablet:text-base laptop:text-base tracking-wide pt-2">
                    Jabatan
                  </h6> */}
                  <p className="text-black text-lg tablet:text-base laptop:text-base  font-light tracking-wide -mt-2">
                    {guru.guru_jabatan}
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
