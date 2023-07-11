import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaUserEdit } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Admindetails, UpdateAdmin } from "../../../utils/apiCalls"
import { useQuery, useMutation } from 'react-query'
import { PhoneContext } from "../../../PhoneContext";


let adminSchema = Yup.object({

  first_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(2, "Minimum 2 characters are required")
    .required("Please Enter First Name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

  last_name: Yup.string()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .min(2, "Minimum 2 characters are required")
    .required("Please Enter Last Name")
    .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

  username: Yup.string().email()
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    })
    .required("Please Enter Email"),

  password: Yup.string()
    .required("Please Enter Password")
    .test('trim', 'Must not contain leading or trailing spaces', (value) => {
      if (value) {
        return value.trim() === value;
      }
      return true;
    }),

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
});


const Updateprofile = () => {
  const [isEdiable, setEditable] = React.useState(false);
  const [isLoadingOnSubmit, setIsLoadingOnSubmit] = useState(false);
  const [toggle, setToggle] = React.useState(false);
  const navigate = useNavigate();
  const [isEnable, setIsEnable] = useState(true);
  const { user } = React.useContext(PhoneContext)
  const adminData = useQuery(['admin', user?.admin_id], () => Admindetails(user?.admin_id));
  const updateAdminData = useMutation(UpdateAdmin);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const AdminDetails = adminData?.data?.data?.SingleAdmin

  const initialValues = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    pin: "",
  };

  const { values, resetForm, touched, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: AdminDetails ? AdminDetails : initialValues,
      validationSchema: adminSchema,
      async onSubmit(data) {
        console.log(data)
        return
        isLoadingOnSubmit(true)
        // updateAdminData.mutate(data)
        isLoadingOnSubmit(false)
        toggle(false)
      },
    });

  function handleedit(e) {
    e.preventDefault();
    setIsEnable(false);
    setToggle(true);
  }

  function handleCancel(e) {
    e.preventDefault();
    resetForm()
    setIsEnable(true);
    setToggle(false);
  }

  React.useEffect(() => {
    if (updateAdminData.isSuccess) {
      toast.success(updateAdminData.data.data?.message);
      setIsEnable(true);
      setToggle(false)
    }
    else if (updateAdminData.isError) {
      toast.error(updateAdminData.error.response.data.message);
    }
  }, [updateAdminData.isSuccess, updateAdminData.data])

  return (
    <>
      <section className="">
        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <div className=" grid grid-cols-1 rounded-lg drop-shadow-md truncate bg-white p-10 mt-10">
            <div className="title mb-5">
              <h1 className="text-3xl text-center font-medium text-[#020D46]">
                Admin Profile
              </h1>
            </div>
            <div className=" flex flex-col items-center ">
              <div className="flex lg:flex-row md:flex-col gap-4 mt-7">
                <div className="fullname">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      First Name
                    </span>
                    <input
                      type="text"
                      name="first_name"
                      disabled={isEnable}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.first_name}
                      placeholder="First Name, Middle Name, Last Name"
                      className='w-72 mt-1 block  px-3 py-2 bg-white border  border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                    />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.first_name && touched.first_name
                      ? errors.first_name
                      : null}
                  </span>
                </div>
                <div className="fullname">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Last Name
                    </span>
                    <input
                      type="text"
                      name="last_name"
                      disabled={isEnable}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                      placeholder="First Name, Middle Name, Last Name"
                      className='w-72 mt-1 block  px-3 py-2 bg-white border  border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                    />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.last_name && touched.last_name
                      ? errors.last_name
                      : null}
                  </span>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col gap-4 ">
                <div className="fullname">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Username
                    </span>
                    <input
                      type="text"
                      name="username"
                      disabled={isEnable}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.user?.username}
                      placeholder="First Name, Middle Name, Last Name"
                      className='w-72 mt-1 block  px-3 py-2 bg-white border  border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                    />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.username && touched.username
                      ? errors.username
                      : null}
                  </span>
                </div>
                <div className="fullname">
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">
                      Password
                    </span>
                    <input
                      type="password"
                      name="password"
                      disabled={isEnable}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.user?.password}
                      placeholder="First Name, Middle Name, Last Name"
                      className='w-72 mt-1 block  px-3 py-2 bg-white border  border-slate-300 
                        rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                    />
                  </label>
                  <span className="text-xs font-semibold text-red-600 px-1">
                    {errors.password && touched.password
                      ? errors.password
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
                          onSubmit={handleSubmit}
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
    </>
  );
};

export default Updateprofile;
