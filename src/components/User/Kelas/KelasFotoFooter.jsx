import React, { useState } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "../RPL.css";

export default function KelasFotoFooter(props) {
  const gambar = props.gambar;
  const imageForFooter = [];
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(1);
  gambar.map((item) => {
    if (item.gambar_jenis === "bebas") {
      imageForFooter.push(item);
    }
  });

  const onModal = (e, id) => {
    e.preventDefault();
    setModal(!modal);
    setIndex(id);
  };

  return (
    <div>
      {modal === true ? (
        <div className="">
          <div id="myModal" className="modal">
            <div className="flex justify-center">
              <div className="back mt-60 ">
                <button
                  className="bg-none md:bg-slate-600 sm:p-0 md:p-3 sm:w-auto md:w-14 sm:h-auto md:h-14 rounded-full"
                  disabled={index === 0 ? true : false}
                  onClick={(e) => {
                    setIndex(index - 1);
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
                {imageForFooter[index].gambar_nama ? (
                  <img
                    src={
                      "http://localhost:8000/public/images/" +
                      imageForFooter[index].gambar_nama
                    }
                    alt={imageForFooter[index].gambar_nama}
                  />
                ) : (
                  <Spinner animation="border" />
                )}
              </div>
              <div className="next mt-60">
                <button
                  className="bg-none md:bg-slate-600 sm:p-0 md:p-3 sm:w-auto md:w-14 sm:h-auto md:h-14 rounded-full"
                  onClick={(e) => {
                    setIndex(index + 1);
                  }}
                  disabled={
                    index === imageForFooter.length - 1 ? true : false
                  }
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
      <Container>
        <div className="image-galery">
          {imageForFooter.map((item, index) => {
            return item.gambar_jenis == "bebas" ? (
              <div className="image-box" key={index}>
                <Image
                  src={
                    "http://localhost:8000/public/images/" + item.gambar_nama
                  }
                  alt={item.siswa_nama}
                  onClick={(e) => {
                    onModal(e, index);
                  }
                  }
                  // style={{ width: "100%", height: "100%" }}
                />
              </div>
            ) : null;
          })}
        </div>
      </Container>
    </div>
  );
}
