import React from "react"
import image from "../../../public/6368592.jpg"
import Registerform from "../../assets/Registerform"


function Registration() {

  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-10 sm:px-20  bg-white ">
        <div className="flex xl:flow-row justify-center items-center">
          <div className=" 2xl:w-[50%]  xl:block hidden">
            <img src={image} alt="" />
          </div>
          <div className=" w-[100%] xl:px-10 py-10 xl:mx-10 2xl:w-[50%]">
            <h1 className='text-blue-500 text-3xl text-center font-bold '>Sign Up</h1>
            <p className="text-center py-8 text-slate-400 font-medium">Start to manage your phone customer</p>
           <Registerform/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
