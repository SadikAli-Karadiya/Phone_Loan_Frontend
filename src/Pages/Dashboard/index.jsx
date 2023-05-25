import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi"
import { FaUsers } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { GiSmartphone } from "react-icons/gi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='px-5 py-5 xl:px-10 '>
      <div className='grid grid-cols-4 my-10 gap-5 '>
        {/* <div className='bg-[#e55353] py-3 px-3 rounded-md'>
          <div className='flex justify-between items-start pb-16' >
            <div>
              <h1 className="text-white font-roboto font-bold text-2xl">
                5000
              </h1>
              <p className="text-white">Total Customer</p>
            </div>
            <BiDotsVerticalRounded className='text-white' />
          </div>
        </div> */}
        <div className='bg-[#f9b115] flex justify-between items-start py-5 px-3 rounded-md drop-shadow-lg '>
          <div className='flex flex-col space-y-4'>
            <p className="text-white text-lg font-semibold ">Total Customer</p>
            <div className='flex items-center space-x-5'>
              <div className='bg-white text-[#f9b115] px-2 py-2 text-3xl rounded-md'>
                <FaUsers />
              </div>
              <h1 className="text-white font-roboto font-bold text-3xl">
                5000
              </h1>
            </div>
          </div>
          <div className='flex justify-end items-end'>
            <BiDotsVerticalRounded className='text-white' />
          </div>
        </div>
        <div className='bg-[#3399ff] flex justify-between items-start  py-5 px-3 rounded-md drop-shadow-lg '>
          <div className='flex flex-col space-y-4 '>
            <p className="text-white text-lg font-semibold ">Total Pending Payment</p>
            <div className='flex items-center space-x-5'>
              <div className='bg-white text-[#3399ff] px-2 py-2 text-3xl rounded-md'>
                <BiRupee />
              </div>
              <h1 className="text-white font-roboto font-bold text-3xl">
                5000
              </h1>
            </div>
          </div>
          <div className='flex justify-end items-end'>
            <BiDotsVerticalRounded className='text-white' />
          </div>
        </div>
        <div className='bg-[#321fdb] flex justify-between items-start  py-5 px-3 rounded-md drop-shadow-lg '>
          <div className='flex flex-col space-y-4 '>
            <p className="text-white text-lg font-semibold ">Total Model</p>
            <div className='flex items-center space-x-5'>
              <div className='bg-white text-[#321fdb] px-2 py-2 text-3xl rounded-md'>
                <GiSmartphone />
              </div>
              <h1 className="text-white font-roboto font-bold text-3xl">
                5000
              </h1>
            </div>
          </div>
          <div className='flex justify-end items-end'>
            <BiDotsVerticalRounded className='text-white' />
          </div>
        </div>

      </div>
      <div className="bg-white shadow-md rounded-md  xs:overflow-x-scroll xl:overflow-x-hidden px-10 py-5">
        <h1 className='font-bold text-lg'>Customer List</h1>
        <div className='flex justify-between items-center py-5'>
          <div className='flex justify-start items-center w-1/3 '>
            <input
              type="search"
              placeholder='Search Customer'
              className='drop-shadow-lg border px-4 py-[6px] focus:outline-none rounded-l-lg w-full'
            />
            <div className='bg-[#3399ff]  px-3 py-[7px] group rounded-r-lg flex justify-center items-center
                         shadow-xl cursor-pointer text-white text-2xl '>
              <BiSearch className='search group-hover:scale-125 duration-300' />
            </div>
          </div>
          <div className="right flex items-center space-x-3 pr-6">
            <div className='flex items-center space-x-3'>
              <div className='bg-green-200 rounded-md px-3 shadow-lg py-1 flex flex-col justify-center  items-center'>
                <h1 className='font-semibold text-sm'>
                  Total : 291840
                </h1>
                <p className='text-sm italic'>Transection : 66</p>
              </div>
              <div className='flex justify-end items-end'>
                <button className=' py-[10px] text-sm rounded-md px-4 border shadow-lg hover:bg-blue-100 font-semibold'>
                  Calculate Total
                </button>
              </div>
            </div>
          </div>
        </div>
        <table
          className="w-full text-sm text-center rounded-xl  text-white bg-[#3399ff]"
          id="table-to-xls">
          <thead className="text-xs uppercase">
            <tr className=" text-sm">
              <th scope="col" className="pl-3 py-4">
                Serial No
              </th>
              <th scope="col" className="pl-3 py-4">
                Customer Id
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Phone
              </th>
              <th scope="col" className="px-6 py-4">
                Total
              </th>
              <th scope="col" className="px-6 py-4">
                Paidup
              </th>
              <th scope="col" className="px-6 py-4">
                Pending
              </th>
              <th scope="col" className="px-6 py-4">
                Profile
              </th>
              <th scope="col" className="px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white text-black items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
            <tr className=" border-b">
              <th className="py-5 px-6">
                01
              </th>
              <td className="px-6 py-5 text-gray-500">
                001
              </td>
              <td className="px-6 py-5 capitalize">
                Shad
              </td>
              <td className="px-6 py-5">
                1234567890
              </td>
              <td className="px-6 py-5">
                15000
              </td>
              <td className="px-6 py-5">
                5000
              </td>
              <td className="px-6 py-5">
                10000
              </td>
              <td className="px-6 py-5">
                <div className="flex justify-center items-center">
                  <Tippy content="Customer Profile">
                    <div>
                      <AiFillEye
                        className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                        onClick={() =>
                          navigate(`/Customer/profile-detail`)}
                      />
                    </div>
                  </Tippy>
                </div>
              </td>
              <td className="px-6 py-5 ">
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={() =>
                      navigate(`/Receipt/Generate`)}
                    className='bg-green-800 hover:bg-green-700 px-4 text-white py-[3px] text-sm font-semibold rounded-md'>
                    Pay
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
