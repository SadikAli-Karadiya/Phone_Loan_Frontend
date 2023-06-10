import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../../App.css"
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Pagination from 'react-responsive-pagination'
import '../../../Component/Pagination/pagination.css'
import CreatableSelect from 'react-select/creatable';
import { MdSdStorage } from "react-icons/md";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import SpecificationFormModal from '../../../Component/SpecificationFormModal';
import { getallSpecificationById, deleteSpecification } from "../../../utils/apiCalls"
import { useQuery } from 'react-query'


function ProductDetails() {
    const navigate = useNavigate();
    const params = useParams();
    const [is_Edit, setIsEdit] = React.useState(false);
    const [SpecificationDetails, setSpecificationDetails] = React.useState();
    const [specificationFormModal, setspecificationFormModal] = React.useState(false);
    const Spacification = useQuery(['spacification', params.id], () => getallSpecificationById(params.id))
    const [specification, setspecification] = React.useState(Spacification);

    const handleUpdatespecification = (id) => {
        console.log(id)
        let UodateSpecification = Spacification?.data?.data?.AllSpecification.find((n) => {
            return n?.id == id;
        });
        console.log(UodateSpecification)
        setspecificationFormModal(true)
        setSpecificationDetails(UodateSpecification);
        setIsEdit(true)
    };

    const handleDelete = async (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure to delete this Specification?',
            text: "The specification will be deleted",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            preConfirm: async () => {
                const response = await deleteSpecification(id)
                if (response.error) {
                    toast.error(response.error.data.message)
                }
                else if (response.data.success) {
                    toast.success(response.data.message)
                }
            }
        })
    };

    React.useEffect(() => {
        setspecification(specification?.data?.data?.AllSpecification)
    }, [specification])

    return (
        <>
            <div className=" xl:px-10 h-full">
                <div className='w-full justify-between items-center flex py-8 px-5'>
                    <h1 className='text-[#0d0d48] xs:text-xl xl:text-2xl font-bold'>Vivo {Spacification?.data?.data?.AllSpecification[0]?.phone?.model_name}</h1>
                    <div className='flex items-center justify-end pb-5'>
                        <Tippy content="Add Storage">
                            <div
                                onClick={() => setspecificationFormModal(true)}
                                className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                                <MdSdStorage className='xs:text-base sm:text-xl' />
                            </div>
                        </Tippy>

                    </div>
                </div>
                <div className="bg-white shadow-md rounded-md  xs:overflow-x-scroll xl:overflow-x-hidden px-10 py-5">
                    <table
                        className="w-full text-sm text-center rounded-xl  text-white "
                        id="table-to-xls">
                        <thead className="text-xs uppercase bg-[#0d0d48]">
                            <tr className="text-white text-sm ">
                                <th scope="col" className="pl-3 py-4">
                                    Sr No
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    RAM
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
                        {
                            Spacification?.data?.data?.AllSpecification.length > 0 ? (
                                Spacification?.data?.data?.AllSpecification.map((item, index) => {
                                    return (
                                        <tbody key={index} className="text-black bg-white items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                                            <tr className=" border-b">
                                                <td className="px-6 py-5 font-bold">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-5 capitalize">
                                                    {item.ram}
                                                </td>
                                                <td className="px-6 py-5">
                                                    {item.storage}
                                                </td>
                                                <td className="px-6 py-5">
                                                    {item.price}
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className='flex justify-center items-center space-x-2'>
                                                        <Tippy content="Update Storage">
                                                            <div onClick={() => handleUpdatespecification(item.id)}>
                                                                <FiEdit className='text-[16px] cursor-pointer' />
                                                            </div>
                                                        </Tippy>
                                                        <Tippy content="Delete Storage">
                                                            <div
                                                                onClick={() => handleDelete(item.id)}
                                                            >
                                                                <MdDelete className='text-lg cursor-pointer text-red-600' />
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
                        Spacification?.data?.data?.AllSpecification.length > 0 ?
                            null
                            :
                            <div className='flex justify-center items-center w-full pt-5 space-x-4 text-gray-500'>
                                <h1 className=' font-semibold'>Spacification Not Found</h1>
                            </div>
                    }
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
            <SpecificationFormModal
                showModal={specificationFormModal}
                handleShowModal={setspecificationFormModal}
                is_Edit={is_Edit}
                SpecificationDetails={SpecificationDetails}
            />
            {/* </div>
            </div> */}
        </>
    )
}

export default ProductDetails