import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import image from "../../../public/7xm.xyz861683.jpg"

const signUpSchema = Yup.object({
    username: Yup.string().email().required("Please enter your email"),
    password: Yup.string().required("Please enter password")
});


const initialValues = {
    username: "",
    password: "",
};

function Login() {

    const notify = () => toast("Login Successfully!!");

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit(res) {
            console.log(res, "Res")
            notify()
        }
    })

    console.log(errors, "formik")


    return (
        <>
            <section className="h-full w-full flex justify-center items-center ">
                <div className="flex w-full h-screen overflow-hidden ">
                    <div className="hidden lg:flex flex-1 justify-center items-center sm:hidden">
                        <img src="/images/login.jpg" alt="" />
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-center  ">
                        <section className="h-full w-full flex justify-center items-center">
                            <div className="login">
                                <div className="mb-10">
                                    <h2 className="text-[27px] text-[#0F0673] font-bold text-center tracking-wider">
                                        Admin Login
                                    </h2>
                                </div>
                                <form
                                    action=""
                                    onSubmit={handleSubmit}
                                    className="flex flex-col justify-center items-center"
                                >
                                    <div className="mt-3 sm:px-5 flex flex-col">
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
                                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.username}</p>
                                            :
                                            null}
                                    </div>
                                    <div className="mt-3 flex flex-col">
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
                                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.password}</p>
                                            :
                                            null}
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className="border-2 bg-[#494BF5] w-64 py-2 rounded-md hover:bg-[#7D97F4]"
                                        >
                                            <span className="text-white">
                                                Login
                                            </span>
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-5 flex justify-center">
                                    <span className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                        Forgot Password?
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

export default Login
