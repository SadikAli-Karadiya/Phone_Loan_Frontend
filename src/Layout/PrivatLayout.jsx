import React from 'react'
import Sidebar from '../Component/Menu/Sidebar'
import { AiFillCloseCircle } from "react-icons/ai"
import { FaUserLock } from "react-icons/fa"

function PrivatLayout() {
  const [model, setModel] = React.useState(true);

  return (
    <>
      <div className='relative'>
        {/* Add New Class Model */}
        {/* {model && (
          <div className="absolute w-full h-full  z-30 ">
            <div className="flex justify-center items-center opacity-100 ">
              <div className="h-full mx-auto opacity-100 shadow-2xl rounded mt-10 2xl:mt-24  bg-white w-1/3 z-50">
                <div className="">
                  <div className="flex justify-end ">
                    <button
                      onClick={(e) => {
                        setModel(!model);
                        handleClick();
                      }}
                      className="absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-red-700"
                    >
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className="mt-7">
                    <div className=' space-y-3  '>
                      <h1 className='text-3xl font-bold text-center uppercaseblue-500  text-blue-500'>Enter PIN</h1>
                      <p className=' text-center text-xs sm:text-base '>Wellcome back! Please enter your PIN.</p>
                    </div>
                    <form action="" className='px-10 py-5'>
                      <div className='py-1 flex flex-col justify-center items-center '>
                        <div className='flex flex-col  w-full space-y-2'>
                          <input type="text"
                            className="rounded-md py-2 px-3 w-full bg-slate-100 focus:bg-white outline-blue-200"
                            placeholder="Enter your fist name " />
                        </div>
                        <button type='submit' className='py-2 my-5 w-full uppercase bg-blue-500 hover:shadow-none hover:border-blue-500 border-blue-500 border hover:bg-white hover:text-blue-500 duration-500 shadow-sm font-sans shadow-blue-500 px-20 rounded-md text-white font-semibold text-base'>
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
      {/* <div
        className={`bg-slate-100 ${model && "opacity-20"}`}
      > */}
        <Sidebar />
      {/* </div> */}
    </>
  )
}

export default PrivatLayout