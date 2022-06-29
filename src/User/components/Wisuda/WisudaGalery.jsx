import React, { useState, useEffect } from "react";
import axios from "axios";

const WisudaGalery = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(`/user/wisuda`);
    try {
      setData(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }
  , []);

  return (
    <div>
      <div className="image-galery">
        {data.map((item, index) => (
          //{" "}
          <div key={index} className="image-box">
            <img src={`http://localhost:8000/public/images/Moment-Wisuda/` + item.wisuda_gambar} alt="image" />{" "}
          </div>
          //{" "}
        ))}
      </div>
    </div>
  );
};

export default WisudaGalery;
