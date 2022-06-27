// import React, { Component } from "react";

// import img1 from "./assets/img-1.jpg";
// import img2 from "./assets/img-2.jpg";
// import img3 from "./assets/img-3.jpg";
// import img4 from "./assets/img-4.jpg";
// import img5 from "./assets/img-5.jpg";
// import img6 from "./assets/img-6.jpg";
// import img7 from "./assets/img-7.jpg";
// import img8 from "./assets/img-8.jpg";
// import img9 from "./assets/img-9.jpg";
// import img10 from "./assets/img-10.jpg";
// import img11 from "./assets/img-11.jpg";
// import img12 from "./assets/img-12.jpg";

// import "../RPL.css";
// export default class WisudaGalery extends Component {
//   render() {
//     return (
//       <>
//         <div className="image-galery">
//           <div className="image-box">
//             <img src={img1} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img2} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img3} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img4} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img5} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img6} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img7} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img8} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img9} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img10} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img11} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img12} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img8} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img1} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img3} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img7} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img6} alt="" />
//           </div>
//           <div className="image-box">
//             <img src={img2} alt="" />
//           </div>
//         </div>
//       </>
//     );
//   }
// }

import React from "react";
import img1 from "../../assets/Galery/img-1.jpg";
import img2 from "../../assets/Galery/img-2.jpg";
import img3 from "../../assets/Galery/img-3.jpg";
import img4 from "../../assets/Galery/img-4.jpg";
import img5 from "../../assets/Galery/img-5.jpg";
import img6 from "../../assets/Galery/img-6.jpg";
import img7 from "../../assets/Galery/img-7.jpg";
import img8 from "../../assets/Galery/img-8.jpg";
import img9 from "../../assets/Galery/img-9.jpg";
import img10 from "../../assets/Galery/img-10.jpg";
import img11 from "../../assets/Galery/img-11.jpg";
import img12 from "../../assets/Galery/img-12.jpg";

import "../RPL.css";

export default function WisudaGalery() {
  const data = [
    {
      id: 1,
      image: img1,
    },
    {
      id: 2,
      image: img2,
    },
    {
      id: 3,
      image: img3,
    },
    {
      id: 4,
      image: img4,
    },
    {
      id: 5,
      image: img5,
    },
    {
      id: 6,
      image: img6,
    },
    {
      id: 7,
      image: img7,
    },
    {
      id: 8,
      image: img8,
    },
    {
      id: 9,
      image: img9,
    },
    {
      id: 10,
      image: img10,
    },
    {
      id: 11,
      image: img11,
    },
    {
      id: 12,
      image: img12,
    },
  ];
  console.log(data);
  return (
    <>
      <div>
        <div className="image-galery">
          {data.map((item, index) => (
            //{" "}
            <div key={index} className="image-box">
              <img src={item.image} alt="" />{" "}
            </div>
            //{" "}
          ))}
        </div>
      </div>
    </>
  );
}
