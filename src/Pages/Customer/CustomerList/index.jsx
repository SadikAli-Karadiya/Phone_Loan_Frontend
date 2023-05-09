import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import { BiFolderPlus } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Pagination from 'react-responsive-pagination'
import '../../../Component/Pagination/pagination.css'


function CustomersList() {

  const installmentSchema = Yup.object({
    installment: Yup.string().required("Please Enter Company"),
    dp: Yup.string().required("Please Enter Model"),
    charge: Yup.string().required("Please Enter Price"),
  });

  const initialValues = {
    installment: "",
    dp: "",
    charge: "",
    description: "",
  }

  const [value, setValue] = React.useState({
    installment: "",
    dp: "",
    charge: "",
    description: "",
  });

  const [PhoneInfo, setPhoneInfo] = React.useState([]);
  const [model, setModel] = React.useState(false);
  const [EMI, setEMI] = React.useState();
  const navigate = useNavigate();
  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: value ? value : initialValues,
      validationSchema: installmentSchema,
      onSubmit(data) {
        try {
          const fd = new FormData();
          fd.append("photo", data.photo);
          let ok = JSON.stringify({
            PhoneInfo: data,
          });
          fd.append("data", ok);
          // if (value) {
          //   fb.append("id", value.id);
          //   useUpdateNewsDetailsMutation(fb).then(console.log("update ho gai"));
          // } else {
          // newsRegistration(fd).then();
          setPhoneInfo([...PhoneInfo, data])
          setModel(false)
          // }
        } catch (err) {
          toast.error(err.message);
        }
      },
    });

  return (
    <>
      <div className='relative'>
        {model && (
          <div className="w-full h-full bg-black  ">
            <div className="flex justify-center shadow-2xl  ">
              <div className="absolute sm:mx-0 w-[90%] xl:w-[50%] opacity-100 shadow-2xl rounded top-5 sm:top-2 md:top-4 lg:top-10 xl:top-10 bg-white z-50 ">
                <div className="">
                  <div className="flex justify-end ">
                    <button
                      onClick={() => {
                        resetForm()
                        setModel(false);
                      }}
                      className="absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-[#571217] "
                    >
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <div className="  rounded-md  my-5 xl:py-4  px-5 xl:px-10">
                    <h1 className="font-semibold text-[#000080] text-lg lg:text-xl pb-5 ">
                      Add Installment
                    </h1>
                    <form
                      action=""
                      className=" space-y-5 xl:space-y-10 "
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col  items-center space-y-5 md:space-y-8">
                        <div className=' flex items-center w-full space-x-5'>
                          <div className="flex flex-col space-y-2  w-full ">
                            <label htmlFor="company">Installment *</label>
                            <input
                              type='text'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              name="installment"
                              id="installment"
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
                        </div>
                        <div className='flex items-center w-full space-x-5'>
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
                          <div className="flex flex-col space-y-2 w-full ">
                            <label htmlFor="description">Description</label>
                            <input
                              type="text"
                              name="description"
                              id="description"
                              value={value.description ? value.description : values.description}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="rounded-md py-1 w-full md:py-[5px] xl:py-[6px] px-3 outline-non border border-slate-300 outline-blue-200"
                              placeholder="Description "
                            />
                          </div>
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
        <div className={`bg-slate-100 ${model && "opacity-10"}`}>
          <div className=' px-10  h-full'>
            <div className='py-5 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <select name="" id="" className='text-base  bg-white border px-3 py-[6px] rounded-lg'>
                    {
                      PhoneInfo && PhoneInfo[0] ? (
                        PhoneInfo.map((iteam, index) => {
                          return (
                            <option key={index} value={iteam.installment}>
                              For {iteam.installment} Month
                            </option>

                          )
                        })
                      ) :
                        (
                          <option value="">Select Installment</option>
                        )
                    }

                  </select>
                </div>
                <div
                  onClick={() => {
                    setModel(true);
                  }}
                  className=' bg-white border  text-[#0d0d48] rounded-full h-11 w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                  <BiFolderPlus className='text-xl' />
                </div>
              </div>
              <div className='py-4 px-10 mt-7 rounded-lg flex w-full bg-white drop-shadow-sm justify-start space-x-10 items-center'>
                <div className='flex flex-col w-full'>
                  <label htmlFor="Installment">Month</label>
                  <input type="text"
                    name='installment'
                    placeholder='Enter Month'
                    className='w-full 2xl:w-60 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                  />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="Installment">Down Payment</label>
                  <input type="text"
                    name='dp'
                    placeholder='Enter Installment'
                    className='w-full 2xl:w-60 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                  />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor="Installment">Charge</label>
                  <input type="text"
                    name='charge'
                    placeholder='Enter Installment'
                    className='w-full 2xl:w-60 mt-1 block px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                  />
                </div>
                <div className=' space-y-3'>
                  <FiEdit className='text-lg hover:cursor-pointer text-green-600 hover:text-black' />
                  <MdDelete className='text-xl text-red-600 hover:cursor-pointer hover:text-black' />
                </div>
              </div>
              <div className='flex justify-center items-center mt-10'>
                <input
                  type="search"
                  placeholder='Search Receipt (BY : Receipt ID , Name , Whatsapp Number)'
                  className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-l-lg w-2/3'
                />
                <div className='bg-[#0d0d48] px-3 py-[7px] group rounded-r-lg flex justify-center items-center
            shadow-xl cursor-pointer text-white text-2xl '>
                  <BiSearch className='search group-hover:scale-125 duration-300' />
                </div>
              </div>
            </div>
            <div className='px-10 py-5'>
              <div className="bg-white shadow-md">
                <h1 className='font-bold p-6 text-lg'>Customer List</h1>
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
                  <li className="w-20 text-left text-sm ">
                    Action
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
                        navigate(`/Customer/profile-detail`)}
                    />
                  </li>
                  <li className="w-20  text-left flex flex-col md:flex-row items-center justify-start space-y-2 md:space-y-0 md:space-x-3">
                    <button className='bg-[#0d0d48] hover:bg-blue-900 px-6 text-white py-1 text-sm font-semibold rounded-md'>
                      Pay
                    </button>
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

export default CustomersList
