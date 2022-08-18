import React, { useState } from "react";
import { Card, Row, Col, Container, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faChevronLeft,
  faChevronRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import "../RPL.css";
import axios from "axios";
import { saveAs } from "file-saver";

export default function KelasCardListing(props) {
  const [modal, setModal] = useState(false);
  const [siswaIndex, setSiswaIndex] = useState(1);
  const siswa = props.siswa;

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

  async function download(e, siswa) {
    console.log(siswa);
    e.preventDefault();
    await axios({
      // url: `${process.env.REACT_APP_API_KEY}siswa/${siswa.siswa_id}`,
      url: "https://source.unsplash.com/1600x900/?beach",
      method: "GET",
    })
      .then((res) => {
        const dataURI = "data:image/jpeg;base64,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"
        var byteString = atob(dataURI.split(",")[1]);
        var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], { type: mimeString });
        saveAs(new Blob([blob]), "image.png");
        // const url = window.URL.createObjectURL(new Blob([res.data]));
        // const link = document.createElement('a');
        // link.href = url;
        // link.setAttribute('download', siswa.siswa_gambar);
        // document.body.appendChild(link);
        // link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
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
              <div className="modal-content mobile:w-[90%] laptop:w-[28%] laptop:mx-3 -mx-1  ">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="close"
                  onClick={onModal}
                />
                <FontAwesomeIcon
                  icon={faDownload}
                  className="absolute right-2 bottom-2 text-2xl"
                  onClick={onModal}
                />
                {filteredData[siswaIndex].siswa_gambar ? (
                  <img
                    src={
                      `${process.env.REACT_APP_API_KEY}public/images/` +
                      filteredData[siswaIndex].siswa_gambar
                    }
                    alt={filteredData[siswaIndex].siswa_nama}
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
                  disabled={
                    siswaIndex === filteredData.length - 1 ? true : false
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
      <div>
        <Container>
          <div className="tablet:grid laptop:grid tablet:grid-cols-2 laptop:grid-cols-4 space-y-4 md:space-y-0 gap-4 mx-auto min-h-screen">
            {filteredData.map((siswa, index) => (
              <div className="w-full pt-7" key={siswa.siswa_id}>
                <Card className="w-fit xs:h-auto md:h-custom mx-auto my-0 p-1 rounded-xl">
                  <img
                    className="mini:w-[356px] mobile:w-[356px] laptop:w-[300px] mini:h-72 mobile:h-[356px] laptop:h-[290px] object-cover object-top"
                    variant="top"
                    src={
                      `${process.env.REACT_APP_API_KEY}public/images/` +
                      siswa.siswa_gambar
                    }
                    onClick={(e) => onModal(e, index)}
                    loading="lazy"
                  />
                  <Card.Body>
                    <p className="text-black text-base font-medium tracking-wide -mt-1">
                      {siswa.siswa_nama}
                    </p>
                    <Card.Text as="div">
                      <footer className="text-gray-600 text-sm font-normal tracking-wide -mt-2">
                        <p className="text-sm font-normal italic">
                          "{siswa.siswa_quote}"
                        </p>
                      </footer>
                    </Card.Text>
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="absolute right-2 bottom-2 text-xl text-gray-700"
                      onClick={(e) => download(e, siswa)}
                    />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
