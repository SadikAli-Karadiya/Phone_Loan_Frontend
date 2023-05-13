import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import "../../App.css"
import { useNavigate } from "react-router-dom";


function PayEMI() {
  const navigate = useNavigate();

  return (
    <>
      <div className=' sm:px-5 xl:px-10 py-5 h-full'>
        <div className=' py-5 px-5'>
          <h1 className='text-[#0d0d48] text-2xl font-bold'>Pay EMI</h1>
          <div className='flex justify-center items-center mt-10 '>
            <input
              type="search"
              placeholder='Search Receipt (BY : Name , Whatsapp Number)'
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
                    Customer Id
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Company
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Model
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Total
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
              <tbody className="bg-red-100 items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                <tr className=" border-b">
                  <td className="px-6 py-5 font-bold">
                    001
                  </td>
                  <td className="px-6 py-5 capitalize">
                    Shad
                  </td>
                  <td className="px-6 py-5">
                    1234567890
                  </td>
                  <td className="px-6 py-5">
                    Vivo
                  </td>
                  <td className="px-6 py-5">
                    F17
                  </td>
                  <td className="px-6 py-5">
                    15000
                  </td>
                  <td className="px-6 py-5">
                    5000
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
      </div>
    </>
  )
}

export default PayEMI