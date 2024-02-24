import React from "react";
import logo from "../images/logo.jpeg";

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
      <div>
        <select
          id="sort"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Sort</option>
          <option value="ASC">ASC</option>
          <option value="DESC">DESC</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
