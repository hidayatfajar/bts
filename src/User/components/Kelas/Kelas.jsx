import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import "../RPL.css";
import axios from "axios";
import KelasFotoSlide from "./KelasFotoSlide";
import KelasFotoFooter from "./KelasFotoFooter";
import KelasCardListing from "./KelasCardListing";
import { useParams } from "react-router-dom";
import {
  Form,
  FloatingLabel,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";

export default function RPL1() {
  const [gambar, setGambar] = useState([]);
  const [siswa, setSiswa] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const routeParams = useParams();
  const { kelasId } = routeParams;
  const sort = (a, b) => {
    if (a.siswa_nama < b.siswa_nama) {
      return -1;
    }
    if (a.siswa_nama > b.siswa_nama) {
      return 1;
    }
  };

  const getData = async () => {
    const gambar = await axios.get(
      `http://localhost:8000/kelas/gambar/${kelasId}/`
    );
    setGambar(gambar.data.data);
    const siswa = await axios.get(
      `http://localhost:8000/siswa/kelas/${kelasId}/`
    );
    setSiswa(siswa.data.data.sort(sort));
  };
  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [null]);

  return (
    <div>
      <div className="bg-bts min-h-screen">
        <NavBarMagic />
        <NavBar />
        {loading ? (
          <>
            <div className="container">
              {/* search */}
              <div class="w-[95%] h-fit backdrop-blur-sm bg-white/30 p-3 mt-4 mb-8 mx-auto rounded-lg">
                <div class="w-32 h-5 animate-pulse bg-slate-700 rounded-full"></div>
              </div>
              {/* card */}
              <div className="tablet:grid laptop:grid tablet:grid-cols-2 laptop:grid-cols-4 space-y-4 md:space-y-0 gap-4 mx-auto min-h-screen">
                <div className="pt-7">
                  <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div class="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div class="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div class="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div class="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div class="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div class="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div class="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div class="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div class="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="pt-7">
                  <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit mini:h-[440px] mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                    <div class="animate-pulse w-full laptop:w-[250px] mini:h-72 mobile:h-[356px] laptop:h-[250px]  bg-slate-700 "></div>
                    <div className="container animate-pulse">
                      <div class="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                      <br />
                      <div class="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : siswa.length !== 0 ? (
          <>
            {<KelasFotoSlide props={{ gambar, loading }} />}
            <br />
            <br />
            <Container>
              <FloatingLabel
                style={{ color: "black" }}
                controlId="floatingInput"
                className="mb-3"
              >
                <InputGroup className="mb-3">
                  <Form.Control
                    className="font-body"
                    size="lg"
                    type="email"
                    placeholder="Search here..."
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />
                  {/* <InputGroup.Text>Q</InputGroup.Text> */}
                </InputGroup>
              </FloatingLabel>
            </Container>
            {<KelasCardListing siswa={siswa} search={search} />}
            <br />
            {<KelasFotoFooter gambar={gambar} />}
          </>
        ) : (
          <div className="text-center">
            <h1>Gagal mengambil data siswa</h1>
          </div>
        )}
        <br />
        <br />
      </div>
    </div>
  );
}

// {loading ? null : (

// )}
