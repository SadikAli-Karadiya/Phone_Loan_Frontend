import { React, useState } from 'react'
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiFolderPlus } from "react-icons/bi";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import CompanyFormModal from '../../../Pages/Company/CompanyDetails/CompanyAddEditModel';
import { DeleteCompany } from '../../../utils/apiCalls';


function CompanyList() {

    const [is_Edit, setIsEdit] = useState(false);
    const [CompanyDetails, setCompanyDetails] = useState();
    const [CompanyModal, setCompanyModal] = useState(false);


    function handleEditEMI() {
        // let Installment = installment?.data?.data?.AllInstallment?.find((n) => {
        //     return n.id == id;
        // });
        setIsEdit(true)
        // setCompanyDetails(Installment);
        setCompanyModal(true);
    };

    const handleAddInstallment = () => {
        setCompanyModal(true);
        setIsEdit(false)
    }

    return (
        <>
            <div className='py-5 px-5'>
                <div className='flex items-center justify-end pb-5'>
                    <Tippy content="Add New Company">
                        <div
                            onClick={handleAddInstallment}
                            className=' bg-white border  text-[#0d0d48] rounded-full xs:h-7 xs:w-7 sm:h-11 sm:w-11 cursor-pointer duration-300 flex justify-center items-center hover:bg-[#0d0d48] hover:text-white'>
                            <BiFolderPlus className='xs:text-base sm:text-xl' />
                        </div>
                    </Tippy>
                </div>
                <div className='flex flex-wrap justify-center items-center gap-10 px-12 '>
                    <div className='bg-white drop-shadow-md px-5 py-5 rounded-lg w-60 h-40 group'>
                        <div className='bg-[#0072b8] px-3 py-1 rounded-md flex items-center space-x-2'>
                            <h1 className='font-semibold text-white'>Total Model : </h1>
                            <span className='font-semibold text-white'>15</span>
                        </div>
                        <div className='flex items-center justify-between mt-14'>
                            <div className='py-2 rounded-md '>
                                <img src="/images/vivo.png" alt="" className='w-24' />
                            </div>
                            <div className='hidden group-hover:block'>
                                <div className='flex items-center space-x-1 mt-2'>
                                    <Tippy content="Edit Company">
                                        <div
                                            onClick={handleEditEMI}
                                            className='hover:bg-[#0072b8] bg-white text-[#0072b8] border-2 border-[#0072b8] hover:text-white rounded-md px-[3px] py-[3px] cursor-pointer '>
                                            <MdModeEdit className='' />
                                        </div>
                                    </Tippy>
                                    <Tippy content="Delete Company">
                                        <div className='hover:bg-[#0072b8] bg-white text-[#0072b8] border-2 border-[#0072b8] hover:text-white rounded-md px-[3px] py-[3px] cursor-pointer '>
                                            <MdDelete className='' />
                                        </div>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white drop-shadow-md px-5 py-5 rounded-lg w-60 h-40 group'>
                        <div className='bg-green-600 px-3 py-1 rounded-md flex items-center space-x-2'>
                            <h1 className='font-semibold text-white'>Total Model : </h1>
                            <span className='font-semibold text-white'>15</span>
                        </div>
                        <div className='flex items-center justify-between mt-14'>
                            <div className=' py-2 rounded-md '>
                                <img src="/images/oppo.png" alt="" className='w-24' />
                            </div>
                            <div className='hidden group-hover:block'>
                                <div className='flex items-center space-x-1 mt-2'>
                                    <div className='hover:bg-green-600 hover:text-white text-green-600 border-2 border-green-600 bg-white rounded-md px-1 py-1 cursor-pointer '>
                                        <MdModeEdit className='' />
                                    </div>
                                    <div className='hover:bg-green-600 hover:text-white text-green-600 border-2 border-green-600 bg-white rounded-md px-1 py-1 cursor-pointer '>
                                        <MdDelete className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white drop-shadow-md px-5 py-5 rounded-lg w-60 h-40 group'>
                        <div className='bg-black px-3 py-1 rounded-md flex items-center space-x-2'>
                            <h1 className='font-semibold text-white'>Total Model : </h1>
                            <span className='font-semibold text-white'>15</span>
                        </div>
                        <div className='flex items-center justify-between mt-14 '>
                            <div className='py-2 rounded-md '>
                                <img src="/images/samsung.png" alt="" className='w-32' />
                            </div>
                            <div className='hidden group-hover:block'>
                                <div className='flex items-center space-x-1 mt-2'>
                                    <div className='hover:bg-black hover:text-white bg-white text-black border-2 border-black rounded-md px-1 py-1 cursor-pointer '>
                                        <MdModeEdit className='' />
                                    </div>
                                    <div className='hover:bg-black hover:text-white bg-white text-black border-2 border-black rounded-md px-1 py-1 cursor-pointer '>
                                        <MdDelete className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white drop-shadow-md px-5 py-5 rounded-lg w-60 h-40 group'>
                        <div className='bg-[#eb0029] px-3 py-1 rounded-md flex items-center space-x-2'>
                            <h1 className='font-semibold text-white'>Total Model : </h1>
                            <span className='font-semibold text-white'>15</span>
                        </div>
                        <div className='flex items-center justify-between mt-14 '>
                            <div className='py-2 rounded-md '>
                                <img src="/images/onepluse.png" alt="" className='w-32' />
                            </div>
                            <div className='hidden group-hover:block'>
                                <div className='flex items-center space-x-1 '>
                                    <div className='hover:bg-[#eb0029] hover:text-white bg-white border-2 border-[#eb0029] text-[#eb0029] rounded-md px-1 py-1 cursor-pointer '>
                                        <MdModeEdit className='' />
                                    </div>
                                    <div className='hover:bg-[#eb0029] hover:text-white bg-white border-2 border-[#eb0029] text-[#eb0029] rounded-md px-1 py-1 cursor-pointer '>
                                        <MdDelete className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white drop-shadow-md px-5 py-5 rounded-lg w-60 h-40 group'>
                        <div className='bg-orange-600 px-3 py-1 rounded-md flex items-center space-x-2'>
                            <h1 className='font-semibold text-white'>Total Model : </h1>
                            <span className='font-semibold text-white'>15</span>
                        </div>
                        <div className='flex items-center justify-between mt-12 '>
                            <div className='py-2 rounded-md '>
                                <img src="/images/mi.png" alt="" className='w-14 rounded-lg' />
                            </div>
                            <div className='hidden group-hover:block'>
                                <div className='flex items-center space-x-1 mt-2'>
                                    <div className='hover:bg-orange-600 hover:text-white text-orange-600 border-2 border-orange-600 bg-white rounded-md px-1 py-1 cursor-pointer '>
                                        <MdModeEdit className='' />
                                    </div>
                                    <div className='hover:bg-orange-600 hover:text-white text-orange-600 border-2 border-orange-600 bg-white rounded-md px-1 py-1 cursor-pointer '>
                                        <MdDelete className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white drop-shadow-md px-5 py-5 rounded-lg w-60 h-40 group'>
                        <div className='bg-[#ffc916] px-3 py-1 rounded-md flex items-center space-x-2'>
                            <h1 className='font-semibold text-black'>Total Model : </h1>
                            <span className='font-semibold text-black'>15</span>
                        </div>
                        <div className='flex items-center justify-between mt-12 '>
                            <div className='py-2 rounded-md '>
                                <img src="/images/Realme.png" alt="" className='w-28 rounded-lg' />
                            </div>
                            <div className='hidden group-hover:block'>
                                <div className='flex items-center space-x-1 mt-2'>
                                    <div className='hover:bg-[#ffc916] hover:text-black bg-white text-[#ffc916] border-2 border-[#ffcd16] rounded-md px-1 py-1 cursor-pointer '>
                                        <MdModeEdit className='' />
                                    </div>
                                    <div className='hover:bg-[#ffc916] hover:text-black bg-white text-[#ffc916] border-2 border-[#ffc916] rounded-md px-1 py-1 cursor-pointer '>
                                        <MdDelete className='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CompanyFormModal
                showModal={CompanyModal}
                handleShowModal={setCompanyModal}
                // InstallmentDetails={is_Edit ? InstallmentDetails : {}}
                is_Edit={is_Edit}
            />
        </>
    )
}

export default CompanyList
