import React from 'react'
import { AiFillEye } from "react-icons/ai";
import { NavLink } from "react-router-dom";


function Report() {
  return (
    <>
      <div className='px-5 py-5'>
        <div className='px-5 py-5 xl:px-10 bg-white drop-shadow-md '>
          <h1 className='font-bold px-5 pt-4 text-lg'>Customer List</h1>
          <div className='px-6 py-7 flex xs:flex-col xs:space-y-10 lg:flex-row lg:justify-between lg:items-center'>
            <form action="" className='flex xs:flex-col xs:space-x-0 xs:space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3 '>
              <div className='flex flex-col'>
                <label htmlFor="From" className='text-sm text-slate-400'>From</label>
                <input type="date" name="" id="" className='border py-2 rounded-md px-2 hover:cursor-pointer' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor="From" className='text-sm text-slate-400'>To</label>
                <input type="date" name="" id="" className='border py-2 rounded-md px-2 hover:cursor-pointer' />
              </div>
              <div className='flex sm:pt-5 '>
                <button className=' py-[10px] text-sm rounded-md px-4 border shadow-lg hover:bg-blue-100 font-semibold'>
                  Clear Filter
                </button>
              </div>
            </form>
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
          <div className="xs:overflow-x-scroll xl:overflow-x-hidden">
            {/* <table
              className="w-full bg-blue-50 text-sm text-center "
              id="table-to-xls">
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
                </tr>
              </tbody>
            </table> */}
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="bg-gray-100 h-16 w-full text-sm leading-none font-bold text-[#0d0d48]">
                  <th className="font-normal text-left pl-10">Date</th>
                  <th className="font-normal text-left  px-2 xl:px-0">
                    Reciept No
                  </th>
                  <th className="font-normal text-left px-2 xl:px-0">
                    Student Name
                  </th>
                  <th className="font-normal text-left px-2 xl:px-0">
                    Class
                  </th>
                  <th className="font-normal text-left  px-2 xl:px-0">
                   Installment
                  </th>
                  <th className="font-normal text-left px-2 xl:px-0">
                    Amount
                  </th>
                  <th className="font-normal text-left px-2 xl:px-0">
                    Admin
                  </th>
                  <th className="font-normal text-left px-2 xl:px-0">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody className="w-full">
                {/* {
                  currentItems?.map((m, key) => {
                    return ( */}
                <tr
                  // key={key}
                  className="h-20 text-sm leading-none text-gray-800 border-b border-gray-100"
                >
                  <td className="pl-8">
                    02 / 05 / 2023
                  </td>
                  <td className=" px-2 font-bold xl:px-0">
                    002
                  </td>
                  <td className="px-2 xl:px-0 capitalize">
                    Shad
                  </td>
                  <td className="px-2 xl:px-0 capitalize">
                    Vivo F17 Pro
                  </td>
                  <td className=" px-2 xl:px-0">
                    002
                  </td>
                  <td>
                    <span className="bg-blue-200 px-4 text-darkblue-500 font-bold rounded">
                      1500
                    </span>
                  </td>
                  <td>
                    <span className="capitalize">Israil</span>
                  </td>
                  <td className="px-5  ">
                    <span>
                      <NavLink
                        to={"/Receipt/Receipt"}>
                        <AiFillEye className="text-xl cursor-pointer" />
                      </NavLink>
                    </span>
                  </td>
                </tr>
                {/* );
                  })
                } */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Report