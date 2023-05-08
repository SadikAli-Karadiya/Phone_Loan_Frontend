import React, { useState } from "react";
import Control from "../../../public/Icons/control.png"
import Logo from "../../../public/Icons/Logo.png"
import { NavLink, Outlet } from 'react-router-dom'
import {MdShoppingCart} from "react-icons/md"
import {HiUsers} from "react-icons/hi"
import Header from "./Header";



const Sidebar = () => {

  return (
    <div className="flex">

      <div className="w-20 lg:w-44 xl:w-52 2xl:w-60 
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
          <li >
            <NavLink to={"/"} className="flex pl-3 xl:pl-6 2xl:pl-8 my-5 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4" >
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
                <ion-icon name="grid"></ion-icon>
                <h1 className="text-base hidden lg:block">
                  Dashboard
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Customers"}
              className="flex pl-3 xl:pl-6 2xl:pl-8  my-5 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4" >
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
                <HiUsers/>
                <h1 className="text-base hidden lg:block">
                  Customers
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/EMI"}
              className="flex pl-3 xl:pl-6 2xl:pl-8  my-5 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
               
                <h1 className="text-base hidden lg:block">
                  EMI
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/PayEMI"}
              className="flex pl-3 xl:pl-6 2xl:pl-8  my-5 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
              <ion-icon name="cash"></ion-icon>
                <h1 className="text-base hidden lg:block">
                  Pay EMI
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Reciept"}
              className="flex pl-3 xl:pl-6 2xl:pl-8  my-5 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
                <ion-icon name="receipt"></ion-icon>
                <h1 className="text-base hidden lg:block">
                  Reciept
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Report"}
              className="flex pl-3 xl:pl-6 2xl:pl-8  my-5 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
                <ion-icon name="podium"></ion-icon>
                <h1 className="text-base hidden lg:block">
                  Report
                </h1>

              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Product"}
              className="flex pl-3 xl:pl-6 2xl:pl-8 my-5 hover:bg-blue-200 hover:text-blue-500 duration-100 w-full justify-start items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-sm gap-x-4">
              <div className="flex justify-center items-center text-xl space-x-3 font-roboto">
                <MdShoppingCart/>
                <h1 className="text-base hidden lg:block">
                  Product
                </h1>

              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;