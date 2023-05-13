import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai";



function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className='px-5 py-5 xl:px-10 '>
      <div className="bg-white shadow-md rounded-md  xs:overflow-x-scroll xl:overflow-x-hidden">
        <h1 className='font-bold p-6 text-lg'>Customer List</h1>
        <div className='flex justify-between items-center px-3 py-5'>
          <div className='flex justify-start items-center w-1/3 '>
            <input
              type="search"
              placeholder='Search Receipt (BY : Name , Whatsapp Number)'
              className='drop-shadow-lg border px-4 py-[6px] focus:outline-none rounded-l-lg w-full'
            />
            <div className='bg-blue-500 px-3 py-[7px] group rounded-r-lg flex justify-center items-center
                         shadow-xl cursor-pointer text-white text-2xl '>
              <BiSearch className='search group-hover:scale-125 duration-300' />
            </div>
          </div>
          <div className="right flex items-center space-x-3 pr-6">
          </div>
        </div>
        <table
          className="w-full bg-blue-50 text-sm text-center "
          id="table-to-xls"
        >
          <thead className="text-xs text-gray-700 bg-class3-50 uppercase  ">
            <tr className="text-black text-sm ">
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
          <tbody className="bg-white items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
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
                  <AiFillEye
                    className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                    onClick={() =>
                      navigate(`/Customer/profile-detail`)}
                  />
                </div>
              </td>
              <td className="px-6 py-5 ">
                <div className="flex justify-center space-x-3">
                  <button
                    onClick={() =>
                      navigate(`/Receipt/Generate`)}
                    className='bg-[#0d0d48] hover:bg-blue-900 px-4 text-white py-[3px] text-sm font-semibold rounded-md'>
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
