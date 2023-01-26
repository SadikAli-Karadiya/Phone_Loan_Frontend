import React from "react"
import image from "../../../public/6368592.jpg"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import "yup-phone"
import { useNavigate } from "react-router-dom";



const signUpSchema = Yup.object({
  firstname: Yup.string().required("Please enter your first name"),
  lastname: Yup.string().required("Please enter your last name"),
  email: Yup.string().email().required("Please enter your email"),
  // phone: Yup.string().phone(null, true, "Invalid phone number").required("Please enter your phone number"),
  password: Yup.string().required("Please enter password"),
  confirm_password: Yup.string().required().oneOf([Yup.ref("password"), null], "Confirm Password must match"),
});


const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
  confirm_password: "",
};




function Registration() {

  const notify = () => toast("Registration Success!!");
  const navigate = useNavigate();

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit(res) {
      console.log(res, "Res")
      console.log("hello")
      alert("done")
      notify()
      navigate("/")
    }
  })

  console.log(errors, "formik")


  return (
    <>
      <div className="min-h-screen flex justify-center items-center px-10 sm:px-20  bg-white ">
        <div className="flex xl:flow-row justify-center items-center">
          <div className=" 2xl:w-[50%]  xl:block hidden">
            <img src={image} alt="" />
          </div>
          <div className=" w-[100%] xl:px-10 py-10 xl:mx-10 2xl:w-[50%]">
            <h1 className='text-blue-500 text-3xl text-center font-bold py-5'>Sign Up</h1>
            <div className="py-5">
              <form action="" className="space-y-5" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                  <div className="firstname flex flex-col space-y-2 w-full ">
                    <label htmlFor="Firstname">First Name</label>
                    <input type="text"
                      name="firstname"
                      value={values.firstname}
                      id="firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                      placeholder="Enter your fist name " />
                    {errors.firstname && touched.firstname
                      ?
                      <p className='form-error text-red-600 text-sm font-semibold'>{errors.firstname}</p>
                      :
                      null}
                  </div>
                  <div className="lastname flex flex-col space-y-2 w-full ">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text"
                      name="lastname"
                      id="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                      placeholder="Enter your last name " />
                    {errors.lastname && touched.lastname
                      ?
                      <p className='form-error text-red-600 text-sm font-semibold'>{errors.lastname}</p>
                      :
                      null}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                  <div className="email flex flex-col space-y-2 w-full ">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                      placeholder="Enter your email " />
                    {errors.email && touched.email
                      ?
                      <p className='form-error text-red-600 text-sm font-semibold'>{errors.email}</p>
                      :
                      null}
                  </div>
                  {/* <div className="phone flex flex-col space-y-2 w-full ">
                    <label htmlFor="phone">Phone</label>
                    <input type="text"
                      name="phone"
                      id="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                      placeholder="Enter your phone number " />
                    {errors.phone && touched.phone
                      ?
                      <p className='form-error text-red-600 text-sm font-semibold'>{errors.phone}</p>
                      :
                      null}
                  </div> */}
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center w-full md:space-y-0 md:space-x-5 space-y-5 lg:space-x-7">
                  <div className="password flex flex-col space-y-2 w-full ">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                      placeholder="Enter password " />
                    {errors.password && touched.password
                      ?
                      <p className='form-error text-red-600 text-sm font-semibold'>{errors.password}</p>
                      :
                      null}
                  </div>
                  <div className="confirmpassword flex flex-col space-y-2 w-full ">
                    <label htmlFor="confirm password">Confirm password</label>
                    <input type="password"
                      name="confirm_password"
                      id="confirm_password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                      placeholder="Enter confirm password " />
                    {errors.confirm_password && touched.confirm_password
                      ?
                      <p className='form-error text-red-600 text-sm font-semibold'>{errors.confirm_password}</p>
                      :
                      null}
                  </div>
                </div>
                <div className="py-5">
                  <button type="submit" className="py-2   bg-blue-500 hover:shadow-none hover:border-blue-500 border-blue-500 border hover:bg-white hover:text-blue-500 duration-500 shadow-sm font-sans shadow-blue-500 px-20 rounded-md w-full text-white font-semibold text-base">
                    Create Account
                  </button>
                </div>
                <p className="text-slate-500 flex justify-center items-center">Already have an account?
                  <Link to={"/"}>
                    <span className="text-blue-500  font-medium cursor-pointer px-1">Log in</span>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
