import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../../assets/Logo.png";

export default function GuruFooter() {
  return (
    <div className="pt-10 bg-gray-600">
      <Container>
        <div className="">
          <Image className="w-48" src={logo} />
        </div>
        <div className="py-2 md:flex justify-between">
          <div className="w-full md:w-5/12">
            <p className="tracking-wide">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aspernatur, tempore tenetur. Atque velit aliquid quibusdam, saepe
              et nihil beatae necessitatibus, enim eum impedit inventore ut,
              eveniet temporibus debitis possimus quasi!
            </p>
            <p className="pt-2 tracking-wide">
              &copy; Copyright by 12 RPL 3 Team
            </p>
          </div>
          <div className="hidden md:block w-6/12">
            <div className="flex justify-between">
              <h6 className="menu-footer">Home</h6>
              <h6 className="menu-footer">Guru</h6>
              <h6 className="menu-footer">TEI</h6>
              <h6 className="menu-footer">TSM</h6>
              <h6 className="menu-footer">TKJ</h6>
              <h6 className="menu-footer">AK</h6>
              <h6 className="menu-footer">RPL</h6>
              <h6 className="menu-footer">TET</h6>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
