import React from "react";

import logoM from "../assets/LogoM.png";
import logo2 from "../assets/logo2.svg";

export const Login = () => {
  return (
    <>
      <div className="w-[90%] h-[auto] mt-16 bg-[#303C3A] p-6 mx-auto rounded-lg mini:mt-4 mobile:mt-16 tablet:w-[60%] laptop:w-[30%] laptop:mt-11">
        <div className="text-white text-center flex flex-col justify-center items-center">
          <img src={logoM} alt="" className="w-20 pt-4" />
          {/* ------------------- */}
          <div className="pt-10 pb-3 ">
            <h2 className="text-xl font-semibold">Masuk Sebagai Admin</h2>
            <p className="text-sm font-medium leading-none">
              Masukkan email dan password anda
            </p>
          </div>
          {/* ------------------- */}
          <div className="form-group mb-3 w-full ">
            <label className="block font-semibold">
              <p className="block text-md text-slate-400 text-left whitespace-nowrap mb-2">
                Email
              </p>
              <input
                className="form-control font-body placeholder:text-gray-100 placeholder:text-sm placeholder:font-semibold"
                type="text"
                placeholder="Email address"
              />
            </label>
          </div>
          <div className="form-group mb-3 w-full ">
            <label className="block font-semibold">
              <p className="block text-md text-slate-400 text-left whitespace-nowrap mb-2">
                Password
              </p>
              <input
                className="form-control font-body placeholder:text-gray-100 placeholder:text-sm placeholder:font-semibold "
                type="password"
                placeholder="Password"
              />
            </label>
          </div>
          <div className="w-full pt-6">
            <button className="w-full h-10 bg-blue-600 hover:bg-blue-700 rounded">
              Masuk
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          src={logo2}
          alt=""
          className="hidden pt-16 mx-auto mobile:block tablet:block laptop:pt-12 laptop:block"
        />
      </div>
    </>
  );
};
