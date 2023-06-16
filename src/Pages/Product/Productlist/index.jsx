import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../../App.css"
import { useNavigate, useLocation } from "react-router-dom";
import { BsPhone } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Pagination from 'react-responsive-pagination'
import '../../../Component/Pagination/pagination.css'
import CreatableSelect from 'react-select/creatable';
import { BiFolderPlus } from "react-icons/bi";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import ProductFormModel from "../../../Component/ProductFormModal";
import { useQuery } from 'react-query'
import { getAllCompanies, getAllPhone, DeletePhone } from '../../../utils/apiCalls'

function ProductList() {
  const navigate = useNavigate();
  const [pageNo, setPageNo] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const [productFormModal, setProductFormModal] = React.useState(false);
  const [ModelDetails, setModelDetails] = React.useState();
  const [SelectedCompany, setSelectedCompany] = React.useState();
  const [is_Edit, setIsEdit] = React.useState(false);
  const companies = useQuery('companies', getAllCompanies)
  const phones = useQuery('phones', getAllPhone)

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure to delete this model?',
      text: "The model will be deleted",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      showLoaderOnConfirm: true,
      allowOutsideClick: false,
      preConfirm: async () => {
        const response = await DeletePhone(id)
        if (response.error) {
          toast.error(response.error.data.message)
        }
        else if (response.data.success) {
          toast.success(response.data.message)
        }
      }
    })
  };

  const handleUpdatemodel = (id) => {
    console.log(id)
    let updateModel = phones?.data?.data?.AllModel?.find((n) => {
      return n?.id == id;
    });
    setIsEdit(true)
    setModelDetails(updateModel);
    setProductFormModal(true)
  };

  const handlePendingPaidUpClick = (e) => {
    const filteredCompany = phones.data.data.AllModel?.filter((item) => {
      if (e.target.value == item.company.company_name) {
        return item
      }
    });
    setSelectedCompany(filteredCompany)
  };

  React.useEffect(() => {
    setSelectedCompany(phones?.data?.data?.AllModel)
  }, [phones?.data?.data?.AllModel])

  return (
    <>
      <div className=" xl:px-10 h-full">
        <div className='w-full justify-between items-center flex py-8 px-5'>
          <h1 className='text-[#0d0d48] xs:text-xl xl:text-2xl font-bold'>All Models</h1>
          <div className='flex items-center justify-end pb-5'>
            <Tippy content="Add New Model">
              <div
                onClick={() => setProductFormModal(true)}
                className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                <BiFolderPlus className='xs:text-base sm:text-xl' />
              </div>
            </Tippy>

          </div>
        </div>
        <div className='flex justify-center items-center xs:py-3'>
          <input
            type="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
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

          <div className="bg-white shadow-md rounded-md  xs:overflow-x-scroll xl:overflow-x-hidden mx-10 px-10 py-5">
            <div className='flex justify-between items-center py-5 px-5'>
              <h1 className='font-bold  text-lg'>Product List</h1>
              <div>
                <select
                  name="" id=""
                  onChange={handlePendingPaidUpClick}
                  className='xs:text-sm xl:text-base bg-white shadow-md px-3 py-[6px] rounded-lg outline-none' >
                  {/* <option value="">Select Company</option> */}
                  <option value={0}>All</option>
                  {
                    companies?.data?.data?.all_companies?.map((company, index) => {
                      return (
                        <option key={index} value={company.company_name}>{company.company_name}</option>
                      )
                    })
                  }
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
                    Action
                  </th>
                </tr>
              </thead>
              {
                SelectedCompany?.length > 0 ? (
                  SelectedCompany?.map((item, index) => {
                    return (
                      <tbody key={index} className="text-black bg-white items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                        <tr className=" border-b">
                          <td className="px-6 py-5 font-bold">
                            {index + 1}
                          </td>
                          <td className="px-6 py-5 capitalize">
                            {item.company.company_name}
                          </td>
                          <td className="px-6 py-5">
                            {item.model_name}
                          </td>
                          <td className="px-6 py-5 font-semibold text-[15px] cursor-pointer">
                            <div className='flex justify-center items-center space-x-3 ' >
                              <Tippy content="Show Specifiaction">
                                <div onClick={() =>
                                  navigate(`/Product/product-details/${item.id}`)}>
                                  <AiFillEye className='text-[18px] cursor-pointer' />
                                </div>
                              </Tippy>
                              <Tippy content="Update Model">
                                <div onClick={() => handleUpdatemodel(item.id)}>
                                  <FiEdit className='text-[17px] cursor-pointer' />
                                </div>
                              </Tippy>
                              <Tippy content="Delete Model">
                                <div
                                  onClick={() => handleDelete(item.id)}
                                >
                                  <MdDelete className='text-[19px] text-red-600 cursor-pointer' />
                                </div>
                              </Tippy>
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
              SelectedCompany?.length > 0 ?
                null
                :
                <div className='flex justify-center items-center w-full pt-5 space-x-4 text-gray-500'>
                  <BsPhone className='text-3xl' />
                  <h1 className=' font-semibold'>Model Not Found</h1>
                </div>
            }
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
      <ProductFormModel
        showModal={productFormModal}
        handleShowModal={setProductFormModal}
        ModelDetails={ModelDetails}
        is_Edit={is_Edit}
      />
      {/* </div>
      </div> */}
    </>
  )
}

export default ProductList