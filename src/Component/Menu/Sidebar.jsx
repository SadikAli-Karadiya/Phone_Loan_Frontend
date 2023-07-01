import React from "react";
import { NavLink, Outlet } from 'react-router-dom'
import { FaUserPlus, FaMobileAlt, FaRupeeSign, FaSearch } from "react-icons/fa"
import { FaReceipt } from "react-icons/fa"
import Header from "./Header";
import "../../App.css"
import { RiDashboardFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";

const Sidebar = () => {
  <div className="relative bg-[#f5f7ff] min-h-screen flex ">
    <div className="h-full bg-white sticky left-0 top-0">
      <div className="sidebar h-screen xs:w-20 w-20 xl:w-56 bg-white drop-shadow-md">
        <div className="sidebar-top flex justify-center py-8 ">
          <img
            src="/images/logo.png"
            alt=""
            className="w-2/3 cursor-pointer hidden xl:block"
            id="logo"
          />
        </div>
        <div className="">
          <ul className="text-center">
            <li className="xs:px-3 xl:px-5 my-3 xl:my-0">
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
                to="/InstallmentList">
                <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500">
                  <FaWallet className="text-lg" />
                  <h1 className="text-sm hidden xl:block">Installments</h1>
                </div>
              </NavLink>
            </li>
            <li className="xs:px-3 xl:px-5 my-3">
              <NavLink
                activeclassname="active"
                to="/Product">
                <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                  <FaMobileAlt className="text-lg" />
                  <h1 className="text-sm hidden xl:block">Phones</h1>
                </div>
              </NavLink>
            </li>
            <li className="xs:px-3 xl:px-5 my-3">
              <NavLink
                activeclassname="active"
                to="/EMI">
                <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                  <FaRupeeSign className="text-lg" />
                  <h1 className="text-sm hidden xl:block">Pay EMI</h1>
                </div>
              </NavLink>
            </li>
            <li className="xs:px-3 xl:px-5 my-3">
              <NavLink
                activeclassname="active"
                to="/Customer/add-edit">
                <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                  <FaUserPlus className="text-lg" />
                  <h1 className="text-sm hidden xl:block">New Customer</h1>
                </div>
              </NavLink>
            </li>
            <li className="xs:px-3 xl:px-5 my-3">
              <NavLink
                activeclassname="active"
                to="/Receipt/Search">
                <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                  <FaReceipt className="text-lg" />
                  <h1 className="text-sm hidden xl:block">Search Receipt</h1>
                </div>
              </NavLink>
            </li>
            <li className="xs:px-3 xl:px-5 my-3">
              <NavLink
                activeclassname="active"
                to="/Search">
                <div className="flex justify-start items-start py-2 xs:px-3 xl:pl-8  rounded-md space-x-2 font-roboto hover:bg-blue-200 hover:text-blue-500 ">
                  <FaSearch className="text-lg" />
                  <h1 className="text-sm hidden xl:block">Search Customer</h1>
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
          </ul>
        </div>
      </div>
    </div>
    <div className="h-full w-full" style={{ minHeight: "calc(100vh - 70px)" }}>
      <Header />
      <div className='h-full' >
        <Outlet />
      </div>
    </div>
  </div>
};

export default Sidebar;