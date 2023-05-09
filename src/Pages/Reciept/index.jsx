import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../App.css"
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Reciept() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='px-10 py-5 h-full'>
        <div className='py-5 px-5'>
          <h1 className='text-[#0d0d48] text-2xl font-bold'>Search Reciept</h1>
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
        <div className='px-10 py-5'>
          <div className="bg-white shadow-md">
            <h1 className='font-bold p-6 text-lg'>Customer List</h1>
            <ul className="flex md:px-2 2xl:px-10 justify-between bg-blue-50  py-4 shadow-sm text-black font-medium px-2 ">
              <li className="w-20 text-center text-sm  ">
                Date
              </li>
              <li className="w-20 text-center text-sm  ">
                Reciept No
              </li>
              <li className="w-20 text-left text-sm  ">
                Name
              </li>
              <li className="w-28 text-left text-sm ">
                Model Name
              </li>
              <li className="w-20 text-left text-sm ">
                Paid
              </li>
              <li className="w-20 text-center text-sm ">
                EMI
              </li>
              <li className="w-20 text-left text-sm ">
                Total
              </li>
              <li className="w-20 text-center text-sm ">
                Action
              </li>
            </ul>
            {/* {PhoneInfo?.length > 0 ? (
                PhoneInfo.map((data, index) => {
                  console.log(data , "data")
                  return ( */}
            <ul
              // key={index}
              className="flex items-center space-x-2 justify-between font-normal md:px-2  py-6 rounded-lg cursor-pointer  hover:bg-white shadow-sm "
            >
              <li className="w-20 text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center">
                21/01/2023
              </li>
              <li className="w-20 text-center font-bold text-[6px] sm:text-[8.5px] md:text-sm ">
                0001
              </li>
              <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                Shad
              </li>
              <li className="w-28 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                F17 Pro
              </li>
              <li className="w-20 font-bold py-[2px] text-center bg-green-200 text-green-900 rounded-md text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                5000
              </li>
              <li className="w-20 font-bold py-[2px] text-center bg-red-200 text-red-900 rounded-md text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                3
              </li>
              <li className="w-20 font-bold py-[2px] text-center bg-blue-200 text-blue-900 rounded-md text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                15000
              </li>
              <li className="w-20 text-[11px] text-center items-center flex justify-center md:text-sm lg:text-[19px]">
                <AiFillEye
                  className=" "
                  onClick={() =>
                    navigate(`/Customer/profile-detail`)}
                />
              </li>
            </ul>
            {/* );
                })
              ) : ( */}
            {/* <div className="flex justify-center items-center w-full py-10">
                <MdShoppingCart className=" text-2xl sm:text-3xl md:text-[30px] text-gray-400 mr-2" />
                <p className="text-xs xs:text-sm sm:text-lg 2xl:text-[20px] font-medium text-gray-400">
                  Product Not Found
                </p>
              </div> */}
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reciept
