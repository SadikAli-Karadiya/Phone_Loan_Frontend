import React from "react"
import image from "../../../public/6368592.jpg"
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useQuery } from 'react-query'
import { SignUp } from '../../utils/apiCalls';


const signUpSchema = Yup.object({
  username: Yup.string().required("Please Enter Your Username"),
  password: Yup.string().required("Please Enter Password")
});


const initialValues = {
  username: "",
  password: "",
};

function Registration() {

  const navigate = useNavigate();

  const { values, errors, handleBlur, touched, resetForm ,  handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    async onSubmit(data) {
      try {
        const response = await SignUp(data)
        toast.success(response.data.message);
        navigate("/")
        resetForm({ values: "" })
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  })

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <section className="h-full w-full flex justify-center items-center ">
        <div className="flex w-full h-screen overflow-hidden">
          <div className="hidden lg:flex flex-1 justify-center items-center sm:hidden ">
            <img src="/6368592.jpg" alt="" className="ml-28" />
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            <section className="h-full w-full flex justify-center items-center">
              <div className="login">
                <div className="mb-10">
                  <h2 className="text-[27px] text-[#0F0673] font-bold text-center tracking-wider">
                    SignUp
                  </h2>
                </div>
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="flex flex-col justify-center items-center"
                >
                  <div className='flex flex-col space-y-5'>
                    <div className="flex flex-col">
                      <input
                        type="text"
                        className='border-2 outline-none bg-white focus:bg-white rounded-md h-[38px] w-64 px-2'
                        placeholder="Username"
                        name="username"
                        id="lastname"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.username && touched.username
                        ?
                        <p className='form-error text-red-600 text-xs mt-1 font-semibold'>{errors.username}</p>
                        :
                        null}
                    </div>
                    <div className="flex flex-col">
                      <input
                        type="password"
                        className='border-2 bg-white outline-none rounded-md h-[38px] w-64 px-2'
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password
                        ?
                        <p className='form-error text-red-600 text-xs mt-1 font-semibold'>{errors.password}</p>
                        :
                        null}
                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="border-2 bg-[#300aca] w-64 py-2 rounded-md hover:bg-[#7D97F4]"
                    >
                      <span className="text-white">
                       Submit
                      </span>
                    </button>
                  </div>
                </form>
                {/* <div className="mt-5 flex justify-center">
                                    <span className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                        Forgot Password?
                                    </span>
                                </div> */}
                <div className="mt-5 flex justify-center">
                  <span className="text-sm text-gray-500 cursor-pointer mr-1">
                    Already have an account? 
                  </span>
                  <span
                    onClick={handleClick}
                    className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                    Login
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Registration
