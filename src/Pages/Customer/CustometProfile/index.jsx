import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import "../../Customer/CustomerRegister/Customerform.css"
import { FaUserEdit } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { BiFolderPlus } from "react-icons/bi";
import NewPhoneFormModel from '../../../Component/NewPhoneFormModal';
import { getPurchaseCustomerbyId, UpdateCustomer } from '../../../utils/apiCalls';
import { useMutation, useQuery } from 'react-query'
import moment from 'moment'
import { toast } from "react-toastify";
import * as Yup from "yup";

const validFileExtensions = { image: ['jpg', 'png', 'jpeg'] };

function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}

const customerSchema = Yup.object({
    first_name: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(2, "Minimum 2 characters are required")
        .required("Please Enter Your First Name")
        .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

    last_name: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(2, "Minimum 2 characters are required")
        .required("Please Enter Your Last Name")
        .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

    mobile: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid mobile no")
        .max(10, "Please enter valid mobile no")
        .required("Please Enter Your Mobile Number"),

    alternate_mobile: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid mobile no").max(10, "Please Enter Valid Mobile No"),

    reference_name: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(2, "Minimum 2 characters are required")
        .matches(/[^\s*].*[^\s*]/g, "* This field cannot contain only blankspaces"),

    refrence_mobile: Yup.string()
        .test('trim', 'Must not contain leading or trailing spaces', (value) => {
            if (value) {
                return value.trim() === value;
            }
            return true;
        })
        .min(10, "Please enter valid mobile no")
        .max(10, "Please enter valid mobile no"),

    // adhar_front: Yup.mixed()
    //     .test("is-valid-type", "Logo should be in jpg , jpeg or png format",
    //         value => {
    //             if (!value) {
    //                 return true; // skip validation if value is empty
    //             }
    //             return isValidFileType(value && value.name, "image")
    //         })
    //     .required("Please Enter Adhar Card")
    //     .test("is-valid-size", "Max allowed size is 2MB", value => {
    //         if (!value) {
    //             return true;
    //         }
    //         return value && value.size <= 2097152
    //     }),
    // adhar_back: Yup.mixed()
    //     .test("is-valid-type", "Logo should be in jpg, jpeg or png format",
    //         value => {
    //             if (!value) {
    //                 return true; // skip validation if value is empty
    //             }
    //             return isValidFileType(value && value.name, "image")
    //         })
    //     .required("Please Enter Adhar Card")
    //     .test("is-valid-size", "Max allowed size is 2MB", value => {
    //         if (!value) {
    //             return true;
    //         }
    //         return value && value.size <= 2097152
    //     }),
    // pan: Yup.mixed()
    //     .test("is-valid-type", "PAN Card should be in jpg, jpeg or png format",
    //         value => {
    //             if (!value) {
    //                 return true; // skip validation if value is empty
    //             }
    //             return isValidFileType(value && value.name, "image")
    //         })
    //     .required("Please Enter Adhar Card")
    //     .test("is-valid-size", "Max allowed size is 2MB", value => {
    //         if (!value) {
    //             return true;
    //         }
    //         return value && value.size <= 2097152
    //     }),
    // light_bill: Yup.mixed()
    //     .test("is-valid-type", "Logo should be in jpg, jpeg or png format",
    //         value => {
    //             if (!value) {
    //                 return true; // skip validation if value is empty
    //             }
    //             return isValidFileType(value && value.name, "image")
    //         })
    //     .test("is-valid-size", "Max allowed size is 2MB", value => {
    //         if (!value) {
    //             return true;
    //         }
    //         return value && value.size <= 2097152
    //     }),

});

function CustomerProfile() {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const defaultImage = "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1683614366~exp=1683614966~hmac=e4712c90f5b79a2388c0152ab9a4897eb2b2fb866c9c2e4635dc52938019b159";
    const [img, setImg] = React.useState(defaultImage);
    const [photo, setPhoto] = React.useState("");
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);
    const [toggle, setToggle] = React.useState(false);
    const [isEnable, setIsEnable] = React.useState(true);
    const [newPhoneFormModal, setnewPhoneFormModal] = React.useState(false);
    const data = useQuery(['customer', params.id], () => getPurchaseCustomerbyId(params.id))
    let Customer_details = data?.data?.data?.CustomerAllPurchase[0]?.customer
    const initialValues = {
        first_name: "",
        last_name: "",
        mobile: "",
        alternate_no: "",
        refrence_name: "",
        refrence_mobile: "",
        // adhar_front: "",
        // adhar_back: "",
        // pan: "",
        // light_bill: ""
    }

    const { values, touched, resetForm, errors, handleChange, handleSubmit, handleBlur } =
        useFormik({
            initialValues: Customer_details ? Customer_details : initialValues,
            validationSchema: customerSchema,
            async onSubmit(data) {
                try {
                    const fd = new FormData();
                    fd.append("id", Customer_details.id)
                    fd.append("first_name", data.first_name)
                    fd.append("last_name", data.last_name)
                    fd.append("mobile", data.mobile)
                    fd.append("alternate_no", data.alternate_no)
                    fd.append("reference_name", data.reference_name)
                    fd.append("reference_mobile", data.reference_mobile)
                    const response = UpdateCustomer(fd)
                    // console.log(response.Promise.PromiseResult, "ksvbd")
                    // toast.success(success.response.data);
                    setIsEnable(true);
                } catch (err) {
                    console.log(err)
                    // toast.error(err.response.data.message);
                }
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
        setIsEnable(true);
        setToggle(false);
    }


    return (
        <>
            <div className="py-5">
                <div className="px-10 flex justify-between w-full">
                    <h1 className=" font-bold text-[#0d0d48] text-2xl lg:text-3xl">
                        Customer Details
                    </h1>
                    <Tippy content="Add New Phone">
                        <div
                            onClick={() => setnewPhoneFormModal(true)}
                            className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                            <BiFolderPlus className='xs:text-base sm:text-xl' />
                        </div>
                    </Tippy>
                </div>
                <div className="xs:px-5 sm:px-10 py-5 ">
                    <div className="bg-white shadow-2xl rounded-md">
                        <form className="flex justify-center items-center pt-5 xl:pt-0 xs:px-5 xl:px-14"  onSubmit={handleSubmit}>
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
                                                                name="photo"
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
                                                        name="mobile"
                                                        placeholder="Enter Your WhatsApp No"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.mobile}
                                                        disabled={isEnable}
                                                        className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                    />
                                                    <span className="text-xs font-semibold text-red-600 px-1">
                                                        {errors.mobile && touched.mobile
                                                            ? errors.mobile
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
                                                        name="reference_name"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.reference_name}
                                                        disabled={isEnable}
                                                        placeholder="Enter Refeence Name"
                                                        className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none' />
                                                    <span className="text-xs font-semibold text-red-600 px-1">
                                                        {errors.reference_name && touched.reference_name
                                                            ? errors.reference_name
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
                                                        name="reference_mobile"
                                                        placeholder="Enter Refrence Mobile No"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.reference_mobile}
                                                        disabled={isEnable}
                                                        className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                                                    />
                                                    <span className="text-xs font-semibold text-red-600 px-1">
                                                        {errors.reference_mobile && touched.reference_mobile
                                                            ? errors.reference_mobile
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
                                                                onClick={handleSubmit}
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
                                    {
                                        data?.data?.data?.CustomerAllPurchase?.length > 0 ? (
                                            data?.data?.data?.CustomerAllPurchase?.map((item, index) => {
                                                return (
                                                    <tbody key={index} className=" bg-white items-center bg  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                                                        <tr className=" border-b">

                                                            <td className="px-6 py-5 ">
                                                                {moment(item.phone.createdAt).format("DD / MM / YYYY")}
                                                            </td>
                                                            <td className="px-6 py-5 ">
                                                                Vivo
                                                            </td>
                                                            <td className="px-6 py-5 capitalize">
                                                                {item.phone.model_name}
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                {item.installment.month}
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                {item.net_amount}
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                5000
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                {item.pending_amount}
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <div className="flex justify-center items-center">
                                                                    <AiFillEye
                                                                        className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                                        onClick={() =>
                                                                            navigate(`/Customer/EMI-History/${item.id}`)}
                                                                    />
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                )
                                            })
                                        ) : (
                                            null
                                        )}
                                </table>
                                {
                                    data?.data?.data?.CustomerAllPurchase?.length > 0 ?
                                        null
                                        :
                                        <div className='flex justify-center items-center w-full pt-5 space-x-4 text-gray-500'>
                                            <BsPhone className='text-3xl' />
                                            <h1 className='font-semibold'>Customer Not Found</h1>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <NewPhoneFormModel
                    showModal={newPhoneFormModal}
                    handleShowModal={setnewPhoneFormModal}
                // refetchData={refetchData}
                // tournamentDetails={tournamentDetails}
                />
            </div>
        </>
    )
}

export default CustomerProfile

