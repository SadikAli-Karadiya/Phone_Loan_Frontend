import React from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useQuery } from 'react-query'
import { SignIn } from '../../utils/apiCalls';
import { PhoneContext } from '../../PhoneContext'

const signUpSchema = Yup.object({
    username: Yup.string().required("Please Enter Your Username"),
    password: Yup.string().required("Please Enter Password")
});


const initialValues = {
    username: "",
    password: "",
};

function Login() {

    const navigate = useNavigate();
    const { login } = React.useContext(PhoneContext)

    const { values, errors, handleBlur, touched, resetForm, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        async onSubmit(data) {
            try {
                const response = await SignIn(data)
                toast.success(response.data.message);
                localStorage.setItem('token', response?.data?.token);
                login(response?.data?.token)
                resetForm({ values: "" })
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
    })


    function handleClick() {
        navigate("/SignUp");
    }

    return (
        <>
            <section className="h-full w-full flex justify-center items-center ">
                <div className="flex flex-col w-full h-screen overflow-hidden">
                    <div className='flex items-center justify-between px-4 lg:px-14 xl:px-60 py-3'>
                        <img
                            src="/images/logo.png"
                            alt=""
                            className=" w-28 lg:w-36"
                            id="logo"
                        />
                        <div className='space-x-5 flex flex-col sm:flex-row justify-end items-center'>
                            <span className='font-semibold text-slate-600 text-[15px] sm:text-sm hidden sm:block'>Don't have an account?</span>
                            <button
                                onClick={handleClick}
                                className='bg-[#0F0673] text-white text-xs lg:text-sm rounded-full font-semibold px-5 py-2'>Sign Up</button>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-center items-center">
                        <section className=" px-14 py-14 flex justify-center items-center sm:shadow-xl rounded-xl sm:shadow-blue-100">
                            <div className="login w-72">
                                <div className="mb-10">
                                    <h2 className="text-[24px] text-slate-500 font-bold text-left tracking-wider">
                                        Login
                                    </h2>
                                </div>
                                <form
                                    action=""
                                    onSubmit={handleSubmit}
                                    className="flex flex-col justify-center items-center w-full ">
                                    <div className='flex flex-col space-y-6 w-full'>
                                        <div className="flex flex-col">
                                            <label htmlFor="" className='text-slate-600 text-[15px]'>Username</label>
                                            <input
                                                type="text"
                                                className='bg-blue-50 outline-none rounded-md h-[38px] w-full px-2'
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
                                            <label htmlFor="" className='text-slate-600 text-[15px]'>Password</label>
                                            <input
                                                type="password"
                                                className='bg-blue-50 outline-none rounded-md h-[38px] w-full px-2'
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
                                    <div className="mt-6">
                                        <button
                                            type="submit"
                                            onSubmit={handleSubmit}
                                            className="border-2 bg-[#0F0673] w-64 py-2 rounded-md ">
                                            <span className="text-white font-semibold">
                                                Submit
                                            </span>
                                        </button>
                                    </div>
                                </form>
                                <div className="mt-8 flex justify-center space-x-1">
                                    <span className='text-sm text-slate-700'>Don't have an account? </span>
                                    <span
                                        onClick={handleClick}
                                        className="text-sm font-semibold text-[#0F0673] cursor-pointer ">
                                        Sign Up
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
