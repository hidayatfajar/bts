import React from 'react'
import { Link } from "react-router-dom";

import bg404 from "../../../assets/bg404.png";
import img404 from "../../../assets/404.png";

import NavBar from '../NavBar/NavBar';

const NotFound = () => {
  return (
    <>
    <div className='bg-bts'>
        <NavBar/>
    <img
      src={bg404}
      alt=""
      className="-mt-[58px] absolute object-cover w-full h-full mini:hidden mobile:block laptop:block"
    />
    <div className="content container mini:mt-0 mobile:mt-10 laptop:mt-28 flex flex-col laptop:flex-row gap-y-9 justify-between">
      <div className="text-content z-[1] ">
        <h2 className="font-extrabold">Ooops.</h2>
        <h2 className="font-normal">Relax, Take it easy.</h2>
        <h2 className="font-normal">Refresh your page!</h2>
        <Link to="/" className="no-underline text-white">
          <button className="hidden laptop:block bg-sky-600 hover:bg-sky-800 mt-9 py-2 px-12 text-2xl font-extrabold rounded-full cursor-pointer">
            GO BACK HOME
          </button>
        </Link>
      </div>
      <img
        src={img404}
        alt=""
        className="w-full laptop:w-[530px] z-[1]"
      />
      <div className="z-[1]">
        <Link to="/" className="no-underline text-white">
          <button className="block laptop:hidden bg-sky-600 hover:bg-sky-800 mx-auto py-2 px-12 text-2xl font-extrabold rounded-full cursor-pointer">
            GO BACK HOME
          </button>
        </Link>
      </div>
    </div>
    </div>
  </>
  );
}

export default NotFound;