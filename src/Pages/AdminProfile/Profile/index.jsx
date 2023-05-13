import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";


let adminSchema = Yup.object({

  full_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(2, "Minimum 2 characters are required")
    .required("Please Enter Full Name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

  email: Yup.string().email()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("Please Enter Email"),


  pin: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(4, "Please enter valid pin")
    .max(4, "Please enter valid pin")
    .required("Please Enter PIN"),

  whatsapp_no: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(10, "Please enter valid mobile no")
    .max(10, "Please enter valid mobile no")
    .required("Please Enter Mobile Number"),

  alternate_mobile: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(10, "Please enter valid mobile no").max(10, "Please Enter Valid Mobile No"),

  dateofbirth
    : Yup.date()
      .max(new Date(), 'Please select valid DOB')
      .required("Please enter your date of birth")
      .nullable(),

  gender: Yup.string().required("Please Select Gender"),

  address: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("Please Enter Address"),

  qualification: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("Please Enter Qualification"),


  dateofjoining: Yup.date()
    .max(new Date(), 'Please select valid date')
    .required("Please Enter Date")
    .nullable(),
});


const Updateprofile = () => {
  const [isEdiable, setEditable] = React.useState(false);
  const [isLoadingOnSubmit, setIsLoadingOnSubmit] = useState(false);
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState(true);
  const initialValues = {
    full_name: "",
    email: "",
    whatsapp_no: "",
    alternate_mobile: "",
    security_pin: "",
    address: "",
    dob: "",
    pin : "",
    dateofbirth : "",
    qualification: ""
  };

  const { values, resetForm, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: adminSchema,
      onSubmit: (values) => {
        resetForm({ values: "" })
      },
    });

  function handleedit(e) {
    e.preventDefault();
    setIsEnable(false);
    setToggle(true);
  }

  function handleCancel(e) {
    e.preventDefault();
    resetForm({ e: "" })
    setIsEnable(true);
    setToggle(false);
  }

  return (
    <>
      {/* {admin ? ( */}
      <section className="">
        <form
          className="flex justify-center items-center  w-full h-full"
          onSubmit={handleSubmit}
        >
          <div className="w-2/3 grid grid-cols-1 rounded-lg drop-shadow-md truncate bg-white p-10 my-5">
            <div className="title mb-5">
              <h1 className="text-3xl text-center font-medium text-[#020D46]">
                Update Profile
              </h1>
            </div>
            <div className=" flex flex-col items-center ">
              <div div className="flex lg:flex-row md:flex-col gap-4 mt-7">
                <div className="fullname">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Full Name
                    </span>
                    <input
                      type="text"
                      name="full_name"
                      disabled={isEnable}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.full_name}
                      placeholder="First Name, Middle Name, Last Name"
                      className='w-72 mt-1 block  px-3 py-2 bg-white border  border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                    />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.full_name && touched.full_name
                      ? errors.full_name
                      : null}
                  </span>
                </div>
                <div className="email">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Email
                    </span>
                    <input
                      type="text"
                      disabled={isEnable}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      name="email"
                      placeholder="Enter Your Email"
                      className='w-72 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm 
                        shadow-sm placeholder-slate-400 outline-none'
                    />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.email && touched.email
                      ? errors.email
                      : null}
                  </span>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-4">
                <div className="whatsappno">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      WhatsApp No
                    </span>
                    <input
                      type="text"
                      disabled={isEnable}
                      placeholder="Enter Your WhatsApp No"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.whatsapp_no}
                      name="whatsapp_no"
                      className='w-72 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm 
                        shadow-sm placeholder-slate-400 outline-none' />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.whatsapp_no && touched.whatsapp_no
                      ? errors.whatsapp_no
                      : null}
                  </span>
                </div>
                <div className="mobileno">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Mobile No
                    </span>
                    <input
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.alternate_mobile}
                      name="alternate_mobile"
                      placeholder="Enter Your Mobile No"
                      className='w-72 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm 
                        shadow-sm placeholder-slate-400 outline-none'/>
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.alternate_mobile && touched.alternate_mobile
                      ? errors.alternate_mobile
                      : null}
                  </span>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-4">
                <div className="security_pin">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Security pin
                    </span>
                    <input
                      type="text"
                      disabled={isEnable}
                      name="pin"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.pin}
                      placeholder="Enter Your Security pin"
                      className='w-72 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm 
                        shadow-sm placeholder-slate-400 outline-none'/>
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.pin && touched.pin
                      ? errors.pin
                      : ""}
                  </span>
                </div>
                <div className="address">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Address
                    </span>
                    <input
                      type="text"
                      disabled={isEnable}
                      name="address"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                      placeholder="Enter Your Address"
                      className='w-72 mt-1 block w-full px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm
                         placeholder-slate-400 outline-none' />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.address && touched.address
                      ? errors.address
                      : ""}
                  </span>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-4">
                <div className="dateofbirth">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Date Of Birth
                    </span>
                    <input
                      disabled={isEnable}
                      type="date"
                      name="dateofbirth"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dateofbirth}
                      className='w-72 hover:cursor-pointer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'/>
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.dateofbirth && touched.dateofbirth
                      ? errors.dateofbirth
                      : null}
                  </span>
                </div>
                <div className="qualification">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Qualification
                    </span>
                    <input
                      disabled={isEnable}
                      type="text"
                      name="qualification"
                      placeholder="Enter Qualification"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.qualification}
                      className='w-72 hover:cursor-pointer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'/>
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.qualification && touched.qualification
                      ? errors.qualification
                      : null}
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="btn flex items-center justify-end w-72">
                  {!toggle ? (
                    <button
                      type="button"
                      onClick={handleedit}
                      className="py-2 px-8 w-full gap-2 bg-[#0d0d48]  hover:bg-white border-2 hover:border-[#0d0d48] text-white hover:text-[#0d0d48] font-medium rounded-md tracking-wider flex justify-center items-center"
                    >
                      <FaUserEdit className="text-xl" />
                      Edit
                    </button>
                  ) : null}
                  {toggle ? (
                    <div className="flex justify-center items-center w-full">
                      <div className="flex w-full justify-center items-center space-x-3">
                        <button
                          type="button"
                          onClick={handleCancel}
                          className="py-2 px-4 gap-2 bg-[#0d0d48]  hover:bg-white border-2 hover:border-[#0d0d48] text-white hover:text-[#0d0d48] font-medium rounded-md tracking-wider flex justify-center items-center"
                        >
                          <FaUserEdit className="text-xl" />
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={isLoadingOnSubmit}
                          className={`py-2 px-3 gap-2 bg-[#0d0d48]  hover:bg-white border-2 hover:border-[#0d0d48] text-white 
                          ${isLoadingOnSubmit ? "opacity-40" : "opacity-100"
                            } hover:text-[#0d0d48] font-medium rounded-md tracking-wider flex justify-center items-center`}
                        >
                          <FaUserEdit className="text-xl" />
                          {isLoadingOnSubmit ? "Loading..." : "SUBMIT"}
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      {/* ) : (
        "......"
      )} */}
    </>
  );
};

export default Updateprofile;
