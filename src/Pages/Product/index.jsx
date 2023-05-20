import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../App.css"
import { useNavigate, useLocation } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Pagination from 'react-responsive-pagination'
import '../../Component/Pagination/pagination.css'
import CreatableSelect from 'react-select/creatable';
import { BiFolderPlus } from "react-icons/bi";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const createCompany = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const createModel = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const createStorage = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const productSchema = Yup.object({
  company: Yup.string().required("Please Enter Company"),
  model: Yup.string().required("Please Enter Model"),
  price: Yup.string().required("Please Enter Price"),
});

function Product() {
  const navigate = useNavigate();
  const location = useLocation();
  const [model, setModel] = React.useState(false);
  const [pageNo, setPageNo] = React.useState(1);
  const [PhoneInfo, setPhoneInfo] = React.useState([])
  const [isLoading, setIsLoading] = React.useState();
  const [CompanyList, setComapnyList] = React.useState([]);
  const [company, setCompany] = React.useState();
  const [ModelList, setModelList] = React.useState([]);
  const [Model_Name, setModel_Name] = React.useState();
  const [StorageList, setStorageList] = React.useState([]);
  const [Storage, setStorage] = React.useState();
  const [value, setValue] = React.useState();
  const [isLoadingOnSubmit, setIsLoadingOnSubmit] = React.useState(false);


  const handleCreateCompany = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newComapny = createCompany(inputValue);
      setIsLoading(false);
      setComapnyList((prev) => [...prev, newComapny]);
      setCompany(newComapny);
    }, 1000);
  };

  const handleCreateModel = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newModel = createModel(inputValue);
      setIsLoading(false);
      setModelList((prev) => [...prev, newModel]);
      setModel_Name(newModel);
    }, 1000);
  };

  const handleCreateStorage = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newStorage = createStorage(inputValue);
      setIsLoading(false);
      setStorageList((prev) => [...prev, newStorage]);
      setStorage(newStorage);
    }, 1000);
  };




  const initialValues = {
    company: company,
    model: "",
    storage: "",
    price: "",
  }

  // const [value, setValue] = React.useState({
  //   company: "",
  //   model: "",
  //   price: "",
  //   description: "",
  // });

  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: productSchema,
      onSubmit(data) {
        const modeldata = {
          ...data,
          company: company,
          model: Model_Name,
          storage: Storage,
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
      <div className="relative">
        {model && (
          <div className="w-full h-full bg-white  ">
            <div className="flex justify-center shadow-2xl  ">
              <div className="absolute sm:mx-0 xs:w-[80%] sm:w-[60%] md:w-[50%] lg:w-[53.9%] opacity-100 shadow-2xl rounded xs:top-5 lg:top-10 bg-white z-50 ">
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
                  <div className='px-10 py-10'>
                    <h1 className="font-semibold text-[#0d0d48] text-lg lg:text-xl pb-5 ">
                      Add Product
                    </h1>
                    <form action="" className='space-y-5' onSubmit={handleSubmit}>
                      <div className='flex items-center w-full space-x-5'>
                        <div className='w-full'>
                          <CreatableSelect
                            className='w-full'
                            isClearable
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            onChange={(newCompany) => setCompany(newCompany)}
                            onCreateOption={handleCreateCompany}
                            placeholder="Select Company"
                            options={CompanyList}
                            value={values.company}
                            name='company'
                          />
                          {errors.company &&
                            touched.company ? (
                            <small className="form-error text-red-600 text-sm font-semibold">
                              {errors.company}
                            </small>
                          ) : null}
                        </div>
                        <div className='w-full'>
                          <CreatableSelect
                            className='w-full'
                            isClearable
                            placeholder="Select Model"
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            onChange={(newModel) => setModel_Name(newModel)}
                            onCreateOption={handleCreateModel}
                            options={ModelList}
                            value={Model_Name}
                            name='model'
                          />
                          {errors.model &&
                            touched.model ? (
                            <small className="form-error text-red-600 text-sm font-semibold">
                              {errors.model}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className='flex items-center w-full space-x-5'>
                        <div className='w-full'>
                          <CreatableSelect
                            className='w-full'
                            isClearable
                            name='storage'
                            isDisabled={isLoading}
                            isLoading={isLoading}
                            onChange={(newstorage) => setStorage(newstorage)}
                            onCreateOption={handleCreateStorage}
                            options={StorageList}
                            placeholder="Select Storage"
                            onBlur={handleBlur}
                            value={values.storage}
                          />
                         {errors.storage && touched.storage
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.storage}</p>
                            :
                            null}
                        </div>
                        <div className="firstname flex flex-col space-y-2 w-full ">
                          <input type="text"
                            name="price"
                            value={values.price}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                            placeholder="Enter Phone Price " />
                          {errors.price && touched.price
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.price}</p>
                            :
                            null}
                        </div>
                      </div>

                      <div className="flex justify-center items-center w-full space-x-5 ">
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
        )
        }
        <div className={`bg-slate-100 ${model && "opacity-10"}`}>
          <div className=" xl:px-10 h-full">
            <div className='w-full justify-between items-center flex py-8 px-5'>
              <h1 className='text-[#0d0d48] xs:text-xl xl:text-2xl font-bold'>All Product</h1>
              <div className='flex items-center justify-end pb-5'>
                <Tippy content="Add New Product">
                  <div
                    onClick={() => {
                      setModel(true);
                    }}
                    className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                    <BiFolderPlus className='xs:text-base sm:text-xl' />
                  </div>
                </Tippy>

              </div>
            </div>
            <div className='flex justify-center items-center xs:py-3'>
              <input
                type="search"
                placeholder='Search Receipt (BY : Company Name , Model Name)'
                className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-l-lg w-2/3'
              />
              <div className='bg-[#0d0d48] px-3 py-[7px] group rounded-r-lg flex justify-center items-center
            shadow-xl cursor-pointer text-white text-2xl '>
                <BiSearch className='search group-hover:scale-125 duration-300' />
              </div>
            </div>

            <div className='py-5'>
              <div className=' flex items-end justify-end w-full xs:px-5'>


              </div>

              <div className="bg-white shadow-md rounded-md  xs:overflow-x-scroll xl:overflow-x-hidden px-10 py-5">
                <div className='flex justify-between items-center py-5 px-5'>
                  <h1 className='font-bold  text-lg'>Product List</h1>
                  <div>
                    <select name="" id="" className=' xs:text-sm xl:text-base bg-white shadow-md px-3 py-[6px] rounded-lg'>
                      <option value="">Select Company</option>
                      <option value="Oppo">Oppo</option>
                      <option value="Vivo">Vivo</option>
                      <option value="Techno">Techno</option>
                    </select>
                  </div>
                </div>
                <table
                  className="w-full text-sm text-center rounded-xl  text-white "
                  id="table-to-xls">
                  <thead className="text-xs uppercase bg-[#0d0d48]">
                    <tr className="text-white text-sm ">
                      <th scope="col" className="pl-3 py-4">
                        Sr No
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Company
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Model
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Storage
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-black bg-white items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                    <tr className=" border-b">
                      <td className="px-6 py-5 font-bold">
                        001
                      </td>
                      <td className="px-6 py-5 capitalize">
                        Vivo
                      </td>
                      <td className="px-6 py-5">
                        F11 Pro
                      </td>
                      <td className="px-6 py-5">
                        4 / 64
                      </td>
                      <td className="px-6 py-5">
                        15000
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-center items-center space-x-2">
                          <FiEdit className='text-lg cursor-pointer ' onClick={() => {
                            setModel(true);
                          }} />
                          <MdDelete className='text-xl text-red-600 cursor-pointer' />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-10'>
              <Pagination
              // total={data && data.pageCount ? data.pageCount : 0}
              // current={pageNo}
              // onPageChange={(page) => setPageNo(page)}
              // previousLabel="Previous" nextLabel="Next"
              />
            </div> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default Product