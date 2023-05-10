import React from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import { BiFolderPlus } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, NavLink } from "react-router-dom";
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

  const [PhoneInfo, setPhoneInfo] = React.useState([
    {
      id: 1,
      installment: 2,
      dp: 50,
      description: "skjdbvjhdb",
      CustomersList: [
        {

        }
      ]
    },
    {
      id: 2,
      installment: 4,
      dp: 30,
      description: "skjdbvjhdb"
    },
    {
      id: 3,
      installment: 3,
      dp: 40,
      description: "skjdbvjhdb"
    }
  ]);
  const [model, setModel] = React.useState(false);
  const [EMI, setEMI] = React.useState("");
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

  function handleSelectEMI(event) {
    setEMI(event.target.value)
  }

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
                      <div className="flex flex-col  items-center xs:space-y-4 md:space-y-8">
                        <div className=' xs:flex-col xs:space-x-0 xs:space-y-4 flex items-center w-full space-x-5'>
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
                        <div className='xs:flex-col xs:space-x-0 xs:space-y-4 flex items-center w-full space-x-5'>
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
        <div className={` ${model && "opacity-10"}`}>
          <div className=' xl:px-10  h-full'>
            <div className='py-5 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <select name="" id="" className='xs:text-xs sm:text-base bg-white border xs:px-2 xs:py-1 sm:px-3 sm:py-[6px] rounded-lg' onChange={handleSelectEMI}>
                    {
                      PhoneInfo && PhoneInfo[0] ? (
                        PhoneInfo.map((iteam, index) => {
                          return (
                            <option key={index} value={iteam.installment} >
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
                  className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                  <BiFolderPlus className='xs:text-base sm:text-xl' />
                </div>
              </div>
              {
                EMI.length > 0 ?
                  <div className='py-4 px-10 xs:mt-4 sm:mt-7 xs:space-y-3 rounded-lg xs:flex-col sm:flex-col  w-full bg-white drop-shadow-sm justify-start  items-center'>
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
                    <div className='flex  xs:py-2  xs:space-x-5 sm:space-x-5'>
                      <FiEdit className='text-[25px] border-2 w-10 p-1 border-gray-300 h-8 rounded-md xl:text-lg hover:cursor-pointer text-green-600 hover:text-black' />
                      <MdDelete className='text-[25px] border-2 w-10 p-1 border-gray-300 h-8 rounded-md xl:text-xl text-red-600 hover:cursor-pointer hover:text-black' />
                    </div>
                  </div>
                  :
                  null
              }
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
            {
              EMI.length > 0 ?
                <div className='px-5 py-5 '>
                  <div className="bg-white shadow-md overflow-x-scroll">
                    <h1 className='font-bold p-6 text-lg'>Customer List</h1>
                    <table
                      className="w-full bg-blue-50 text-sm text-center "
                      id="table-to-xls"
                    >
                      <thead className="text-xs text-gray-700 bg-class3-50 uppercase  ">
                        <tr className="text-black text-sm ">
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
                      <tbody className="bg-white items-center  overflow-x-scroll">
                        <tr className=" border-b">
                          <th className="py-5 px-6">
                            01
                          </th>
                          <td className="px-6 py-5 text-gray-500">
                            001
                          </td>
                          <td className="px-6 py-5 capitalize">
                            Shad
                          </td>
                          <td className="px-6 py-5">
                            1234567890
                          </td>
                          <td className="px-6 py-5">
                            15000
                          </td>
                          <td className="px-6 py-5">
                            5000
                          </td>
                          <td className="px-6 py-5">
                            10000
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex justify-center items-center">
                              <AiFillEye
                                className="xs:text-base md:text-sm lg:text-[19px] "
                                onClick={() =>
                                  navigate(`/Customer/profile-detail`)}
                              />
                            </div>
                          </td>
                          <td className="px-6 py-5 ">
                            <div className="flex justify-center space-x-3">
                              <button className='bg-[#0d0d48] hover:bg-blue-900 px-4 text-white py-[3px] text-sm font-semibold rounded-md'>
                                Pay
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                :
                <div className='flex items-center space-x-3 justify-center text-gray-500 py-5'>
                  <FaUsers className='text-3xl' />
                  <h1 className=' font-semibold'>Customer Not Found</h1>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomersList

