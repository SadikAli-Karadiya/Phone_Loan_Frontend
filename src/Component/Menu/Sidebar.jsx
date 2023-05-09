import React, { useState } from "react";
import Control from "../../../public/Icons/control.png"
import Logo from "../../../public/Icons/Logo.png"
import { NavLink, Outlet } from 'react-router-dom'
import { MdShoppingCart, MdDashboard } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { HiUsers } from "react-icons/hi"
import { FaUserPlus } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import Header from "./Header";



const Sidebar = () => {

  return (
    <div className="flex">

      <div className="w-64
           h-screen p-3 lg:p-5 shadow-2xl lg:pt-8 bg-white border relative duration-300"
      >

        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              }`}
          />
          <h1
            className={`text-blue-900 font-bold origin-left hidden text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            HHHHH
          </h1>
        </div>
        <ul className="lg:pt-3 ">

          <li>
            <NavLink to={"/"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4" >
              <div className="flex justify-center items-center text-lg space-x-3 font-roboto">
                <MdDashboard className="text-lg" />
                <h1 className="text-sm hidden lg:block">
                  Dashboard
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Customer/list"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4" >
              <div className="flex justify-center items-center text-lg space-x-3 font-roboto">
                <HiUsers className="text-lg" />
                <h1 className="text-sm hidden lg:block">
                  Customers
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/PayEMI"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
                <BiRupee />
                <h1 className="text-sm hidden lg:block">
                  Pay EMI
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Reciept"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-lg space-x-3 font-roboto">
                <ion-icon name="receipt" className="text-base"></ion-icon>
                <h1 className="text-sm hidden lg:block">
                  Reciept
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Customer/add-edit"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
                <FaUserPlus />
                <h1 className="text-sm hidden lg:block">
                  Add Cust.
                </h1>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Search"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-lg space-x-3 font-roboto">
                <BiSearch />
                <h1 className="text-sm hidden lg:block">
                  Search
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Report"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-lg space-x-3 font-roboto">
                <ion-icon name="podium" className="text-base"></ion-icon>
                <h1 className="text-sm hidden lg:block">
                  Report
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Product"}
              className="flex my-5 pl-10 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-lg space-x-3 font-roboto">
                <MdShoppingCart className="text-lg" />
                <h1 className="text-sm hidden lg:block">
                  Product
                </h1>

              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div className='w-full bg-slate-100'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;