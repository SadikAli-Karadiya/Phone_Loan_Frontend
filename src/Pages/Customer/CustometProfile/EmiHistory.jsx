import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import "../../../App.css"
import { useNavigate } from "react-router-dom";


function EMIHistory() {
  const navigate = useNavigate();

  return (
    <>
      <div className=' px-10 py-5 h-full'>
        <div className=' py-5 px-5'>
          <h1 className='text-[#0d0d48] text-2xl font-bold'>EMI History</h1>
        </div>
        <div className='px-10 py-5'>
          <div className="bg-white shadow-md">
            <ul className="flex md:px-2 2xl:px-10 justify-between bg-[#0d0d48] py-4 shadow-sm text-white  font-medium px-5 ">
              <li className="w-20 text-center text-sm  ">
                Customer ID
              </li>
              <li className="w-20 text-center text-sm  ">
                Name
              </li>
              <li className="w-20 text-left text-sm  ">
                Mobile
              </li>
              <li className="w-20 text-left text-sm ">
                Company
              </li>
              <li className="w-28 text-left text-sm ">
                Model
              </li>
              <li className="w-20 text-left text-sm ">
                Description
              </li>
              <li className="w-20 text-left text-sm ">
                Net Amount
              </li>
              <li className="w-20 text-left text-sm ">
                Pedding
              </li>
              <li className="w-20 text-left text-sm ">
                Profile
              </li>
              <li className="w-20 text-left text-sm ">
                Action
              </li>
            </ul>
            {/* {PhoneInfo?.length > 0 ? (
              PhoneInfo.map((data, index) => {
                console.log(data , "data")
                return ( */}
            <ul
              // key={index}
              className="flex items-center space-x-2 bg-red-100 justify-between font-normal md:px-2 py-6 cursor-pointer shadow-sm "
            >
              <li className="w-20 text-[6px] font-bold sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center">
                001
              </li>
              <li className="w-20 text-center text-[6px] sm:text-[8.5px] md:text-sm ">
                Shad
              </li>
              <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                1234567890
              </li>
              <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                Vivo
              </li>
              <li className="w-28 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                F17 Pro
              </li>
              <li className="w-20 py-[2px] text-start text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                jsbdh
              </li>
              <li className="w-20 py-[2px] text-start  text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                15000
              </li>
              <li className="w-20 py-[2px] text-start  text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                5000
              </li>
              <li className="w-20 text-left flex flex-col md:flex-row items-center justify-start space-y-2 md:space-y-0 md:space-x-3">
                <AiFillEye
                  className="text-[11px] md:text-sm lg:text-[19px] "
                  onClick={() =>
                    navigate(`/Customer/profile-detail`)}
                />
              </li>
              <li className="w-20  text-left flex flex-col md:flex-row items-center justify-start space-y-2 md:space-y-0 md:space-x-3">
                <button className='bg-[#0d0d48] hover:bg-blue-900 px-6 text-white py-1 text-sm font-semibold rounded-md'>
                  Pay
                </button>
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
    </>
  )
}

export default EMIHistory