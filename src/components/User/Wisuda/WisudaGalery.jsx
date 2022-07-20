import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "react-bootstrap/Spinner";

const WisudaGalery = (props) => {
  const [modal, setModal] = useState(false);
  const [wisudaIndex, setWisudaIndex] = useState(1);
  const image = props.image;
  console.log(image)
  console.log(wisudaIndex)

  const onModal = (e, wisudaId) => {
    e.preventDefault();
    setWisudaIndex(wisudaId);
    setModal(!modal);
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
                  disabled={wisudaIndex === 0 ? true : false}
                  onClick={(e) => {
                    setWisudaIndex(wisudaIndex - 1);
                  }}
                >
                  <FontAwesomeIcon
                    className="text-3xl md:text-base"
                    icon={faChevronLeft}
                  />
                </button>
              </div>
              {/* <!-- Modal content --> */}
              <div className="modal-content laptop:mx-3 -mx-1  ">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="close"
                  onClick={onModal}
                />
                {image[wisudaIndex].wisuda_gambar ? (
                  <img
                    src={
                      "http://localhost:8000/public/images/" +
                      image[wisudaIndex].wisuda_gambar
                    }
                    alt={image[wisudaIndex].wisuda_nama}
                  />
                ) : (
                  <Spinner animation="border" />
                )}
              </div>
              <div className="next mt-60">
                <button
                  className="bg-none md:bg-slate-600 sm:p-0 md:p-3 sm:w-auto md:w-14 sm:h-auto md:h-14 rounded-full"
                  onClick={(e) => {
                    setWisudaIndex(wisudaIndex + 1);
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
      <div className="image-galery">
        {image.map((item, index) => (
          //{" "}
          <div
            key={index}
            className="image-box"
            onClick={(e) => onModal(e, index)}
          >
            <img
              src={
                `http://localhost:8000/public/images/Moment-Wisuda/` +
                item.wisuda_gambar
              }
              alt="image"
            />{" "}
          </div>
          //{" "}
        ))}
      </div>
    </div>
  );
};

export default WisudaGalery;
