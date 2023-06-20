import React from "react";
import { BiRupee } from "react-icons/bi";


function Receipt() {
    return (
        <>
            <div className=' sm:px-5 xl:px-10 py-5 h-full'>
                <div className=' py-5 px-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>Receipt</h1>
                </div>
                <div className="flex justify-center items-center px-5">
                    {/* <div className="border-4 border-[#0d0d48] w-[57%] h-[100%] rounded-2xl px-4 py-4 bg-white">
                        <div className="flex justify-between">
                            <img src="images/logo.png" style={{ maxWidth: "250px" }} alt="" />
                            <div className='w-48 font-bold text-[#0d0d48]'>
                                <p>
                                    E-35, Sumel-8, Safal Market, Nr. Ajit Mill Char Rasta, Rakhial,
                                    Ahmedabad.
                                </p>
                                <p className="pt-2">Mobile: 8747382919</p>
                            </div>
                        </div>
                        <div className="bg-[#0d0d48] w-full h-[3px] my-4">
                            .
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="bg-[#0d0d48] uppercase px-3 rounded-md text-white font-roboto py-1 text-sm">
                                Customer EMI Receipt
                            </div>
                            <div className="border-2 text-[#0d0d48] border-[#0d0d48] uppercase px-3 rounded-md font-roboto py-[3px] font-semibold text-sm">
                                Secound EMI
                            </div>
                            <div className="text-[#0d0d48] font-roboto font-semibold">
                                Receipt No : <span className="text-black">1009</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-1 pt-5">
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Name :</h1>
                                <h1 className="font-semibold uppercase font-roboto">Shad</h1>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Customer Id :</h1>
                                <h1 className="font-semibold uppercase font-roboto">02</h1>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Date :</h1>
                                <h1 className="font-semibold uppercase font-roboto">10 / 12 / 2023</h1>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-1 ">
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Company :</h1>
                                <h1 className="font-semibold uppercase font-roboto">Vivo</h1>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Model :</h1>
                                <h1 className="font-semibold uppercase font-roboto">F17</h1>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">RAM :</h1>
                                <h1 className="font-semibold uppercase font-roboto">4 / 64</h1>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-1">
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Total Amount :</h1>
                                <h1 className="font-semibold uppercase font-roboto">15000</h1>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Pending Amount :</h1>
                                <h1 className="font-semibold uppercase font-roboto">15000</h1>
                            </div>
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">Pending EMI : </h1>
                                <h1 className="font-semibold uppercase font-roboto">2</h1>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-1">
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">The sum of Rupees :</h1>
                                <h1 className="font-semibold uppercase font-roboto italic">fifteen thousand only </h1>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-1">
                            <div className="flex items-center space-x-2">
                                <h1 className="font-roboto italic text-[#0d0d48] font-semibold">By :</h1>
                                <h1 className="font-semibold uppercase font-roboto">Cash</h1>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5">
                            <div className="flex flex-col">
                                <div className=" relative flex justify-center items-center">
                                    <div className="absolute left-0 rounded-full border-2 border-[#0d0d48]">
                                        <div
                                            className={`w-12 h-12 rounded-full border-2 border-white bg-[#0d0d48] flex justify-center items-center`}
                                            style={{ marginTop: "-0.4px" }}
                                        >
                                            <BiRupee className="font-bold text-3xl text-white" />
                                        </div>
                                    </div>
                                    <div className="border-2 border-[#0d0d48] rounded-full ml-2">
                                        <input
                                            type="text"
                                            className="w-48 h-10 border-2 p-2 pl-14 border-[#0d0d48] rounded-full text-2xl font-bold"
                                            disabled
                                            value="15000"
                                            style={{ margin: "1px" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='font-bold text-[#0d0d48]'>
                                    Signature with stamp
                                </p>
                            </div>
                        </div>
                    </div> */}
                    <div className="bg-white py-10 shadow-xl rounded-md h-full w-full">
                        <div className="px-10 flex items-center justify-between">
                            <div className="flex items-center ">
                                <div className="logo">
                                    <h1 className="font-bold text-4xl">LOGO</h1>
                                </div>
                                <div className="address pl-20">
                                    <span>Phone : +91 7600199352</span>
                                    <p>Ajit Mill Char Rasta</p>
                                    <p>Rakhial Road Ahmedabad</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-2xl">Receipt No : </h1>
                                <div className="bg-slate-200 py-[10px] px-9 rounded-full ml-4">
                                    <span className="text-2xl text-gray-600 font-bold">000001</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full px-10 pt-4 space-x-5">
                            <div className="flex items-center w-[65%] py-5">
                                <h1 className=" font-semibold w-[230px]">Customer Name <span className="ml-5">:</span></h1>
                                <div className="text-xl w-full border-dotted border-b-2 border-slate-300">
                                    <span className=" uppercase font-semibold  ">Rajput mohammadshad</span>
                                </div>
                            </div>
                            <div className="flex items-center w-[35%]">
                                <h1 className=" font-semibold w-[100px]">Date <span className="ml-3 "> :</span></h1>
                                <div className="text-xl w-full border-dotted border-b-2 border-slate-300">
                                    <span className="uppercase font-semibold ">10 / 12 / 2023</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full px-10 ">
                            <div className="flex items-center w-full">
                                <h1 className=" font-semibold w-[200px]">Amount <span className="ml-[80px] ">: </span> </h1>
                                <div className="text-xl w-full border-dotted border-b-2 border-slate-300">
                                    <span className="uppercase font-semibold ">Fifthy thousand only</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-200 mx-16 rounded-full items-center px-6 py-2 h-12 flex  ml-64 my-4">
                            <BiRupee className="text-3xl mt-1" />
                            <h1 className="font-bold ml-3 text-3xl">500 /-</h1>
                        </div>
                        <div className="flex justify-start w-full px-10">
                            <h1 className=" font-semibold w-40">Payment For <span className="ml-5">:</span></h1>
                            <div className="ml-10 text-xl w-full border-dotted border-b-2 border-slate-300">
                                <span className=" uppercase font-semibold  ">Down Payment</span>
                            </div>
                        </div>
                        {/* <div className="flex items-end justify-between px-10 pt-5">
                            <div className="space-y-3">
                                <div className="flex items-center w-64">
                                    <h1 className=" font-semibold">Total Amount </h1>
                                    <span className="px-5 text-lg">:</span>
                                    <div className=" bg-blue-600 px-3 rounded-md text-white">
                                        1500000000
                                    </div>
                                </div>
                                <div className="flex items-center w-64">
                                    <h1 className=" font-semibold">Paid Amount </h1>
                                    <span className="px-5 text-lg">:</span>
                                    <div className=" bg-green-600 px-5  rounded-md text-white ">
                                        5000
                                    </div>
                                </div>
                                <div className="flex items-center w-64">
                                    <h1 className=" font-semibold">Due Amount </h1>
                                    <span className="px-5 text-lg">:</span>
                                    <div className=" bg-red-600 px-5 rounded-md text-white ">
                                        10000
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-xl font-semibold">Payment By </h1>
                                <span className="text-xl ml-5">:</span>
                                <div>
                                    <p className="ml-5"> <span className="ml-5 font-semibold">UPI</span></p>
                                    <p className="ml-5"><span className="ml-5 font-semibold">12345543454</span></p>
                                </div>
                            </div>
                            <div className="w-[20%]">
                                <div className="border-b-2">

                                </div>
                                <h1 className="font-semibold mt-2 text-end text-slate-500">Authorized Signature</h1>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt