import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

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
            <div className="">
              <h3 className="font-semibold">SMKN 2 Kota Bekasi</h3>
            </div>
            <div className="py-2 grid grid-cols-2 items-center justify-center">
              <div className="w-full">
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
              {/* Map */}
              {/* <div className="max-w-xl contents">
                <Map
                  google={this.props.google}
                  zoom={15}
                  style={{ maxWidth: "500px", height: "auto", width: "auto" }}
                  defaultCenter={{
                    lat: -6.355731503098946,
                    lng: 106.99205144041609,
                  }}
                  initialCenter={{
                    lat: -6.355731503098946,
                    lng: 106.99205144041609,
                  }}
                  defaultZoom={20}
                >
                  <Marker
                    position={{
                      lat: -6.355731503098946,
                      lng: 106.99205144041609,
                    }}
                    onClick={this.onMarkerClick}
                    name={"Current Location"}
                  />
                </Map>
              </div> */}
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
