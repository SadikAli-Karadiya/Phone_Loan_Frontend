import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import "../../../App.css"
import { useNavigate } from "react-router-dom";


function EMIHistory() {
    const navigate = useNavigate();

    return (
        <>
            <div className=' px-20 py-5 h-full'>
                <div className=' py-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>EMI History</h1>
                </div>
                <div className='px-16 py-10 bg-white shadow-2xl rounded-md'>
                    <div className="bg-white shadow-md">
                        <ul className="flex px-5 justify-between bg-[#0d0d48] py-4 uppercase shadow-sm text-white  font-medium ">
                            <li className="w-20 text-center text-sm  ">
                                RECIEPT NO
                            </li>
                            <li className="w-20 text-center text-sm  ">
                                Amount
                            </li>
                            <li className="w-20 text-center text-sm ">
                                Date
                            </li>
                            <li className="w-20 text-center text-sm ">
                                Installment
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
                            className="flex items-center space-x-2 justify-between font-normal md:px-2 py-4 cursor-pointer  "
                        >
                            <li className="w-20 text-[6px] font-bold sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center">
                                001
                            </li>
                            <li className="w-20 text-center text-[6px] sm:text-[8.5px] md:text-sm ">
                                5000
                            </li>
                            <li className="w-20 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                12/05/2023
                            </li>
                            <li className="w-20 text-center text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                1
                            </li>
                            <li className="w-20 text-center flex justify-center">
                                <AiFillEye
                                    className="text-[11px] md:text-sm lg:text-[19px] "
                                // onClick={() =>
                                //     navigate(`/Customer/profile-detail`)}
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
        </>
    )
}

export default EMIHistory