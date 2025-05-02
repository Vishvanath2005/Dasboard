import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Logo from "../../assets/logo.png";

const Navbar = ({ open, setOpen, hasnotification,sethasnotification }) => {
  return (
    <div className=" mt-5 flex justify-between items-center gap-3 px-3 sm:px-6">
      <span className="flex sm:hidden gap-1.5 justify-center items-center">
        <div
          className="w-fit flex justify-start items-center duration-500"
          onClick={() => {
            setOpen(true); 
          }}
        >
          <IoMdMenu
            className={`${
              !open ? "text-2xl sm:text-amber-50 text-black" : " text-3xl"
            } font-normal`}
          />
        </div>
        <div className="sm:hidden ">
          <img src={Logo} alt="Logo" className="w-24" />
        </div>
      </span>
      <div className="font-Source Sans Pro  ">
        <div className="md:w-72 sm:w-60 w-32 flex   gap-1.5 rounded-lg  bg-white sm:p-2  pl-1 items-center  ">
          <IoSearchOutline className="sm:text-xl text-sm text-gray-400 font-semibold" />
          <input
            type="text"
            name="search"
            id="serarch"
            className="w-full text-sm sm:text-base h-7 sm:h-8  rounded-lg border-white outline-hidden "
            placeholder="Search here..."
          />
        </div>
      </div>

      <div className="sm:flex sm:gap-5 gap-1 items-center sm:visible hidden ">
        <div className=" sm:hidden lg:block relative cursor-pointer bg-blue-200 sm:p-3 p-1.5 rounded-full">
           {hasnotification && (
          <span className=" absolute top-0 right-0 p-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        )}
          <IoMdNotificationsOutline className="sm:text-2xl  text-lg text-blue-800 " />
         
        </div>
        <span className=" sm:hidden lg:block border border-gray-400 sm:h-12 h-8 "></span>
        <p className="sm:text-2xl relative cursor-pointer text-base bg-blue-200 sm:px-4 sm:py-2 px-2.5 py-1 text-blue-800 font-semibold rounded-full">
          V
          {hasnotification && (
          <span className="lg:hidden absolute top-0 right-0 p-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        )}
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
