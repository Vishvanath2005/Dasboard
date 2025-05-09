import React, { Suspense, useState } from "react";
import Logo from "../../assets/logo.png";
import { TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { IoMdMenu } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPeople } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { TbUserQuestion } from "react-icons/tb";
import { TbTicket } from "react-icons/tb";
import { PiPackageDuotone } from "react-icons/pi";
import { FiUserPlus } from "react-icons/fi";
import { TbMessagePlus } from "react-icons/tb";
import { RiVipDiamondLine } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import { Tooltip } from "react-tooltip";
import Navbar from "./Navbar";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  const toggle = () => {
    setTimeout(1500);
    if (open) {
      setOpen(!open);
    }
  };

  const Menus = [
    { title: "Dashboard", icon: <LuLayoutDashboard />, to: "/dashboard" },
    {
      title: "Institution",
      icon: <HiOutlineBuildingOffice2 />,
      to: "/insitution",
    },
    { title: "Leads", icon: <GoPeople />, to: "/leads" },
    { title: "Enquires", icon: <TbUserQuestion />, to: "/enquires" },
    { title: "Tickets", icon: <TbTicket />, to: "/tickets" },
    { title: "Packages", icon: <PiPackageDuotone />, to: "/packages" },
    { title: "Users", icon: <FiUserPlus />, to: "/users" },
    { title: "Interview", icon: <TbMessagePlus />, to: "/interview" },
    { title: "Subscription", icon: <RiVipDiamondLine />, to: "/subscription" },
    { title: "Settings", icon: <TbSettings />, to: "/settings" },
  ];

  return (
    <div>
      <div className="md:p-0  flex">
        <div
          className={`${
            !open
              ? ` md:w-32 sm:relative hidden sm:block  `
              : `w-2/3 absolute  sm:z-10 sm:w-3/6  sm:static md:w-72`
          }  h-screen z-10  drop-shadow-lg bg-white duration-300`}
        >
          <div
            className={`${
              !open
                ? ` flex flex-col justify-center items-center`
                : ` sm:flex gap-3 text-center`
            }`}
          >
            <div
              className={` ${
                !open ? ` sm:hidden` : ` static  rotate-180 sm:mt-2   `
              }  w-fit flex justify-start items-center  duration-500    p-2`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <IoMdMenu
                className={`${
                  !open ? `text-2xl sm:text-amber-50 text-black` : ` cursor-pointer text-3xl`
                }  font-normal`}
              />
            </div>
            <div
              className={` ${
                !open
                  ? `sm:visible invisible sm:pt-8 sm: pb-6 size-10 px-1 sm:px-1.5 sm:size-20 sm:w-full `
                  : ` pb-2 sm:py-6 `
              } flex justify-center items-center`}
            >
              <img src={Logo} alt="Logo" />
            </div>
            <div
              className={` ${
                !open
                  ? ` bg-none sm:visible  collapse     items-center flex justify-start  cursor-pointer    `
                  : ` hidden  `
              }      border-y p-2`}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <TbLayoutSidebarRightCollapse
                className={`${
                  !open ? `text-2xl  text-black` : ` text-3xl`
                }  font-normal`}
              />
            </div>
          </div>

          <ul>
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink to={menu.to}>
                  <li
                    className={`${
                      !open ? `justify-center  ` : `pl-12`
                    } cursor-pointer text-md flex gap-2 items-center font-medium font-Source Sans Pro gap-y-3 p-3 mt-1  transition-all duration-300 hover:bg-blue-100 hover:text-blue-500  ${
                      location.pathname.startsWith(menu.to) ||
                      (menu.to === "/tickets" &&
                        location.pathname.startsWith(
                          "/tickets/assign_tickets"
                        )) ||
                      (menu.to === "/leads" &&
                        location.pathname.startsWith("/leads/leads_details"))
                        ? `${
                            open
                              ? "bg-select-sidebar text-base   border-r-4 border-orange  text-blue-500 transition-all duration-300"
                              : "bg-select-sidebar text-primary border-r-4 border-orange text-blue-500 md:transition-all md:duration-500 duration-700"
                          } `
                        : " text-table-text font-Source_Sans_Pro font-normal text-base  "
                    }`}
                    data-tooltip-id={`tooltip-${index}`}
                    data-tooltip-content={menu.title}
                    key={index}
                    onClick={toggle}
                  >
                    <p className="sm:text-xl text-base">{menu.icon} </p>

                    <p className={`${!open && `hidden `}`}>{menu.title}</p>
                  </li>
                </NavLink>
                <Tooltip
                  className={`${open && `hidden`}`}
                  id={`tooltip-${index}`}
                  place="right"
                />
              </React.Fragment>
            ))}
          </ul>
          <div
            className={`${
              !open ? `left-8` : ` flex w-full justify-center  gap-3`
            } sm:hidden  fixed bottom-6  justify-center  sm:gap-2.5  items-center`}
          >
            <p
              className={`${
                open && `text-3xl `
              }sm:text-2xl sm:hidden relative cursor-pointer  bg-blue-200 sm:px-4 sm:py-2 px-4 py-2   text-blue-800 font-semibold rounded-full`}
            >
              V
              {hasNotification && (
                <span className=" absolute top-0 right-0 p-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
              )}
            </p>
            <div className={`${!open && `hidden`}`}>
              <p
                className={`${
                  open && `text-xl`
                } sm:text-xl  font-semibold font-Exo`}
              >
                Profile Name
              </p>
              <p
                className={`${
                  open && `text-base`
                }sm:text-sm  text-gray-400 font-Source Sans Pro`}
              >
                Profile Role
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${
            open && `sm:blur-none blur-xl  z-0 transition-opacity duration-300`
          } w-screen h-screen overflow-auto bg-slate-100 `}
        >
          <Navbar
            open={open}
            setOpen={setOpen}
            hasnotification={hasNotification}
            setHasNotification={setHasNotification}
          />
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
