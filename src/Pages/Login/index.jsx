import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import image from "../../../public/7xm.xyz861683.jpg"

const signUpSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().required("Please enter password")
});


const initialValues = {
  email: "",
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
    // <div className='flex justify-center sm:justify-center  lg:justify-start xl:justify-between h-screen items-center  bg-white px-10 lg:px-14'>
    //   <div className="img lg:w-[500px] lg:h-[250px] xl:w-[650px] xl:h-[350px] 2xl:h-[500px] 2xl:w-[750px] hidden lg:block">
    //     <img src={image} alt="landing" className="" />
    //   </div>
    //   <div className=' px-0  lg:px-10 lg:py-10 xl:mx-20 2xl:mx-10 2xl:px-20  lg:relative 2xl:right-20   '>
    //     <div className='flex justify-center items-center mt-4 py-2 '>
    //       <div className='bg-blue-100 px-2 py-2 rounded-full'>
    //         <div className='bg-blue-400 px-3 py-2 rounded-full'>
    //           <div className='text-blue-900 '>
    //             <ion-icon name="lock-open-outline"></ion-icon>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className='py-3 space-y-3 2xl:w-full  '>
    //       <h1 className='text-3xl font-bold text-center uppercase'>Login</h1>
    //       <p className=' text-gray-500 text-center text-xs sm:text-base '>Wellcome back! Please enter your details.</p>

    //     </div>
    //     <div className="">
    //       <form action="" className='space-y-3' onSubmit={handleSubmit}>
    //         <div className='space-y-5 py-4 '>
    //           <div className='space-y-2'>
    //             <label htmlFor="Email" className='font-semibold text-base'>Email</label>
    //             <input type="Email"
    //               value={values.email}
    //               placeholder='Enter Your Email'
    //               autoComplete='off'
    //               name='email'
    //               id='email'
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500' />
    //             {errors.email && touched.email
    //               ?
    //               <p className='form-error text-red-600 text-sm font-semibold'>{errors.email}</p>
    //               :
    //               null}
    //           </div>
    //           <div className='space-y-2'>
    //             <label htmlFor="Password" className='font-semibold text-base'>Password</label>
    //             <input type="password"
    //               value={values.password}
    //               placeholder='Enter Your Password'
    //               autoComplete='off'
    //               name='password'
    //               id='password'
    //               onChange={handleChange}
    //               onBlur={handleBlur}
    //               className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500' />
    //             {errors.password && touched.password
    //               ?
    //               <p className='form-error text-red-600 text-sm font-semibold'>{errors.password}</p>
    //               :
    //               null}
    //           </div>
    //         </div>
    //         <Link to={"/ForgetPassword"}>
    //           <div className=' flex justify-end items-end'>
    //             <h1 className='text-sm font-semibold text-blue-500 cursor-pointer'>Forget Password?</h1>
    //           </div>
    //         </Link>
    //         <div className='py-1'>

    //           <button type='submit' className='py-2  uppercase bg-blue-500 hover:shadow-none hover:border-blue-500 border-blue-200 border hover:bg-white hover:text-blue-500 duration-500 shadow-sm font-sans shadow-blue-200 px-20 rounded-md w-full text-white font-semibold text-base'>
    //             Submit
    //           </button>
    //         </div>
    //       </form>


    //     </div>
    //   </div>
    // </div>
    <div className='flex justify-start h-screen items-center  bg-white  lg:space-x-32 xl:space-52 2xl:space-x-0'>
    <div className="img 2xl:w-2/3  hidden lg:block">
        <img src={image} alt="landing" className="" />
    </div>

    <div className=' 2xl:w-[27%] px-5 mt-4 sm lg:mt-0  '>
        <div className=' space-y-3  '>
            <h1 className='text-3xl font-bold text-center uppercaseblue-500 uppercase text-blue-500'>Login</h1>
            <p className=' text-gray-500 text-center text-xs sm:text-base '>Wellcome back! Please enter your details.</p>
        </div>
        <form action="" className='space-y-3' onSubmit={handleSubmit}>
            <div className='space-y-5 py-4 '>
                <div className='space-y-2'>
                    <label htmlFor="Email" className='font-semibold text-base'>Email</label>
                    <input type="Email"
                        value={values.email}
                        placeholder='Enter Your Email'
                        autoComplete='off'
                        name='email'
                        id='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500' />
                    {errors.email && touched.email
                        ?
                        <p className='form-error text-red-600 text-sm font-semibold'>{errors.email}</p>
                        :
                        null}
                </div>
                <div className='space-y-2'>
                    <label htmlFor="Password" className='font-semibold text-base'>Password</label>
                    <input type="password"
                        value={values.password}
                        placeholder='Enter Your Password'
                        autoComplete='off'
                        name='password'
                        id='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='w-full rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500' />
                    {errors.password && touched.password
                        ?
                        <p className='form-error text-red-600 text-sm font-semibold'>{errors.password}</p>
                        :
                        null}
                </div>
            </div>
            <Link to={"/ForgetPassword"}>
                <div className=' flex justify-end items-end'>
                    <h1 className='text-sm underline font-semibold text-blue-500 cursor-pointer'>Forget Password?</h1>
                </div>
            </Link>
            <div className='py-1'>

                <button type='submit' className='py-2  uppercase bg-blue-500 hover:shadow-none hover:border-blue-500 border-blue-500 border hover:bg-white hover:text-blue-500 duration-500 shadow-sm font-sans shadow-blue-500 px-20 rounded-md w-full text-white font-semibold text-base'>
                    Submit
                </button>
            </div>
        </form>
        <div className='text-center mt-5 text-slate-500'>
            Don't have an account?
            <Link to={"/Registration"}>
                <span className='hover:text-black font-semibold cursor-pointer text-blue-500 px-2'>Create an account</span>
            </Link>
        </div>

    </div>
</div>
  )
}

export default Login
