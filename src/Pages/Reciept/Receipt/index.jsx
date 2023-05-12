import React from "react";

function Receipt() {
    return (
        <>
            <div className=' sm:px-5 xl:px-10 py-5 h-full'>
                <div className=' py-5 px-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>Pay EMI</h1>
                </div>
                <div className="flex justify-center items-center">
                    <div className="border-4 border-[#0d0d48] w-[57%] rounded-2xl px-4 py-4">
                        <div className="flex justify-between items-center">
                            <div className="bg-[#0d0d48] uppercase px-3 rounded-md text-white font-roboto py-1 text-base">
                                Customer EMI Receipt
                            </div>
                            <div className="text-[#0d0d48] font-roboto font-semibold">
                                Receipt No : <span className="text-black">1009</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Receipt