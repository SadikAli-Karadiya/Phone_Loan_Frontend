import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { customerSchema, initialValues } from "../../../Component/CustomerSchema";
import "../../Customer/CustomerRegister/Customerform.css"
import { FaUserEdit } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai";


function CustomerProfile() {
    const navigate = useNavigate();
    const defaultImage = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683614366~exp=1683614966~hmac=e4712c90f5b79a2388c0152ab9a4897eb2b2fb866c9c2e4635dc52938019b159";
    const [img, setImg] = React.useState(defaultImage);
    const [photo, setPhoto] = React.useState("");
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);
    const [isEnable, setIsEnable] = React.useState(true);

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


    return (
        <>
            <div className="py-5">
                <div className="px-10">
                    <h1 className=" font-bold text-[#0d0d48] text-2xl lg:text-3xl">
                        Customer Details
                    </h1>
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
                                                        Refrence Name
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
                                                        Mobile No
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
                                                        className="bg-[#0d0d48] border-2  border-[#0d0d48] hover:text-[#0d0d48] font-semibold relative inline-flex items-center justify-center px-8 py-[6px] overflow-hidden text-white rounded-md cursor-pointer group mr-3"
                                                    >
                                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                                        <span className="relative flex items-center gap-2 text-base">
                                                            <FaUserEdit className="text-lg" />
                                                            Edit
                                                        </span>
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
                                        <tr className="text-black text-sm ">
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
        </>
    )
}

export default CustomerProfile

