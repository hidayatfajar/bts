import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     center: {
  //       lat: -6.355731503098946,
  //       lng: 106.99205144041609,
  //     },
  //   };
  // }
  render() {
    return (
      <div>
        {" "}
        <div className="py-10 bg-gray-600">
          <Container>
            <div className="py-2 laptop:grid grid-cols-2 items-center justify-center">
              {/* ---- AlAMAT ------ */}
              <div className="w-full">
                <h3 className="font-semibold">SMKN 2 Kota Bekasi</h3>
                <p className="max-w-sm pt-1 leading-7 tracking-wide">
                  Jl. Lap Bola Rawa Butun Ciketing Udik Bantargebang Kota Bekasi
                  17153
                  <br />
                  <b>Phone:</b> (021) 82597121
                  <br />
                  <b>Email:</b> smkn2kotabekasi@gmail.com
                </p>
                {/* <p className="pt-2 tracking-wide">
                  &copy; Copyright by 12 RPL 3 Team
                </p> */}
                <div className="pt-2 flex gap-x-4">
                  <a href="https://twitter.com/smkn2kotabekasi">
                    <div className="bg-gray-800 text-white text-2xl py-1 px-2 rounded-md hover:bg-gray-700">
                      <FontAwesomeIcon className="" icon={faTwitter} />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/smkn2kotabekasi">
                    <div className=" bg-gray-800 text-white text-2xl py-1 px-2 rounded-md hover:bg-gray-700">
                      <FontAwesomeIcon className="" icon={faFacebook} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/smkn2.kotabks/">
                    <div className=" bg-gray-800 text-white text-2xl py-1 px-[10px] rounded-md hover:bg-gray-700">
                      <FontAwesomeIcon className="" icon={faInstagram} />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCZwg40VejkUACpE0ClIkrdg">
                    <div className=" bg-gray-800 text-white text-2xl py-1 px-2 rounded-md hover:bg-gray-700">
                      <FontAwesomeIcon className="" icon={faYoutube} />
                    </div>
                  </a>
                </div>
              </div>
              {/* ----MAPS----- */}
              {/* Hah? ga kedengeran */}
              <div>
                <h3 className="font-semibold laptop:text-center mobile:text-left mobile:ml-0 laptop:mr-10 laptop:mb-5 mobile:mb-5 mini:mb-5 laptop:mt-0 mobile:mt-10 mini:mt-10">
                  Find us on Map
                </h3>
                <div className="flex flex-col items-end">
                  <div className="relative text-right h-52 laptop:w-[400px] mobile:w-full">
                    {/* Tnya  */}
                    <div className="overflow-hidden bg-none h-52 laptop:w-[400px] mobile:w-full">
                      <iframe
                        className="laptop:w-[400px] mobile:w-full h-52"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=SMKN%202%20Kota%20Bekasi&t=&z=17&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                      ></iframe>
                      <a href="https://fmovies-online.net"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDaxLGfa3TB2wETwtUqNqisAcEnkGamW7s",
// })(Footer);

export default Footer;
