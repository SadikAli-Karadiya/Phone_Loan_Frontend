import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { customerSchema, initialValues } from "../../../Component/CustomerSchema";
import "../../Customer/CustomerRegister/Customerform.css"

function CustomerRegister() {
    const defaultImage = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683614366~exp=1683614966~hmac=e4712c90f5b79a2388c0152ab9a4897eb2b2fb866c9c2e4635dc52938019b159";
    const [img, setImg] = React.useState(defaultImage);
    const [photo, setPhoto] = React.useState("");

    const { values, touched, resetForm, errors, handleChange, handleSubmit, handleBlur } =
        useFormik({
            initialValues: initialValues,
            validationSchema: customerSchema,
            onSubmit: (values) => {
                setIndex(2);
                dispatch(setBasicInfoForm({ ...values, logo: photo }));
                resetForm({ values: "" })
            },
        });

    function handleImageUpload(e) {
        setPhoto(() => e.target.files[0]);
        setImg(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <>
            <div className="py-5">
                <div className="px-10">
                    <h1 className=" font-bold text-[#0d0d48] text-2xl lg:text-3xl">
                        Customer Registration
                    </h1>
                </div>
                <form className="flex justify-center items-center pt-5 xs:px-5 xl:px-14">
                    <div className="w-full rounded-lg truncate bg-white py-9 shadow-2xl ">
                        <div className="w-full flex xs:flex-col xs:gap-4 xl:flex-row xl:space-x-8 xs:px-5 md:px-7 xl:px-14 ">
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
                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none '
                                            />
                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                {errors.last_name && touched.last_name
                                                    ? errors.last_name
                                                    : null}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
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
                                                className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                            />
                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                {errors.whatsapp_no && touched.whatsapp_no
                                                    ? errors.whatsapp_no
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
                                                name="alternate_no"
                                                placeholder="Enter Your Mobile No"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.alternate_no}
                                                className={`w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none ${errors.alternate_no && 'border-red-600'}`}
                                            />
                                            <span className="text-xs font-semibold text-red-600 px-1">
                                                {errors.alternate_no && touched.alternate_no
                                                    ? errors.alternate_no
                                                    : null}
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
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

                                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                                    <div className="date w-full">
                                        <label className="block">
                                            <span className="block text-sm font-medium text-slate-700">
                                                Date *
                                            </span>
                                            <input
                                                type="date"
                                                name="dob"
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
                                <div className="flex py-2 ">
                                    <div>
                                        <button
                                            type="button"
                                            className="bg-[#0d0d48] border-2  border-[#0d0d48] hover:text-[#0d0d48] font-semibold relative inline-flex items-center justify-center px-8 py-[6px] overflow-hidden text-white rounded-md cursor-pointer group mr-3"
                                        >
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                            <span className="relative flex items-center gap-2 text-base">
                                                SUBMIT
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CustomerRegister

