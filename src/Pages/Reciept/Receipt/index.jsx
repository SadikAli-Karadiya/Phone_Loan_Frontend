import React from "react";
import { BiRupee } from "react-icons/bi";


function Receipt() {
    return (
        <>
            <div className=' sm:px-5 xl:px-10 py-5 h-full'>
                <div className=' py-5 px-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>Receipt</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div className="border-4 border-[#0d0d48] w-[57%] h-[100%] rounded-2xl px-4 py-4">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt