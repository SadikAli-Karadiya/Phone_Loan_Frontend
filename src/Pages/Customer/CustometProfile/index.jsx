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

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } =
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
    return (
        <>
            <div className="py-5 ">
                <div className="px-10">
                    <h1 className=" font-bold text-[#0d0d48] text-2xl lg:text-3xl">
                        Customer Details
                    </h1>
                </div>


                <div className="px-10 py-5">
                    <div className="bg-white shadow-2xl rounded-md">
                        <form className="flex justify-center items-center pt-5 px-10">
                            <div className="w-full rounded-lg truncate py-9  ">
                                <div className="w-full flex space-x-12 px-10 ">
                                    <div className="flex flex-col justify-center items-center w-full gap-1">
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
                                        <div className="flex lg:flex-row md:flex-col gap-4 mt-8 w-full ">
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
                                        <div className="flex lg:flex-row md:flex-col gap-4 w-full">
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
                                        <div className="flex lg:flex-row md:flex-col gap-4 w-full">
                                            <div className="dateofbirth w-full">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">
                                                        Date Of Birth *
                                                    </span>
                                                    <input
                                                        type="date"
                                                        name="dob"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.dob}
                                                        className='w-full hover:cursor-pointer mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none ' />
                                                    <span className="text-xs font-semibold text-red-600 px-1">
                                                        {errors.dob && touched.dob ? errors.dob : null}
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="gender w-full ">
                                                <label className="block">
                                                    <span className="block text-sm font-medium text-slate-700">
                                                        Gender
                                                    </span>
                                                    <div className='border w-full border-slate-300 mt-1 rounded-md h-10 flex justify-center items-center space-x-5 '>
                                                        <div className="male ">

                                                            <label htmlFor="gender" className="m-2">
                                                                Male
                                                            </label>
                                                            <input
                                                                type="radio"
                                                                id="male"
                                                                name="gender"
                                                                className="hover:cursor-pointer"
                                                                checked={values.gender == "m"}
                                                                value={"m"}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>
                                                        <div className="female">
                                                            <label htmlFor="gender" className="m-2">
                                                                Female
                                                            </label>
                                                            <input
                                                                type="radio"
                                                                id="female"
                                                                name="gender"
                                                                className="hover:cursor-pointer"
                                                                checked={values.gender == "f"}
                                                                value={"f"}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                        </div>

                                                    </div>
                                                </label>
                                                <span
                                                    className={`text-xs font-semibold  text-red-600 px-1 ${errors.gender && touched.gender ? "" : "hidden  "
                                                        }`}
                                                >
                                                    {errors.gender && touched.gender ? errors.gender : null}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 2xl:w-full  w-full">
                                            <div className="Addresss w-full">
                                                <label className=" flex flex-col">
                                                    <span className="block text-sm font-medium text-slate-700">
                                                        Address *
                                                    </span>
                                                    <textarea name="address"
                                                        className='w-[420px] mt-1 rounded-md px-3 py-2 outline-none border  border-slate-300 text-sm shadow-sm placeholder-slate-400'
                                                        placeholder="Enter Address"
                                                        id=""
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    ></textarea>
                                                    <span className="text-xs font-semibold text-red-600 px-1">
                                                        {errors.address && touched.address ? errors.address : null}
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-center w-full gap-1">
                                        <div className="flex lg:flex-row md:flex-col gap-4 w-full">
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
                                        <div className="flex lg:flex-row md:flex-col gap-4 w-full">
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
                                        <div className="flex lg:flex-row md:flex-col gap-4 w-full">
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
                                        <div className="flex lg:flex-row md:flex-col gap-4 w-full">
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
                                        <div className="flex lg:flex-row md:flex-col gap-4 w-full">
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
                                            {/* <div>
                                        <button
                                            className="bg-[#0d0d48] border-2  text-sm border-[#0d0d48] hover:text-[#0d0d48] font-semibold relative inline-flex items-center justify-center px-8 py-[8px] overflow-hidden text-white rounded-md cursor-pointer group mr-3"
                                        // onClick={(e) => {
                                        //     handleSubmit();
                                        //     // setIndex(2);
                                        // }}
                                        >
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                            <span className="relative">
                                                CLEAR
                                            </span>
                                        </button>
                                    </div> */}
                                            <div>
                                                <button
                                                    type="button"
                                                    className="bg-[#0d0d48] border-2  border-[#0d0d48] hover:text-[#0d0d48] font-semibold relative inline-flex items-center justify-center px-8 py-[6px] overflow-hidden text-white rounded-md cursor-pointer group mr-3"
                                                    onClick={(e) => {
                                                        handleSubmit();
                                                        // setIndex(2);
                                                    }}
                                                >
                                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                                    <span className="relative flex items-center gap-2 text-base">
                                                        <FaUserEdit className="text-lg" />
                                                        Edit
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className='px-10 py-10'>
                            <div className="bg-white shadow-md">
                                <h1 className='font-bold pb-4 text-xl'>Phone Detail</h1>
                                <ul className="flex md:px-2 2xl:px-10 justify-between bg-blue-50 py-4 shadow-sm text-black font-medium px-2 ">
                                    <li className="w-20 text-center text-sm  ">
                                        Customer ID
                                    </li>
                                    <li className="w-20 text-center text-sm  ">
                                        Name
                                    </li>
                                    <li className="w-20 text-left text-sm  ">
                                        Mobile
                                    </li>
                                    <li className="w-20 text-left text-sm ">
                                        Company
                                    </li>
                                    <li className="w-28 text-left text-sm ">
                                        Model
                                    </li>
                                    <li className="w-20 text-left text-sm ">
                                        Description
                                    </li>
                                    <li className="w-20 text-left text-sm ">
                                        Net Amount
                                    </li>
                                    <li className="w-20 text-left text-sm ">
                                        Pedding
                                    </li>
                                    <li className="w-20 text-left text-sm ">
                                        Profile
                                    </li>
                                </ul>
                                {/* {PhoneInfo?.length > 0 ? (
              PhoneInfo.map((data, index) => {
                console.log(data , "data")
                return ( */}
                                <ul
                                    // key={index}
                                    className="flex items-center space-x-2 bg-red-100 justify-between font-normal md:px-2 py-6 cursor-pointer shadow-sm "
                                >
                                    <li className="w-20 text-[6px] font-bold sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center">
                                        001
                                    </li>
                                    <li className="w-20 text-center text-[6px] sm:text-[8.5px] md:text-sm ">
                                        Shad
                                    </li>
                                    <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                        1234567890
                                    </li>
                                    <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                        Vivo
                                    </li>
                                    <li className="w-28 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                        F17 Pro
                                    </li>
                                    <li className="w-20 py-[2px] text-start text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                        jsbdh
                                    </li>
                                    <li className="w-20 py-[2px] text-start  text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                        15000
                                    </li>
                                    <li className="w-20 py-[2px] text-start  text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                                        5000
                                    </li>
                                    <li className="w-20 text-left flex flex-col md:flex-row items-center justify-start space-y-2 md:space-y-0 md:space-x-3">
                                        <AiFillEye
                                            className="text-[11px] md:text-sm lg:text-[19px] "
                                            onClick={() =>
                                                navigate(`/Customer/EMI-History`)}
                                        />
                                    </li>
                                </ul>
                                {/* );
              })
            ) : ( */}
                                {/* <div className="flex justify-center items-center w-full py-10">
              <MdShoppingCart className=" text-2xl sm:text-3xl md:text-[30px] text-gray-400 mr-2" />
              <p className="text-xs xs:text-sm sm:text-lg 2xl:text-[20px] font-medium text-gray-400">
                Product Not Found
              </p>
            </div> */}
                                {/* )} */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CustomerProfile

