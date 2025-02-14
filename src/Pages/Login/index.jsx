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
                <div className="flex w-full h-screen overflow-hidden">
                    <div className="xl:flex flex-1 justify-center items-center hidden ">
                        <img src="/images/login.jpg" alt="" />
                    </div>
                    <div className="flex flex-1 flex-col justify-start mt-5">
                        <div className="flex  justify-end xl:justify-end items-end px-3 sm:pr-10">
                            <img
                                src="/images/logo.png"
                                alt=""
                                className=" w-28 lg:w-36"
                                id="logo"
                            />
                        </div>
                        <section className="py-20 px-14 mt-16 xl::ml-20 flex justify-center items-center xl::w-2/3">
                            <div className="login ">
                                <div className="mb-10">
                                    <h2 className="text-[24px] text-slate-600 font-bold text-center tracking-wider">
                                        Let's get you started
                                    </h2>
                                </div>
                                <form
                                    action=""
                                    onSubmit={handleSubmit}
                                    className="flex flex-col justify-center items-center "
                                >
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
                                    <div className="mt-10">
                                        <button
                                            type="submit"
                                            className=" bg-[#0F0673] w-64 py-2 rounded-md "
                                        >
                                            <span className="text-white text-[15px] uppercase font-semibold">
                                                Log In
                                            </span>
                                        </button>
                                    </div>
                                </form>
                                {/* <div className="mt-5 flex justify-center">
                                    <span className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                        Forgot Password?
                                    </span>
                                </div> */}
                                {/* <div className="mt-5 flex justify-center">
                                    <span className="text-sm text-gray-500 cursor-pointer mr-1">
                                        Already have an account?
                                    </span>
                                    <span
                                        onClick={handleClick}
                                        className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
                                        Login
                                    </span>
                                </div> */}
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
