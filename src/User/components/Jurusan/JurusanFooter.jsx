import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <div>
        {" "}
        <div className="py-10 bg-gray-600">
          <Container>
            <div className="">
              <h3 className="font-semibold">SMKN 2 Kota Bekasi</h3>
            </div>
            <div className="py-2 md:flex justify-between">
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
                <div className="pt-2 flex">
                  <a href="https://twitter.com/smkn2kotabekasi">
                    <div className="bg-green-700 text-white text-2xl py-1 px-2 rounded-md hover:bg-green-900">
                      <FontAwesomeIcon className="" icon={faTwitter} />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/smkn2kotabekasi">
                    <div className="ml-4 bg-green-700 text-white text-2xl py-1 px-2 rounded-md hover:bg-green-900">
                      <FontAwesomeIcon className="" icon={faFacebook} />
                    </div>
                  </a>
                  <a href="https://www.instagram.com/smkn2.kotabks/">
                    <div className="ml-4 bg-green-700 text-white text-2xl py-1 px-[10px] rounded-md hover:bg-green-900">
                      <FontAwesomeIcon className="" icon={faInstagram} />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCZwg40VejkUACpE0ClIkrdg">
                    <div className="ml-4 bg-green-700 text-white text-2xl py-1 px-2 rounded-md hover:bg-green-900">
                      <FontAwesomeIcon className="" icon={faYoutube} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
