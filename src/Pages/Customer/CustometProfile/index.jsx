import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { NewPhoneSchema, NewPhoneValues } from "../../../Component/AddNewsPhoneSchema";
import { customerSchema, initialValues } from "../../../Component/CustomerSchema";
import "../../Customer/CustomerRegister/Customerform.css"
import { FaUserEdit } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { AiFillCloseCircle } from "react-icons/ai";
import { BiFolderPlus } from "react-icons/bi";


function CustomerProfile() {
    const navigate = useNavigate();
    const defaultImage = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683614366~exp=1683614966~hmac=e4712c90f5b79a2388c0152ab9a4897eb2b2fb866c9c2e4635dc52938019b159";
    const [img, setImg] = React.useState(defaultImage);
    const [photo, setPhoto] = React.useState("");
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);
    const [isEnable, setIsEnable] = React.useState(true);
    const [model, setModel] = React.useState(false);

    const { values, touched, resetForm, errors, handleChange, handleSubmit, handleBlur } =
        useFormik({
            initialValues: initialValues,
            validationSchema: customerSchema,
            onSubmit: (values) => {
                setIndex(2);
                dispatch(setBasicInfoForm({ ...values, logo: photo }));
            },
        });

    function handleImageUpload(e) {
        setPhoto(() => e.target.files[0]);
        setImg(URL.createObjectURL(e.target.files[0]));
    }

    function handleedit(e) {
        e.preventDefault();
        resetForm({ e: "" })
        setIsEnable(false);
        setToggle(true);
    }

    function handleCancel(e) {
        e.preventDefault();
        resetForm({ e: "" })
        setIsEnable(true);
        setToggle(false);
    }


    const handleClick = (e) => {
        resetForm({ values: "" })
    };


    return (
        <>
            <div className="relative">
                {model && (
                    <div className="w-full h-full bg-black  ">
                        <div className="flex justify-center shadow-2xl  ">
                            <div className="absolute sm:mx-0 xs:w-[80%] sm:w-[60%] md:w-[60%] lg:w-[65%] 2xl:w-[40%] opacity-100 shadow-2xl rounded xs:top-14 sm:top-10 md:top-10 lg:top-10 xl:top-10 bg-white z-50 ">
                                <div className="">
                                    <div className="flex justify-end ">
                                        <button
                                            onClick={() => {
                                                resetForm()
                                                setModel(false);
                                            }}
                                            className="absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-[#571217] ">
                                            <AiFillCloseCircle />
                                        </button>
                                    </div>
                                    <div className="  rounded-md  my-5 xl:py-4  px-5 xl:px-10">
                                        <h1 className="font-semibold text-[#0d0d48] text-lg lg:text-xl pb-5 ">
                                            Add New Phone
                                        </h1>
                                        <form action="">
                                            <div className="flex flex-col justify-center items-center w-full xl:gap-1">
                                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                                                    <div className="date w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Date *
                                                            </span>
                                                            <input
                                                                type="date"
                                                                name="date"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.date}
                                                                className='w-full hover:cursor-pointer mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.date && touched.date ? errors.date : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="selectinst w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Company *
                                                            </span>
                                                            <select
                                                                name="company"
                                                                id="company"
                                                                value={values.company}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                                                                <option value="">Select Company</option>
                                                                <option value="Oppo">Oppo</option>
                                                                <option value="Vivo">Vivo</option>
                                                            </select>
                                                        </label>
                                                        <span className="text-xs font-semibold text-red-600 px-1">
                                                            {errors.company && touched.company ? errors.company : null}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                                                    <div className="selectinst w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Model *
                                                            </span>
                                                            <select
                                                                name="model"
                                                                id="model"
                                                                value={values.model}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'

                                                            >
                                                                <option value="">Select Model</option>
                                                                <option value="F17">F17</option>
                                                            </select>
                                                        </label>
                                                        <span className="text-xs font-semibold text-red-600 px-1">
                                                            {errors.model && touched.model ? errors.model : null}
                                                        </span>
                                                    </div>
                                                    <div className="dp w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Price *
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="price"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.price}
                                                                placeholder="Enter Down Payment"
                                                                className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.price && touched.price ? errors.price : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                                                    <div className="selectinst w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Installment *
                                                            </span>
                                                            <select
                                                                name="installment"
                                                                id="installment"
                                                                value={values.installment}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                                                                <option value="">Select Installment</option>
                                                                <option value="2">For 2 Month</option>
                                                                <option value="3">For 3 Month</option>
                                                            </select>
                                                        </label>
                                                        <span className="text-xs font-semibold text-red-600 px-1">
                                                            {errors.installment && touched.installment ? errors.installment : null}
                                                        </span>
                                                    </div>
                                                    <div className="dp w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Down Payment *
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="dp"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.dp}
                                                                placeholder="Enter Down Payment"
                                                                className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.dp && touched.dp ? errors.dp : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                                                    <div className="discount w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Discount
                                                            </span>
                                                            <input
                                                                type="text" id='discount'
                                                                name="discount"
                                                                placeholder="Enter Your Discount"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.discount}
                                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.discount && touched.discount
                                                                    ? errors.discount
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="totalfee w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Total Fee
                                                            </span>
                                                            <input
                                                                type="text" id='totalfee'
                                                                name="net_payable"
                                                                disabled={true}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.net_payable}
                                                                placeholder="Enter Net Payable Amount"
                                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.net_payable && touched.net_payable
                                                                    ? errors.net_payable
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex py-2 justify-center items-center ">
                                                <button type="button" disabled={isLoadingOnSubmit} className="px-8 mr-4 h-10  border-[#0d0d48] border-2 hover:bg-[#0d0d48] text-[#0d0d48] hover:text-white font-medium rounded-md tracking-wider flex justify-center items-center" onClick={handleClick}>
                                                    CLEAR
                                                </button>
                                                <button type="submit" disabled={isLoadingOnSubmit} className={`px-8 h-10 ${isLoadingOnSubmit ? 'opacity-40' : 'opacity-100'} bg-[#0d0d48] border-2 border-[#0d0d48] text-white font-medium rounded-md tracking-wider flex justify-center items-center`}>
                                                    {isLoadingOnSubmit ? 'Loading...' : 'SUBMIT'}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className={` ${model && "opacity-10"}`}>
                    <div className="py-5">
                        <div className="px-10 flex justify-between w-full">
                            <h1 className=" font-bold text-[#0d0d48] text-2xl lg:text-3xl">
                                Customer Details
                            </h1>
                            <Tippy content="Add New Phone">
                                <div
                                    onClick={() => {
                                        setModel(true);
                                    }}
                                    className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                                    <BiFolderPlus className='xs:text-base sm:text-xl' />
                                </div>
                            </Tippy>
                        </div>


                        <div className="xs:px-5 sm:px-10 py-5 ">
                            <div className="bg-white shadow-2xl rounded-md">
                                <form className="flex justify-center items-center pt-5 xl:pt-0 xs:px-5 xl:px-14" onSubmit={handleSubmit}>
                                    <div className="w-full rounded-lg truncate py-9 xl:py-5 ">
                                        <div className="w-full flex xs:flex-col xs:gap-4 xs:px-5 md:px-7 xl:px-14 ">
                                            <div className="flex flex-col justify-center items-center w-full xl:gap-1">
                                                <div className="md:col-span-1 md:flex justify-center md:justify-center items-center ">
                                                    <div className="profile_img_div flex justify-center rounded-full items-center border-2 border-gray-500 shadow-lg">
                                                        <img
                                                            src={img}
                                                            width="100%"
                                                            height="100%"
                                                            className="object-contain "
                                                            alt="student profile"
                                                        />
                                                        {
                                                            !isEnable
                                                                ?
                                                                <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                    <input
                                                                        type="file"
                                                                        id="logo"
                                                                        className="rounded-md w-16"
                                                                        accept=".png, .jpg, .jpeg"
                                                                        name="logo"
                                                                        onChange={(e) => handleImageUpload(e)}
                                                                        onBlur={handleBlur}
                                                                        onInput={(e) => handleImageUpload(e)}
                                                                    />
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 mt-8 w-full ">
                                                    <div className="firtname w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                First Name *
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="first_name"
                                                                placeholder="Enter Your First Name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.first_name}
                                                                disabled={isEnable}
                                                                className='w-full 2xl:w-60 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.first_name && touched.first_name
                                                                    ? errors.first_name
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="lastname w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Last Name *
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="last_name"
                                                                placeholder="Enter Your Last Name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.last_name}
                                                                disabled={isEnable}
                                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none '
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.last_name && touched.last_name
                                                                    ? errors.last_name
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="whatsappno w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                WhatsApp No *
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="whatsapp_no"
                                                                placeholder="Enter Your WhatsApp No"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.whatsapp_no}
                                                                disabled={isEnable}
                                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.whatsapp_no && touched.whatsapp_no
                                                                    ? errors.whatsapp_no
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                                                    <div className="mobileno w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Mobile No
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="alternate_no"
                                                                placeholder="Enter Your Mobile No"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.alternate_no}
                                                                disabled={isEnable}
                                                                className={`w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none ${errors.alternate_no && 'border-red-600'}`}
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.alternate_no && touched.alternate_no
                                                                    ? errors.alternate_no
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="reference w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                                Reference Name
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="refrence"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.refrence}
                                                                disabled={isEnable}
                                                                placeholder="Enter Refeence Name"
                                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none' />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.refrence && touched.refrence
                                                                    ? errors.refrence
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="mobileno w-full">
                                                        <label className="block">
                                                            <span className="block text-sm font-medium text-slate-700">
                                                               Reference Mobile No
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="refrence_no"
                                                                placeholder="Enter Refrence Mobile No"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.refrence_no}
                                                                disabled={isEnable}
                                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                            />
                                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                                {errors.refrence_no && touched.refrence_no
                                                                    ? errors.refrence_no
                                                                    : null}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-center items-center w-full xl:gap-1">
                                                <div className="flex justify-between w-full">
                                                    <div className="document_img_div flex justify-center items-center border-2 border-gray-500 shadow-lg">
                                                        <img
                                                            src="/images/adhar.webp"
                                                            width="100%"
                                                            height="100%"
                                                            className="object-contain"
                                                            alt="student profile"
                                                        />
                                                        {
                                                            !isEnable
                                                                ?
                                                                <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                    <input
                                                                        type="file"
                                                                        id="logo"
                                                                        className="rounded-md w-16"
                                                                        accept=".png, .jpg, .jpeg"
                                                                        name="logo"
                                                                        onChange={(e) => handleImageUpload(e)}
                                                                        onBlur={handleBlur}
                                                                        onInput={(e) => handleImageUpload(e)}
                                                                    />
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                    <div className="document_img_div flex justify-center items-center border-2 border-gray-500 shadow-lg">
                                                        <img
                                                            src="/images/adhar_back.jpg"
                                                            width="100%"
                                                            height="100%"
                                                            className="object-contain"
                                                            alt="student profile"
                                                        />
                                                        {
                                                            !isEnable
                                                                ?
                                                                <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                    <input
                                                                        type="file"
                                                                        id="logo"
                                                                        className="rounded-md w-16"
                                                                        accept=".png, .jpg, .jpeg"
                                                                        name="logo"
                                                                        onChange={(e) => handleImageUpload(e)}
                                                                        onBlur={handleBlur}
                                                                        onInput={(e) => handleImageUpload(e)}
                                                                    />
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                    <div className="document_img_div flex justify-center items-center border-2 border-gray-500 shadow-lg">
                                                        <img
                                                            src="/images/pan.webp"
                                                            width="100%"
                                                            height="100%"
                                                            className="object-contain"
                                                            alt="student profile"
                                                        />
                                                        {
                                                            !isEnable
                                                                ?
                                                                <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                    <input
                                                                        type="file"
                                                                        id="logo"
                                                                        className="rounded-md w-16"
                                                                        accept=".png, .jpg, .jpeg"
                                                                        name="logo"
                                                                        onChange={(e) => handleImageUpload(e)}
                                                                        onBlur={handleBlur}
                                                                        onInput={(e) => handleImageUpload(e)}
                                                                    />
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex pt-10 ">
                                                    <div>
                                                        {!toggle ? (
                                                            <button
                                                                type="button"
                                                                onClick={handleedit}
                                                                className="py-2 px-8 gap-2 bg-[#0d0d48]  hover:bg-white border-2 hover:border-[#0d0d48] text-white hover:text-[#0d0d48] font-medium rounded-md tracking-wider flex justify-center items-center"
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
                                    </div>
                                </form>
                                <div className='xs:px-0 md:px-5 xl:px-10 py-10  '>
                                    <div className="bg-white xs:overflow-x-scroll xl:overflow-x-hidden">
                                        <h1 className='font-bold xs:p-3 sm:p-6 text-lg'>Phone Details</h1>
                                        <table
                                            className="w-full bg-slate-100 text-sm text-center "
                                            id="table-to-xls">
                                            <thead className="text-xs text-gray-700 bg-class3-50 uppercase  ">
                                                <tr className="text-black text-xs ">
                                                    <th scope="col" className="pl-3 py-4">
                                                        Date
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Company
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Model
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Total EMI
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Pending EMI
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Total Amount
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Down Payment
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Pending
                                                    </th>
                                                    <th scope="col" className="px-6 py-4">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-red-100 items-center bg  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                                                <tr className=" border-b">

                                                    <td className="px-6 py-5 ">
                                                        12 / 02 / 2023
                                                    </td>
                                                    <td className="px-6 py-5 ">
                                                        Vivo
                                                    </td>
                                                    <td className="px-6 py-5 capitalize">
                                                        F17 Pro
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        2
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        1
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        15000
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        5000
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        5000
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        <div className="flex justify-center items-center">
                                                            <AiFillEye
                                                                className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                                onClick={() =>
                                                                    navigate(`/Customer/EMI-History`)}
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerProfile

