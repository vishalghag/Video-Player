import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import { videoList } from "../constant/data";

const Header = ({ searchFilterContentFn, showMiniMovie }) => {
  return (
    <div className=" flex flex-row justify-center items-center">
      <div className=" flex bg-white items-center m-[16px] p-2 rounded-lg">
        <img
          src={logo}
          alt="logo"
          className=" w-[40px] h-[40px] object-cover"
        />
        <span className=" font-bold text-[#007FFF] text-[17px]">
          Dev Video Player
        </span>
      </div>
      <div className=" w-[400px] rounded-lg h-[40px]">
        <input
          placeholder="Search"
          type="text"
          className="w-[300px] h-[40px] pl-4 focus:none rounded-lg"
          onChange={searchFilterContentFn}
          onClick={showMiniMovie}
        />
      </div>
    </div>
  );
};

export default Header;
