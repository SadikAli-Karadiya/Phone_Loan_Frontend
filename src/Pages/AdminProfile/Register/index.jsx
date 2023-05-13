import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { adminSchema, initialValues } from "../../../Component/AdminSchema"

export const Addadmin = () => {

  const { values, resetForm, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: adminSchema,
      onSubmit: (values) => {
        resetForm({values : ""})
      },
    });


  return (
    <div className="flex justify-start items-start  w-full h-full p-5 ">
      <div className=" h-full mx-auto  rounded  w-3/4 z-50 mt-2 drop-shadow-lg bg-white ">
        <div className="">
          <h1 className="text-2xl text-[#0d0d48] font-bold text-darkblue-500 text-center py-7 ">
            Admin Registration
          </h1>
          <form
            className="flex justify-center items-center "
            onSubmit={handleSubmit} >
            <div className=" w-full grid grid-cols-1 rounded-lg truncate pb-5  ">
              <div className=" flex flex-col items-center">
                <div className="flex lg:flex-row gap-4 ">
                  <div className="username">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Username
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Your username"
                        className='xl:w-52 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                        name="username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.username && touched.username
                          ? errors.username
                          : ""}
                      </span>
                    </label>
                  </div>
                  <div className="Password">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Password
                      </span>
                      <input
                        type="password"
                        placeholder="Enter Your Password"
                        className='xl:w-52 2xl:w-60 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm 
                          placeholder-slate-400 outline-none'
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.password && touched.password
                          ? errors.password
                          : ""}
                      </span>
                    </label>
                  </div>
                  <div className="pin">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Security Pin
                      </span>
                      <input
                        type="input"
                        placeholder="Enter Security Pin"
                        className='xl:w-52 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm
                           placeholder-slate-400 outline-none'
                        name="pin"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.pin}
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.pin && touched.pin
                          ? errors.pin
                          : ""}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex lg:flex-row gap-4 ">
                  <div className="fullname">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Full Name
                      </span>
                      <input
                        type="text"
                        placeholder="First Name, Middle Name, Last Name"
                        className='xl:w-52 2xl:w-60 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm 
                          shadow-sm placeholder-slate-400 outline-none'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.full_name}
                        name="full_name"
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.full_name && touched.full_name
                          ? errors.full_name
                          : null}
                      </span>
                    </label>
                  </div>
                  <div className="email">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Email
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        className='xl:w-52 2xl:w-60 mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm 
                          shadow-sm placeholder-slate-400 outline-none '
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        name="email"
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.email && touched.email
                          ? errors.email
                          : null}
                      </span>
                    </label>
                  </div>
                  <div className="whatsappno">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        WhatsApp No
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Your WhatsApp No"
                        className='xl:w-52 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm 
                          shadow-sm placeholder-slate-400 outline-none'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.whatsapp_no}
                        name="whatsapp_no"
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.whatsapp_no && touched.whatsapp_no
                          ? errors.whatsapp_no
                          : null}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex lg:flex-row gap-4">
                  <div className="mobileno">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Mobile No
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Your Mobile No"
                        className='xl:w-52 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm
                        shadow-sm placeholder-slate-400 outline-none'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.alternate_mobile}
                        name="alternate_mobile"
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.alternate_mobile && touched.alternate_mobile
                          ? errors.alternate_mobile
                          : null}
                      </span>
                    </label>
                  </div>
                  <div className="dateofbirth">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Date Of Birth
                      </span>
                      <input
                        type="date"
                        className='xl:w-52 2xl:w-60 hover:cursor-pointer mt-1 block  px-3 py-2 bg-white border  border-slate-300 
                          rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                        name="dateofbirth"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dateofbirth}
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.dateofbirth && touched.dateofbirth
                          ? errors.dateofbirth
                          : null}
                      </span>
                    </label>
                  </div>
                  <div className="gender">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Gender
                      </span>
                      <div
                        className='xl:w-52 2xl:w-60 border border-slate-300 mt-1  rounded-md h-10 flex justify-center items-center 
                          space-x-5 outline-none'
                      >
                        <div className="male ">
                          <label htmlFor="gender" className="m-2">
                            Male
                          </label>
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            checked={values.gender == "m"}
                            value={"m"}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="  hover:cursor-pointer"
                          />
                        </div>
                        <div className="female">
                          <label htmlFor="gender" className="m-2">
                            Female
                          </label>
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            checked={values.gender == "f"}
                            value={"f"}
                            onChange={handleChange}
                            onBlur={handleBlur} className=" hover:cursor-pointer"
                          />
                        </div>
                      </div>
                    </label>
                    <span className="text-xs font-semibold text-red-600 px-1">
                      {errors.gender && touched.gender
                        ? errors.gender
                        : null}
                    </span>
                  </div>
                </div>
                <div className="flex lg:flex-row gap-4">
                  <div className="qualification">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Qualification
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Your Qualification"
                        className='xl:w-52 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm 
                      shadow-sm placeholder-slate-400 outline-none'
                        name="qualification"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.qualification}
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.qualification && touched.qualification
                          ? errors.qualification
                          : null}
                      </span>
                    </label>
                  </div>
                  <div className="address">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Address
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Your Address"
                        className='xl:w-52 2xl:w-60 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm
                    placeholder-slate-400 outline-none'
                        name="address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.address && touched.address
                          ? errors.address
                          : null}
                      </span>
                    </label>
                  </div>
                  <div className="dateofjoining">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Date Of Joining
                      </span>
                      <input
                        type="date"
                        name="dateofjoining"
                        className='xl:w-52 2xl:w-60 hover:cursor-pointer mt-1 block  px-3 py-2 bg-white border 
                           border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dateofjoining}
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.dateofjoining && touched.dateofjoining
                          ? errors.dateofjoining
                          : null}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex lg:flex-row gap-10">
                  <div className="btn mt-5 flex justify-center w-60">
                    <button
                      type="button"
                      className="bg-[#0d0d48] hover:bg-white border-2 hover:border-[#0d0d48] text-white hover:text-[#0d0d48] font-medium h-11 w-28 rounded-md tracking-wider"
                      onChange={resetForm}
                    >
                      Clear
                    </button>
                    <button
                      type="submit"
                      className="bg-[#0d0d48]  hover:bg-white border-2 flex justify-center items-center  hover:border-[#0d0d48] text-white hover:text-[#0d0d48] font-medium h-11 w-28 rounded-md tracking-wider"
                    >
                      <h1 className="">
                        {/* {createPost.isLoading
                              ? "Saving..."
                              : createPost.isSuccess
                              ? "Saved !"
                              : createPost.isError
                              ? "Error"
                              : "Submit"} */}
                        Submit
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
