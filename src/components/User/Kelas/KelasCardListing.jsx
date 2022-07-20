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
import axios from 'axios'

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

  async function download(e, siswa_id) {
    e.preventDefault();
    await axios({
      url: `http://localhost:8000/public/images/${siswa[siswa_id].siswa_gambar}`,
      // url: `https://source.unsplash.com/random/800x600`,
      method: 'GET',
      responseType: 'blob',
    }).then(res => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', siswa[siswa_id].siswa_gambar);
      document.body.appendChild(link);
      link.click();
    }
    ).catch(err => {
      console.log(err)
    })
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
                      "http://localhost:8000/public/images/" +
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
                  disabled={siswaIndex === filteredData.length - 1 ? true : false}
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
                      "http://localhost:8000/public/images/" +
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
                      onClick={(e) => download(e, siswa.siswa_id)}
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
