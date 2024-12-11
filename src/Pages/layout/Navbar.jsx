import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" my-5 flex justify-between items-center px-6">
      <div className="font-Source Sans Pro  ">
        <div className="md:w-96 sm:w-60 w-36 flex gap-2 rounded-lg bg-white p-2 items-center  ">
          <IoSearchOutline className="text-xl font-semibold"/>
          <input
            type="text"
            name="search"
            id="serarch"
            className="w-full outline-none"
            placeholder="Search here..."
          />
        </div>
      </div>

      <div className="flex gap-5 items-center ">
        <div className=" bg-blue-200 px-3 py-3 rounded-full">
          <IoMdNotificationsOutline className="text-2xl text-blue-800 " />
        </div>
        <p className="text-5xl font-thin pb-3">|</p>
        <p className="text-2xl bg-blue-200 px-4 py-1.5 text-blue-800 font-semibold rounded-full">
          V
        </p>
        <div>
          <p className="text-xl font-semibold font-Exo">Profile Name</p>
          <p className="text-sm text-gray-400 font-Source Sans Pro">
            Profile Role
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
