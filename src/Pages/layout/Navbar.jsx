import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" my-5 flex justify-between items-center px-3 sm:px-6">
      <div className="font-Source Sans Pro  ">
        <div className="md:w-96 sm:w-60 w-36 flex gap-2 rounded-lg border bg-white sm:p-2 py-1 px-2 items-center  ">
          <IoSearchOutline className="sm:text-xl text-sm font-semibold"/>
          <input
            type="text"
            name="search"
            id="serarch"
            className="w-full text-sm sm:text-xl rounded border-white outline-none "
            placeholder="Search here..."
          />
        </div>
      </div>

      <div className="flex sm:gap-5 gap-0.5 items-center ">
        <div className=" bg-blue-200 sm:p-3 p-1.5 rounded-full">
          <IoMdNotificationsOutline className="sm:text-2xl text-sm text-blue-800 " />
        </div>
        <p className="sm:text-5xl text-2xl font-thin pb-2.5">|</p>
        <p className="sm:text-2xl text-sm bg-blue-200 sm:px-4 sm:py-2 px-2.5 py-1 text-blue-800 font-semibold rounded-full">
          V
        </p>
        <div>
          <p className="sm:text-xl text-sm font-semibold font-Exo">
            Profile Name
          </p>
          <p className="sm:text-sm text-xs text-gray-400 font-Source Sans Pro">
            Profile Role
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
