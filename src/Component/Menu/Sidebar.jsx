import React, { useState } from "react";
import Control from "../../../public/Icons/control.png"
import Logo from "../../../public/Icons/Logo.png"
import { NavLink, Outlet } from 'react-router-dom'
import { MdShoppingCart, MdDashboard } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { FaUserPlus } from "react-icons/fa"
import { FaReceipt } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import Header from "./Header";
import "../../App.css"


import { RiDashboardFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";


const Sidebar = () => {

  return (
    <>
      <div className="h-full flex bg-white sticky left-0 top-0">
        <div className="sidebar h-screen xs:w-20 w-20 xl:w-64">
          <div className="sidebar-top flex justify-center py-2 mt-5">
            <img
              src="/images/logo.png"
              alt=""
              className="w-2/3 cursor-pointer hidden xl:block"
              id="logo"
            />
          </div>
          <div className=" mt-12 xl:mt-6 ">
            <ul className="text-center">
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <RiDashboardFill className="text-lg" />
                    <h1 className="text-sm hidden xl:block">Dashboard</h1>
                  </div>
                </NavLink>
              </li>
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/Customer/list">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8 rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <FaUsers className="text-lg" />
                    <h1 className="text-sm hidden xl:block">Customers</h1>
                  </div>
                </NavLink>
              </li>
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/EMI">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <BiRupee className="text-lg" />
                    <h1 className="text-sm hidden xl:block">EMI</h1>
                  </div>
                </NavLink>
              </li>
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/Receipt/Search">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <FaReceipt className="text-lg" />
                    <h1 className="text-sm hidden xl:block">Receipt</h1>
                  </div>
                </NavLink>
              </li>
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/Customer/add-edit">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <FaUserPlus className="text-lg" />
                    <h1 className="text-sm hidden xl:block">Customer Reg.</h1>
                  </div>
                </NavLink>
              </li>
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/Search">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <BiSearch className="text-lg" />
                    <h1 className="text-sm hidden xl:block">Search</h1>
                  </div>
                </NavLink>
              </li>
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/Report">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <FaWpforms className="text-lg" />
                    <h1 className="text-sm hidden xl:block">Report</h1>
                  </div>
                </NavLink>
              </li>
              <li className="xs:px-3 xl:px-5 my-3">
                <NavLink
                  activeclassname="active"
                  to="/Product">
                  <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                    <MdShoppingCart className="text-lg" />
                    <h1 className="text-sm hidden xl:block">Product</h1>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <Header />
          <div className='w-full bg-slate-100'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;