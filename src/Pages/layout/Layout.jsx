import React, { Suspense, useState } from "react";
import Logo from "../../assets/logo.png";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import { TbUserQuestion } from "react-icons/tb";
import { TbTicket } from "react-icons/tb";
import { PiPackageDuotone } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";
import { TbMessagePlus } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import Navbar from "./Navbar";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", icon: <LuLayoutDashboard />, to: "/dashboard" },
    {
      title: "Institution",
      icon: <HiOutlineBuildingOffice2 />,
      to: "/insitution",
    },
    { title: "Leads", icon: <GoPeople />, to: "/leads" },
    { title: "Enquires", icon: <TbUserQuestion />, to: "/enquires" },
    { title: "Tickets", icon: <TbTicket />, to: "/tickets" }, // Main Tickets route
    { title: "Packages", icon: <PiPackageDuotone />, to: "/packages" },
    { title: "Users", icon: <FiUserPlus />, to: "/users" },
    { title: "Interview", icon: <TbMessagePlus />, to: "/interview" },
    { title: "Subscription", icon: <RiVipDiamondLine />, to: "/subscription" },
    { title: "Settings", icon: <TbSettings />, to: "/settings" },
  ];

  return (
    <div>
      <div className="flex">
        
        <div
          className={`${
            !open
              ? ` md:w-24 sm:relative  w-1/5  sm:w-1/6`
              : `sm:w-4/6  w-3/5  sm:static absolute   md:w-1/6 `
          }  h-screen border-r-2 drop-shadow-lg bg-white duration-300`}
        >
          <div className={` ${!open ? `pt-8 pb-6 ` : ` pl-5 pt-8 pb-8`}`}>
            <img src={Logo} alt="Logo" />
          </div>
          <div
            className={` ${
              !open
                ? `static flex justify-center  hover:bg-slate-200  `
                : `absolute bg-orange rounded-full md:left-44 sm:left-44 rotate-180 left-[327px]`
            } top-16  duration-500   p-2`}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <TbLayoutSidebarRightCollapse
              className={`${!open ? `text-black` : `text-white`} text-2xl `}
            />
          </div>
          <ul>
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink to={menu.to}>
                  <li
                    className={`${
                      !open ? `justify-center` : `pl-10`
                    } cursor-pointer text-md flex items-center font-medium font-Source Sans Pro gap-x-3 p-3 mt-1  transition-all duration-300 hover:bg-blue-100 hover:text-blue-500  ${
                      location.pathname.startsWith(menu.to) ||
                      (menu.to === "/tickets" &&
                        location.pathname.startsWith("/tickets/assign_tickets")) ||  
                        (menu.to === "/leads" &&
                          location.pathname.startsWith("/leads/leads_details"))
                        ? `${
                            open
                              ? "bg-select-sidebar  border-r-8 border-orange  text-blue-500 transition-all duration-300"
                              : "md:bg-gray-200 md:text-primary md:transition-all md:duration-500 duration-700"
                          } `
                        : "text-gray-500  "
                    }`}
                    key={index}
                  >
                    <p className="sm:text-2xl text-base">{menu.icon}</p>
                    <p className={`${!open && `hidden `}`}>{menu.title}</p>
                  </li>
                </NavLink>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="w-full h-screen overflow-auto bg-slate-100  ">
          <Navbar />
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
