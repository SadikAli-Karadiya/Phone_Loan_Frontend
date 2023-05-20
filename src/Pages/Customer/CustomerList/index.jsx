import { React, useRef, useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import { BiFolderPlus } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Pagination from 'react-responsive-pagination'
import '../../../Component/Pagination/pagination.css'
import { RiFolderUserFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


function CustomersList() {
  const [model, setModel] = useState(false);
  const [isHoverEdit, setIsHoverEdit] = useState(false);
  const [isHoverDelete, setIsHoverDelete] = useState(false);
  const [selectedEMI, setSelectedEMI] = useState(0);
  const [pageNo, setPageNo] = useState(1);
  const navigate = useNavigate();
  const [data, setdata] = useState([
    {
      id: 1,
      installment: 1,
      dp: 40,
      charge: 1500,
      CustomersList: [
        {
          id: 1,
          customer_id: 1,
          name: "shad",
          mobile: 1234567890,
          total: 15000,
          pending: 7500,
        },
        {
          id: 2,
          customer_id: 2,
          name: "xyz",
          mobile: 1234567890,
          total: 10000,
          pending: 7500,
        }
      ]
    },
    {
      id: 2,
      installment: 2,
      dp: 45,
      charge: 1600,
      CustomersList: [
        {
          id: 1,
          customer_id: 1,
          name: "shad",
          mobile: 1234567890,
          total: 15000,
          pending: 7500,
        },
        {
          id: 2,
          customer_id: 2,
          name: "xyz",
          mobile: 1234567890,
          total: 10000,
          pending: 7500,
        }
      ]
    },
    {
      id: 3,
      installment: 3,
      dp: 50,
      charge: 1800,
      CustomersList: [
        {
          id: 1,
          customer_id: 1,
          name: "shad",
          mobile: 1234567890,
          total: 15000,
          pending: 7500,
        },
        {
          id: 2,
          customer_id: 2,
          name: "xyz",
          mobile: 1234567890,
          total: 10000,
          pending: 7500,
        }
      ]
    },
    {
      id: 4,
      installment: 4,
      dp: 55,
      charge: 2000,
      CustomersList: [
        {
          id: 1,
          customer_id: 1,
          name: "shad",
          mobile: 1234567890,
          total: 15000,
          pending: 7500,
        },
        {
          id: 2,
          customer_id: 2,
          name: "xyz",
          mobile: 1234567890,
          total: 10000,
          pending: 7500,
        }
      ]
    },
  ])
  const [Selectemi, setSelectemi] = useState("")

  const bgColors = [
    "#ffd6d6",
    "#bfdbfe",
    "#c1d1d8",
    "#ffedd5",
    "#f4d5ff",
    "#fbc8bd",
    "#ccfbf1",
    "#d8bbbc",
    "#fef9c3",
  ];

  const headingBgColor = [
    "#f3797e",
    "#3b82f6",
    "#2f667e",
    "#9a4947",
    "#e08aff",
    "#f24822",
    "#14b8a6",
    "#7e1b1f",
    "#ca8a04",
  ];

  const installmentSchema = Yup.object({
    installment: Yup.string().required("Please Enter Installment"),
    dp: Yup.string().required("Please Enter Down Payment"),
    charge: Yup.string().required("Please Enter Charges"),
  });

  const initialValues = {
    installment: "",
    dp: "",
    charge: "",
  }

  const [value, setValue] = useState({
    installment: "",
    dp: "",
    charge: "",
  });

  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: value ? value : initialValues,
      validationSchema: installmentSchema,
      onSubmit(data) {
        try {
          const fd = new FormData();
          let ok = JSON.stringify({
            PhoneInfo: data,
          });
          fd.append("data", ok);
          // if (value) {
          //   fb.append("id", value.id);
          //   useUpdateNewsDetailsMutation(fb).then(console.log("update ho gai"));
          // } else {
          // newsRegistration(fd).then();
          // setPhoneInfo([...PhoneInfo, data])
          setdata(data)
          resetForm({ values: "" })
          setModel(false)
          // }
        } catch (err) {
          toast.error(err.message);
        }
      },
    });

  const handleMouseEnterEdit = () => {
    setIsHoverEdit(true);
  };

  const handleMouseLeaveEdit = () => {
    setIsHoverEdit(false);
  };

  const handleMouseEnterDelete = () => {
    setIsHoverDelete(true);
  };

  const handleMouseLeaveDelete = () => {
    setIsHoverDelete(false);
  };

  const handlePendingPaidUpClick = (e) => {
    // const filteredCustomer = data?.CustomersList?.filter((data) => {
    //   if (e.target.value == 2) {
    //     return data.CustomersList.pending == 0;
    //   } else if (e.target.value == 1) {
    //     return data.CustomersList.pending != 0;
    //   } else {
    //     return data?.CustomersList;
    //   }
    // });
    // setSelectedEMI(filteredCustomer)
  };

  const handleEditEMI = (id) => {
    let updateEMI = data?.find((n) => {
      return n?.id == id;
    });
    setValue(updateEMI);
    setModel(true);
  };

  const handleSelectEMI = (id) => {
    let Customer = data?.find((n) => {
      return n?.id == id;
    });
    setSelectedEMI(Customer)
    setSelectemi(id)
  };

  const handleDeleteClass = async (class_id) => {
    Swal.fire({
      title: "Are you sure to delete class?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteClassResponse = await deleteClass(class_id);
        if (deleteClassResponse) {
          setCall(() => !call);
          return deleteNotify();
        }
      }
    });
  };

  return (
    <>
      <div className='relative'>
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
                      Add Installment
                    </h1>
                    <form
                      action=""
                      className=" space-y-5 xl:space-y-10 "
                      onSubmit={handleSubmit} >
                      <div className="flex xs:flex-col lg:flex-row lg:space-y-0 lg:space-x-5 items-center xs:space-y-4">
                        <div className="flex flex-col space-y-2  w-full ">
                          <label htmlFor="company">Installment *</label>
                          <input
                            type='text'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="installment"
                            id="installment"
                            value={value.installment ? value.installment : values.installment}
                            placeholder='Enter Install'
                            className="rounded-md w-full py-1 md:py-[5px] xl:py-[6px] px-2 outline-non border border-slate-300 outline-blue-200"
                          />
                          {errors.installment && touched.installment ? (
                            <p className="form-error text-red-600 text-sm font-semibold">
                              {errors.installment}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex flex-col space-y-2 w-full ">
                          <label htmlFor="model name ">Down Payment *</label>
                          <input
                            type="text"
                            name="dp"
                            id="dp"
                            value={value.dp ? value.dp : values.dp}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md w-full py-1 md:py-[5px] xl:py-[6px] px-3 outline-non border border-slate-300 outline-blue-200"
                            placeholder="Enter Down Payment "
                          />
                          {errors.dp && touched.dp
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.dp}</p>
                            :
                            null}
                        </div>

                        <div className="flex flex-col space-y-2 w-full ">
                          <label htmlFor="model name ">Charge * </label>
                          <input
                            type="text"
                            name="charge"
                            id="charge"
                            value={value.charge ? value.charge : values.charge}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md py-1 w-full md:py-[5px] xl:py-[6px] px-3 outline-non border border-slate-300 outline-blue-200"
                            placeholder="Enter Charge Amount "
                          />
                          {errors.charge && touched.charge
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.charge}</p>
                            :
                            null}
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-full space-x-5 ">
                        <button
                          type="submit"
                          // disabled={thing.isLoading}
                          className={`
                border-2 border-[#0d0d48] relative inline-flex items-center justify-center  px-4 py-1 
              sm:px-8 sm:py-[6px] xl:px-32 xl:py-[5px] overflow-hidden font-medium tracking-tighter text-[#0d0d48] hover:text-white rounded-lg cursor-pointer group`}
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0d0d48] rounded-lg group-hover:w-full group-hover:h-56"></span>
                          <span className="relative ">
                            {/* {thing.isLoading
                              ? "Loading..."
                              : updateData.isLoading
                                ? "Updating..."
                                : location?.state?.isEdit
                                  ? "UPDATE"
                                  : "SUBMIT"} */}
                            SUBMIT
                          </span>
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
          <div className='xl:px-5 h-full'>
            <div className='py-5 px-5'>
              <div className='flex items-center justify-end pb-5'>
                <Tippy content="Add New EMI">
                  <div
                    onClick={() => {
                      setModel(true);
                    }}
                    className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                    <BiFolderPlus className='xs:text-base sm:text-xl' />
                  </div>
                </Tippy>

              </div>
              <div className='bg-white px-5 flex space-x-5 flex-wrap justify-center items-center py-5 rounded-md'>
                {data?.length > 0 ? (
                  data?.map((item, index) => {
                    return (
                      <div
                        style={{
                          backgroundColor: bgColors[index % bgColors.length],
                        }}
                        className='px-5 py-3 my-3 w-[23%] group hover:cursor-pointer rounded-md drop-shadow-lg space-y-3'
                        key={index}
                        onClick={() => handleSelectEMI(item.id)}>
                        <div className='flex justify-between items-center '>
                          <div>
                            <h1 className='text-gray-900 font-semibold'><span className='text-sm'>{item.charge}</span> | <span className='text-sm'>{item.dp}%</span></h1>
                          </div>
                          <div className='flex justify-end items-center space-x-2'>
                            <div
                              style={{
                                color: isHoverEdit
                                  ? "#fff"
                                  : headingBgColor[
                                  index % headingBgColor.length
                                  ],
                                backgroundColor: isHoverEdit
                                  ? headingBgColor[
                                  index % headingBgColor.length
                                  ]
                                  : "#fff",
                              }}
                              onMouseEnter={handleMouseEnterEdit}
                              onMouseLeave={handleMouseLeaveEdit}
                              onClick={() => handleEditEMI(item.id)}
                              className={`${Selectemi == item.id ? "block" : "hidden"} edit_delete_btns rounded-md px-[3px] py-[3px] group-hover:block `}
                            >
                              <MdModeEdit className='' />
                            </div>
                            <div
                              style={{
                                color: isHoverDelete
                                  ? "#fff"
                                  : headingBgColor[
                                  index % headingBgColor.length
                                  ],
                                backgroundColor: isHoverDelete
                                  ? headingBgColor[
                                  index % headingBgColor.length
                                  ]
                                  : "#fff",
                              }}
                              onMouseEnter={handleMouseEnterDelete}
                              onMouseLeave={handleMouseLeaveDelete}
                              onClick={() => handleDeleteClass(item.id)}
                              className={`${Selectemi == item.id ? "block" : "hidden"} edit_delete_btns rounded-md px-[3px] py-[3px] group-hover:block `}
                            >
                              <MdDelete className=' ' />
                            </div>
                          </div>
                        </div>
                        <div className={`${item._id} flex items-center justify-start space-x-7 py-2`}>
                          <div className=''>
                            <h1
                              style={{
                                color:
                                  headingBgColor[
                                  index % headingBgColor.length
                                  ],
                              }}
                              className='text-4xl font-bold'>{item.installment} <span className='uppercase text-2xl'>month</span></h1>
                          </div>
                        </div>
                        <div className='rounded-md px-7 py-1'
                          style={{
                            backgroundColor:
                              headingBgColor[index % headingBgColor.length],
                          }}
                        >
                          <p className='text-white text-center text-sm font-roboto'>Total Customer : {item.CustomersList.length}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className='flex justify-center items-center w-full'>
                    <div className="bg-red-200 font-bold flex justify-center items-center p-2 rounded mx-3 space-x-2">
                      <IoMdInformationCircle className="text-xl text-red-600" />
                      <h1 className="text-red-800 text-sm">EMI not found </h1>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-white shadow-md rounded-md  xs:overflow-x-scroll xl:overflow-x-hidden px-10 py-5">
              <h1 className='font-bold text-lg'>Customer List</h1>
              <div className='flex justify-between items-center py-5'>
                <div className='flex justify-start items-center w-1/3 '>
                  <input
                    type="search"
                    placeholder='Search Customer'
                    className='drop-shadow-lg border px-4 py-[6px] focus:outline-none rounded-l-lg w-full'
                  />
                  <div className='bg-[#3399ff] px-3 py-[6.4px] group rounded-r-lg flex justify-center items-center
                         shadow-xl cursor-pointer text-white text-2xl '>
                    <BiSearch className='search group-hover:scale-125 duration-300' />
                  </div>
                </div>
                <div className="right flex items-center space-x-3 pr-6">
                  <button
                    id="year-btn"
                    className=" flex items-center drop-shadow-lg border bg-white p-2 xl:p-2 xl:py-1 rounded-lg shadow-2xl space-x-1 " >
                    <select
                      onChange={handlePendingPaidUpClick}
                      name=""
                      id=""
                      className="cursor-pointer text-darkblue-500 text-base outline-none"
                    >
                      <option value={0}>All</option>
                      <option value={1}>Pending</option>
                      <option value={2}>Paidup</option>
                    </select>
                  </button>
                </div>
              </div>
              <table
                className="w-full text-sm text-center rounded-xl  text-white "
                id="table-to-xls" >
                <thead className="text-xs uppercase bg-[#3399ff] ">
                  <tr className=" text-sm ">
                    <th scope="col" className="pl-3 py-4">
                      Serial No
                    </th>
                    <th scope="col" className="pl-3 py-4">
                      Customer Id
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Phone
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Total
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Paidup
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Pending
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Profile
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                {
                  selectedEMI?.CustomersList?.length > 0 ? (
                    selectedEMI?.CustomersList.map((item, index) => {
                      return (
                        <tbody className="bg-white text-black items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden" key={index}>
                          <tr className=" border-b">
                            <th className="py-5 px-6">
                              {index + 1}
                            </th>
                            <td className="px-6 py-5 text-gray-500">
                              {item.customer_id}
                            </td>
                            <td className="px-6 py-5 capitalize">
                              {item.name}
                            </td>
                            <td className="px-6 py-5">
                              {item.mobile}
                            </td>
                            <td className="px-6 py-5">
                              {item.total}
                            </td>
                            <td className="px-6 py-5">
                              {item.total - item.pending}
                            </td>
                            <td className="px-6 py-5">
                              {item.pending}
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex justify-center items-center">
                                <AiFillEye
                                  className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                  onClick={() =>
                                    navigate(`/Customer/profile-detail`)}
                                />
                              </div>
                            </td>
                            <td className="px-6 py-5 ">
                              <div className="flex justify-center space-x-3">
                                <button
                                  onClick={() =>
                                    navigate(`/Receipt/Generate`)}
                                  className='bg-green-800 hover:bg-green-700 px-4 text-white py-[3px] text-sm font-semibold rounded-md'>
                                  Pay
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      )
                    })
                  ) : (
                    <div className='flex justify-center items-center w-full'>
                      <div className='flex items-center space-x-3 justify-center text-gray-500 py-5'>
                        <FaUsers className='text-3xl' />
                        <h1 className=' font-semibold'>Customer Not Found</h1>
                      </div>
                    </div>
                  )}
              </table>
            </div>
{/* 
            <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16'>
              <Pagination
                total={data && data.pageCount ? data.pageCount : 0}
                current={pageNo}
                onPageChange={(page) => setPageNo(page)}
              // previousLabel="Previous" nextLabel="Next"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomersList

