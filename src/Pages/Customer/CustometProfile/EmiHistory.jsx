import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import "../../../App.css"
import { useNavigate } from "react-router-dom";


function EMIHistory() {
    const navigate = useNavigate();

    return (
        <>
            <div className='xs:px-5 sm:px-10 sm:py-5 h-full'>
                <div className='sm:py-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>EMI History</h1>
                </div>
                <div className='xs:px-0 xs:py-5 xl:px-20'>
                    <div className="bg-white xs:overflow-x-scroll xl:overflow-x-hidden">
                        <table className="w-full bg-[#0d0d48] text-sm text-center  " id="table-to-xls" >
                            <thead className="text-xs text-gray-700 bg-class3-50 uppercase  ">
                                <tr className="text-white text-xs ">
                                    <th scope="col" className="pl-3 py-4">
                                        Receipt No
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Installment
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-red-100 items-center bg  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                                <tr className=" border-b">
                                    <th className="py-5 px-6">
                                        01
                                    </th>
                                    <td className="px-6 py-5 ">
                                        05/01/2023
                                    </td>
                                    <td className="px-6 py-5 capitalize">
                                        5000
                                    </td>
                                    <td className="px-6 py-5">
                                        2
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex justify-center items-center">
                                            <AiFillEye
                                                className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                onClick={() =>
                                                    navigate(`/Customer/EMI-History`)}
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

export default EMIHistory