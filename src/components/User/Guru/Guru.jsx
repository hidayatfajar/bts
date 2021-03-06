import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import NavBar from "../../../LandingPage/NavBar/NavBar";
import NavBarMagic from "../../../LandingPage/NavBarMagic/NavBarMagic";
import GuruCardList from "./GuruCardList";
import GuruFooter from "./GuruFooter";
import GuruHeader from "./GuruHeader";
import "../RPL.css";
import {
  Form,
  FloatingLabel,
  Container,
  InputGroup,
  Spinner,
} from "react-bootstrap";

export default function Guru() {
  const [guru, setGuru] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const sort = (a, b) => {
    if (a.guru_nama < b.guru_nama) {
      return -1;
    }
    if (a.guru_nama > b.guru_nama) {
      return 1;
    }
  };

  const getData = async () => {
    const guru = await axios.get("http://localhost:8000/guru/");
    console.log(guru);
    setGuru(guru.data.data.sort(sort));
  };
  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [null]);
  return (
    <>
      <div className="bg-bts min-h-screen">
        <NavBarMagic />
        <NavBar />
        <br />
        {loading ? (
           <>
           <div className="container animate-pulse">
             <div class="w-96 h-10 bg-slate-700 rounded-full col-span-2"></div>
             <div class="w-80 h-10 bg-slate-700 rounded-full mt-6 col-span-1"></div>
           </div>

           <br />
           <div className="container">
             <div class="backdrop-blur-sm bg-white/30 shadow rounded-md p-4 w-full mx-auto">
               <div class="animate-pulse flex space-x-4">
                 <div class="rounded-full bg-slate-700 w-60 h-60 pt-3 mx-auto laptop:pt-0 laptop:w-52 laptop:h-52"></div>
                 <div class="flex-1 space-y-6 py-1">
                   <div class="space-y-3 pl-0 pt-3 text-center laptop:pt-0 laptop:pl-9 tablet:pl-10">
                     <div class="w-128 h-8 bg-slate-700 mt-8 rounded-full"></div>
                     <br />
                     <div class="w-[22rem] h-4 bg-slate-700 rounded-full"></div>
                     <div class="w-[20rem] h-4 bg-slate-700 rounded-full"></div>
                   </div>
                 </div>
               </div>
             </div>
             <div class="w-[98%] h-fit backdrop-blur-sm bg-white/30 p-3 mt-4 mb-3 mx-auto rounded-lg">
               <div class="w-32 h-5 animate-pulse bg-slate-700 rounded-full"></div>
             </div>
             <div className="tablet:grid laptop:grid tablet:grid-cols-2 laptop:grid-cols-4 space-y-4 md:space-y-0 gap-4 mx-auto min-h-screen">
               <div className="pt-7">
                 <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit  mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                   <div class="animate-pulse mobile:w-full laptop:w-[250px] mobile:h-[356px] laptop:h-[250px] object-cover bg-slate-700 "></div>
                   <div className="container animate-pulse">
                     <div class="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                     <br />
                     <div class="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                   </div>
                 </div>
               </div>
               <div className="pt-7">
                 <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit  mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                   <div class="animate-pulse mobile:w-full laptop:w-[250px] mobile:h-[356px] laptop:h-[250px] object-cover bg-slate-700 "></div>
                   <div className="container animate-pulse">
                     <div class="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                     <br />
                     <div class="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                   </div>
                 </div>
               </div>
               <div className="pt-7">
                 <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit  mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                   <div class="animate-pulse mobile:w-full laptop:w-[250px] mobile:h-[356px] laptop:h-[250px] object-cover bg-slate-700 "></div>
                   <div className="container animate-pulse">
                     <div class="w-52 h-5 bg-slate-700 mt-8 rounded-full"></div>
                     <br />
                     <div class="w-40 h-4 bg-slate-700 -mt-1 rounded-full"></div>
                   </div>
                 </div>
               </div>
               <div className="pt-7">
                 <div class="backdrop-blur-sm bg-white/30 shadow mobile:w-full laptop:w-fit  mobile:h-[500px] laptop:h-[440px] mx-auto my-0 p-1 mobile:mt-7 laptop:mt-0 rounded-md">
                   <div class="animate-pulse mobile:w-full laptop:w-[250px] mobile:h-[356px] laptop:h-[250px] object-cover bg-slate-700 "></div>
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
        ) : guru.length !== 0 ? (
          <>
            <Container>
              <div className="">
                <h1 className="text-title">
                  Foto Seluruh <br />
                  <span className="gradient-text">Guru & Staf</span>{" "}
                </h1>
              </div>
            </Container>
            <br />
            <Container>
              <GuruHeader loading={loading} />
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
                    <InputGroup.Text>Q</InputGroup.Text>
                  </InputGroup>
                </FloatingLabel>
              </Container>
              <GuruCardList guru={guru} search={search} loading={loading} />
            </Container>
            <br />
            <br />
            <GuruFooter />
          </>
        ) : (
          <div className="text-center">
            <h1>Gagal mengambil data guru</h1>
          </div>
        )}
      </div>
    </>
  );
}
