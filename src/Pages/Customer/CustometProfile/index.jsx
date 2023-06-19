import { React, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import "../../Customer/CustomerRegister/Customerform.css"
import { FaUserEdit } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsPhone } from "react-icons/bs";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { BiFolderPlus } from "react-icons/bi";
import NewPhoneFormModel from '../../../Component/NewPhoneFormModal';
import { getPurchaseCustomerbyId, getCustomerByid, UpdateCustomer, DeletePurchase } from '../../../utils/apiCalls';
import { useMutation, useQuery } from 'react-query'
import moment from 'moment'
import { toast } from "react-toastify";
import * as Yup from "yup";
import defaultadharfront from "../../../../public/images/adhar.webp";
import defaultadharback from "../../../../public/images/adhar_back.jpg";
import defaultpan from "../../../../public/images/pan.webp";
import defaultbill from "../../../../public/images/bill.webp";
import defaultImage from "../../../../public/images/user.png";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";


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
        .nullable()
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
});

function CustomerProfile() {
    const navigate = useNavigate();
    const params = useParams();
    const [img, setImg] = useState(defaultImage);
    const [photo, setPhoto] = useState("");
    const [is_Edit, setIsEdit] = useState(false);
    const [isLoadingOnSubmit, setIsLoadingOnSubmit] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [isEnable, setIsEnable] = useState(true);
    const [newPhoneFormModal, setnewPhoneFormModal] = useState(false);
    const [PhoneDetails, setPhoneDetails] = useState();
    const [DefaultadharFront, setdefaultadharfront] = useState(defaultadharfront);
    const [DefaultadharBack, setdefaultadharback] = useState(defaultadharback);
    const [DefaultPan, setdefaultpan] = useState(defaultpan);
    const [DefaultBill, setdefaultbill] = useState(defaultbill);
    const [Adhar_front, setadharfront] = useState("");
    const [Adhar_back, setadharback] = useState("");
    const [Pan, setpan] = useState("");
    const [Bill, setbill] = useState("");
    const data = useQuery(['purchase', params.id], () => getPurchaseCustomerbyId(params.id))
    const CustomerDetail = useQuery(['customer', params.id], () => getCustomerByid(params.id))
    let SingleCustomerDetails = CustomerDetail?.data?.data?.SingleCustomer
    // console.log(SingleCustomerDetails)
    const initialValues = {
        first_name: "",
        last_name: "",
        mobile: "",
        alternate_no: "",
        reference_name: "",
        reference_mobile: "",
        adhar_front: "",
        adhar_back: "",
        pan: "",
        light_bill: ""
    }

    const { values, touched, resetForm, errors, handleChange, handleSubmit, handleBlur } =
        useFormik({
            initialValues: SingleCustomerDetails ? SingleCustomerDetails : initialValues,
            validationSchema: customerSchema,
            async onSubmit(data) {
                try {
                    const fd = new FormData();
                    fd.append("id", SingleCustomerDetails?.id)
                    fd.append("document_id", SingleCustomerDetails?.document_id)
                    fd.append("photo", photo);
                    fd.append("adhar_front", Adhar_front);
                    fd.append("adhar_back", Adhar_back);
                    fd.append("pan", Pan);
                    fd.append("bill", Bill);
                    fd.append("first_name", data.first_name)
                    fd.append("last_name", data.last_name)
                    fd.append("mobile", data.mobile)
                    fd.append("alternate_no", data.alternate_no)
                    fd.append("reference_name", data.reference_name)
                    fd.append("reference_mobile", data.reference_mobile)
                    const response = await UpdateCustomer(fd)
                    console.log(response, "ksvbd")
                    toast.success(response.data.message);
                    setIsEnable(true);
                    setToggle(false)
                } catch (err) {
                    console.log(err)
                    toast.error(response.data.message);
                }
            },
        });

    function handleImageUpload(e) {
        setPhoto(() => e.target.files[0]);
        setImg(URL.createObjectURL(e.target.files[0]));
    }

    function handleAdharFUpload(e) {
        setadharfront(() => e.target.files[0]);
        setdefaultadharfront(URL.createObjectURL(e.target.files[0]));
    }
    function handleAdharBUpload(e) {
        setadharback(() => e.target.files[0]);
        setdefaultadharback(URL.createObjectURL(e.target.files[0]));
    }
    function handleAdharPanUpload(e) {
        setpan(() => e.target.files[0]);
        setdefaultpan(URL.createObjectURL(e.target.files[0]));
    }
    function handleAdharBillUpload(e) {
        setbill(() => e.target.files[0]);
        setdefaultbill(URL.createObjectURL(e.target.files[0]));
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

    const handleEditPhone = (id) => {
        let Phone = data.data.data.CustomerAllPurchase?.find((n) => {
            return n?.id == id;
        });
        setIsEdit(true)
        setPhoneDetails(Phone);
        setnewPhoneFormModal(true);
    };

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
                        <form className="flex justify-center items-center pt-5 xl:pt-0 xs:px-5 xl:px-14" onSubmit={handleSubmit}>
                            <div className="w-full rounded-lg truncate py-9 xl:py-5 ">
                                <div className="w-full flex xs:flex-col xs:gap-4 xs:px-5 md:px-7 xl:px-14 ">
                                    <div className="flex flex-col justify-center items-center w-full xl:gap-1">
                                        <div className="md:col-span-1 md:flex justify-center md:justify-center items-center ">
                                            <div className="profile_img_div flex justify-center rounded-full items-center border-2 border-gray-500 shadow-lg">
                                                <img
                                                    src={SingleCustomerDetails?.photo ? SingleCustomerDetails?.photo : img}
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
                                        <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                                            <div className="adhar_front w-full">
                                                <label className="block">
                                                    <span className="block text-sm text-center pb-2 font-medium text-slate-700">
                                                        Adhar Card Front *
                                                    </span>
                                                    <div className="md:col-span-1 md:flex justify-center md:justify-center items-center ">
                                                        <div className="profile_img_div flex justify-center rounded-md items-center border-2 border-gray-500 shadow-lg ">
                                                            <img
                                                                src={SingleCustomerDetails?.document?.adhar_front ? SingleCustomerDetails?.document?.adhar_front : DefaultadharFront}
                                                                width="100%"
                                                                height="100%"
                                                                className="object-contain "
                                                                alt="student profile"
                                                            />
                                                            <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                <input
                                                                    type="file"
                                                                    id="adhar_front"
                                                                    className="rounded-md w-16"
                                                                    disabled={isEnable}
                                                                    accept=".png, .jpg, .jpeg"
                                                                    name="adhar_front"
                                                                    onChange={(e) => handleAdharFUpload(e)}
                                                                    onBlur={handleBlur}
                                                                    onInput={(e) => handleAdharFUpload(e)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="adhar_back w-full">
                                                <label className="block">
                                                    <span className="block text-center pb-2 text-sm font-medium text-slate-700">
                                                        Adhar Card Back *
                                                    </span>
                                                    <div className="md:col-span-1 md:flex justify-center md:justify-center items-center ">
                                                        <div className="profile_img_div flex justify-center rounded-md items-center border-2 border-gray-500 shadow-lg">
                                                            <img
                                                                src={SingleCustomerDetails?.document?.adhar_back ? SingleCustomerDetails?.document?.adhar_back : DefaultadharBack}
                                                                width="100%"
                                                                height="100%"
                                                                className="object-contain "
                                                                alt="student profile"
                                                            />
                                                            <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                <input
                                                                    type="file"
                                                                    id="adhar_back"
                                                                    className="rounded-md w-16"
                                                                    accept=".png, .jpg, .jpeg"
                                                                    name="adhar_back"
                                                                    disabled={isEnable}
                                                                    onChange={(e) => handleAdharBUpload(e)}
                                                                    onBlur={handleBlur}
                                                                    onInput={(e) => handleAdharBUpload(e)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="pan w-full">
                                                <label className="block">
                                                    <span className="block text-sm text-center pb-2 font-medium text-slate-700">
                                                        PAN *
                                                    </span>
                                                    <div className="md:col-span-1 md:flex justify-center md:justify-center items-center ">
                                                        <div className="profile_img_div flex justify-center rounded-md items-center border-2 border-gray-500 shadow-lg">
                                                            <img
                                                                src={SingleCustomerDetails?.document?.pancard ? SingleCustomerDetails?.document?.pancard : DefaultPan}
                                                                width="100%"
                                                                height="100%"
                                                                className="object-contain "
                                                                alt="student profile"
                                                            />
                                                            <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                <input
                                                                    type="file"
                                                                    id="pan"
                                                                    className="rounded-md w-16"
                                                                    accept=".png, .jpg, .jpeg"
                                                                    name="pan"
                                                                    disabled={isEnable}
                                                                    onChange={(e) => handleAdharPanUpload(e)}
                                                                    onBlur={handleBlur}
                                                                    onInput={(e) => handleAdharPanUpload(e)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div className="lightbill w-full">
                                                <label className="block">
                                                    <span className="block text-sm text-center pb-2 font-medium text-slate-700">
                                                        Light Bill
                                                    </span>
                                                    <div className="md:col-span-1 md:flex justify-center md:justify-center items-center ">
                                                        <div className="profile_img_div flex justify-center rounded-md items-center border-2 border-gray-500 shadow-lg">
                                                            <img
                                                                src={SingleCustomerDetails?.document?.light_bill ? SingleCustomerDetails?.document?.light_bill : DefaultBill}
                                                                width="100%"
                                                                height="100%"
                                                                className="object-contain "
                                                                alt="student profile"
                                                            />
                                                            <div className="profile_img_overlay absolute flex flex-col justify-center items-center">
                                                                <input
                                                                    type="file"
                                                                    id="light_bill"
                                                                    className="rounded-md w-16"
                                                                    accept=".png, .jpg, .jpeg"
                                                                    name="light_bill"
                                                                    disabled={isEnable}
                                                                    onChange={(e) => handleAdharBillUpload(e)}
                                                                    onBlur={handleBlur}
                                                                    onInput={(e) => handleAdharBillUpload(e)}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
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
                                                            <td className="px-6 py-5 flex items-center justify-center space-x-3">
                                                                <Tippy content="Phone Detail">
                                                                    <div className="flex justify-center items-center">
                                                                        <AiFillEye
                                                                            className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                                            onClick={() =>
                                                                                navigate(`/Customer/EMI-History/${item.id}`)}
                                                                        />
                                                                    </div>
                                                                </Tippy>
                                                                <Tippy content="Edit Phone">
                                                                    <div className="flex justify-center items-center">
                                                                        <FiEdit
                                                                            className="xs:text-base md:text-sm lg:text-[16px] hover:cursor-pointer "
                                                                            onClick={() => handleEditPhone(item.id)}
                                                                        />
                                                                    </div>
                                                                </Tippy>
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
                    PhoneDetails={PhoneDetails}
                    is_Edit={is_Edit}

                />
            </div>
        </>
    )
}

export default CustomerProfile

