import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../../App.css"
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SearchReciept() {
  const navigate = useNavigate();
  return (
    <>
      <div className=' sm:px-5 xl:px-10 py-5 h-full'>
        <div className=' py-5 px-5'>
          <h1 className='text-[#0d0d48] text-2xl font-bold'>Search Receipt</h1>
          <div className='flex justify-center items-center mt-10 '>
            <input
              type="search"
              placeholder='Search Receipt (BY : Receipt ID , Name , Whatsapp Number)'
              className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-l-lg w-2/3'
            />
            <div className='bg-[#0d0d48] px-3 py-[7px] group rounded-r-lg flex justify-center items-center
            shadow-xl cursor-pointer text-white text-2xl '>
              <BiSearch className='search group-hover:scale-125 duration-300' />
            </div>
          </div>
        </div>
        <div className='px-5 py-5 '>
          <div className="bg-white shadow-md  xs:overflow-x-scroll xl:overflow-x-hidden">
            <h1 className='font-bold p-6 text-lg'>Customer List</h1>
            <table
              className="w-full bg-blue-50 text-sm text-center "
              id="table-to-xls"
            >
              <thead className="text-xs text-gray-700 bg-class3-50 uppercase  ">
                <tr className="text-black text-sm ">
                  <th scope="col" className="pl-3 py-4">
                    Date
                  </th>
                  <th scope="col" className="pl-3 py-4">
                    Receipt No
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Model
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Installment
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Paid
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Profile
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                <tr className=" border-b">
                  <td className="px-6 py-5">
                    001
                  </td>
                  <td className="px-6 py-5 font-bold">
                    01
                  </td>
                  <td className="px-6 py-5">
                    Shad
                  </td>
                  <td className="px-6 py-5">
                    Vivo
                  </td>
                  <td className="px-6 py-5">
                    F17
                  </td>
                  <td className="px-6 py-5">
                    5
                  </td>
                  <td className="px-6 py-5">
                    <h1 className='bg-green-300 text-green-900 font-bold py-[2px] rounded-md'>
                      5000
                    </h1>
                  </td>
                  <td className="px-6 py-5">
                    <h1 className='bg-blue-200 text-blue-900 font-bold py-[2px] rounded-md'>
                      5000
                    </h1>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center items-center">
                      <AiFillEye
                        className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                        onClick={() =>
                          navigate(`/Receipt/Receipt`)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchReciept
