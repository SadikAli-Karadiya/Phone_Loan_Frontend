import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../App.css"
import { useNavigate, useLocation } from "react-router-dom";
import { ImNewspaper } from "react-icons/im";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MdShoppingCart } from "react-icons/md"
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Pagination from 'react-responsive-pagination'
import '../../Component/Pagination/pagination.css'



function Product() {

  const navigate = useNavigate();
  const location = useLocation();
  const [model, setModel] = React.useState(false);
  const [pageNo, setPageNo] = React.useState(1);
  const [PhoneInfo, setPhoneInfo] = React.useState([])

  const newsSchema = Yup.object({
    company: Yup.string().required("Please enter compnay"),
    model: Yup.string().required("Please enter model"),
  });

  const initialValues = {
    company: "",
    model: "",
    description: "",
  }

  const [value, setValue] = React.useState({
    company: "",
    model: "",
    description: "",
  });

  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: value ? value : initialValues,
      validationSchema: newsSchema,
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
          setPhoneInfo(data)
          // }
        } catch (err) {
          toast.error(err.message);
        }
      },
    });

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure to delete this news?',
      text: "The news will be deleted",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: async () => {
        const response = await deleteNewsDetails(id)
        if (response.error) {
          toast.error(response.error.data.message)
        }
        else if (response.data.success) {
          toast.success(response.data.message)
        }
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        refetch()
      }
    })
  };


  // const handleUpdate = (id) => {
  //   let updatenews = data?.AllNews?.find((n) => {
  //     return n?.id == id;
  //   });

  //   setValue(updatenews)
  //   setModel(true);
  // };

  return (
    <>
      {/* <div className=' px-10 py-5 h-full'>
       
    </div> */}
      <div className="relative">
        {model && (
          <div className="w-full h-full bg-black  ">
            <div className="flex justify-center shadow-2xl  ">
              <div className="absolute sm:mx-0 w-[90%] xl:w-[40%] opacity-100 shadow-2xl rounded top-5 sm:top-2 md:top-4 lg:top-10 xl:top-10 bg-white z-50 ">
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
                    <h1 className="font-semibold text-blue-500 text-lg lg:text-xl pb-5 ">
                      Add Product
                    </h1>
                    <form
                      action=""
                      className=" space-y-5 xl:space-y-10 "
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col  items-center space-y-5 md:space-y-8">
                        <div className="flex flex-col space-y-2  w-full ">
                          <label htmlFor="company">Company</label>
                          <select
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="company"
                            id="company"
                            className="rounded-md py-1 md:py-[5px] xl:py-[6px] px-2 outline-non border border-slate-300 outline-blue-200"
                          >
                            <option value="">Select Company</option>
                            <option value="Oppo">Oppo</option>
                            <option value="Techno">Techno</option>
                            <option value="Vivo">Vivo</option>
                          </select>
                          {errors.company && touched.company ? (
                            <p className="form-error text-red-600 text-sm font-semibold">
                              {errors.company}
                            </p>
                          ) : null}
                        </div>
                        <div className="flex flex-col space-y-2 w-full ">
                          <label htmlFor="model name ">Model Name</label>
                          <input
                            type="text"
                            name="model"
                            id="model"
                            value={value.model ? value.model : values.model}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md py-1 md:py-[5px] xl:py-[6px] px-3 outline-non border border-slate-300 outline-blue-200"
                            placeholder="Enter Model Name "
                          />
                          {errors.model && touched.model
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.model}</p>
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
                            className="rounded-md py-1 md:py-[5px] xl:py-[6px] px-3 outline-non border border-slate-300 outline-blue-200"
                            placeholder="Description "
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center w-full space-x-5 ">
                        <button
                          type="submit"
                          // disabled={thing.isLoading}
                          className={`
                border-2 border-blue-500 relative inline-flex items-center justify-center  px-4 py-1 
              sm:px-8 sm:py-[6px] xl:px-32 xl:py-[5px] overflow-hidden font-medium tracking-tighter text-blue-500 hover:text-white rounded-lg cursor-pointer group`}
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-lg group-hover:w-full group-hover:h-56"></span>
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
          <div className=" xl:px-10 h-full">
            <div  className='w-full justify-between items-center flex py-8'>
              <h1 className='text-blue-500 text-xl font-semibold'>All Product</h1>
              <button onClick={() => {
                setModel(true);
              }} className='bg-blue-500 text-white rounded-full  text-sm px-4 py-2 font-semibold hover:scale-105 duration-150 hover:shadow-lg'>
                Add New Product
              </button>
            </div>
            <div className=' flex items-center justify-between w-full py-3 '>
              <div className='flex  items-center space-x-5  w-1/2'>
                <input
                  type="search"
                  placeholder='Search..'
                  className='border px-4 py-2 focus:outline-none rounded-full w-full shadow-md'
                />
              </div>

              <div>
                <select name="" id="" className='text-base  bg-white shadow-md px-3 py-[6px] rounded-lg'>
                  <option value="">Select Company</option>
                  <option value="Oppo">Oppo</option>
                  <option value="Vivo">Vivo</option>
                  <option value="Techno">Techno</option>
                </select>
              </div>

            </div>
            <div className="py-5">
              <ul className="flex md:px-2 2xl:px-10 justify-between bg-blue-100 md:rounded-lg py-[10px] shadow-sm text-black font-medium px-2 ">
                <li className="w-20 text-center text-sm ">
                  Sr No
                </li>
                <li className="w-20 text-left text-sm ">
                  Company
                </li>
                <li className="w-28 text-left text-sm ">
                  Model Name
                </li>
                <li className="w-20 text-left text-sm ">
                  Description
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
                className="flex items-center space-x-2 justify-between font-normal md:px-2  py-3 my-3 rounded-lg cursor-pointer  hover:bg-white shadow-sm "
              >
                <li className="w-20 text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm text-center">
                  1
                </li>
                <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                  Oppo
                </li>
                <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm ">
                  F17 Pro
                </li>
                <li className="w-20 text-left text-[6px] sm:text-[8.5px] md:text-[12px] 2xl:text-sm">
                  4/64 Red
                </li>
                <li className="w-20 text-left flex flex-col md:flex-row items-center justify-start space-y-2 md:space-y-0 md:space-x-3">
                  <FiEdit
                    className="text-[11px] md:text-sm lg:text-[19px] "
                  // onClick={() => handleUpdate(News?.id ? News?.id : "")}
                  />
                  <MdDelete
                    className="text-[11px] md:text-sm lg:text-[21px] text-red-500"
                  // onClick={() => handleDelete(News?.id ? News?.id : "")}
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

            <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-10'>
              <Pagination
                // total={data && data.pageCount ? data.pageCount : 0}
                // current={pageNo}
                // onPageChange={(page) => setPageNo(page)}
              // previousLabel="Previous" nextLabel="Next"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Product