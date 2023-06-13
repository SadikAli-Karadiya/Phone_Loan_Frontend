import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../App.css"
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import LoaderSmall from '../../Component/LoaderSmall';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { getAllCustomer } from '../../utils/apiCalls';
import { useQuery } from 'react-query'
import { FaUsers } from "react-icons/fa";


function Search() {
    const navigate = useNavigate();
    const [data, setdata] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [showNotFound, setShowNotFound] = React.useState(-1)
    const AllCustomer = useQuery('customer', getAllCustomer)

    return (
        <>
            <div className=' sm:px-5 xl:px-10 py-5 h-full'>
                <div className=' py-5 px-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>Search Past / Current Customer</h1>
                    <div className='flex justify-center items-center mt-10 '>
                        <input
                            type="search"
                            placeholder='Search Receipt (BY : Customer ID , Name , Whatsapp Number)'
                            className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-l-lg w-2/3'
                        />
                        <div className='bg-[#0d0d48] px-3 py-[7px] group rounded-r-lg flex justify-center items-center
            shadow-xl cursor-pointer text-white text-2xl '>
                            <BiSearch className='search group-hover:scale-125 duration-300' />
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md  xs:overflow-x-scroll xl:overflow-x-hidden px-10 py-5 mt-5">
                    <h1 className='font-bold text-lg'>Customer List</h1>
                    <table
                        className="w-full text-sm text-center rounded-xl  text-white  mt-5"
                        id="table-to-xls"
                    >
                        <thead className="text-xs uppercase bg-[#0d0d48]">
                            <tr className="text-sm">
                                <th scope="col" className="pl-3 py-4">
                                Serial No
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    first name 
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    last name 
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Phone
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Profile
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    status
                                </th>
                            </tr>
                        </thead>
                        {
                            AllCustomer?.data?.data?.AllCustomer?.length > 0 ? (
                                AllCustomer?.data?.data?.AllCustomer?.map((item, index) => {
                                    return (
                                        <tbody key={index} className="bg-white text-black items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                                            <tr className=" border-b">
                                                <td className="px-6 py-5 font-bold">
                                                    {index + 1 }
                                                </td>
                                                <td className="px-6 py-5 capitalize">
                                                    {item?.first_name}
                                                </td>
                                                <td className="px-6 py-5 capitalize">
                                                    {item.last_name}
                                                </td>
                                                <td className="px-6 py-5">
                                                    {item?.mobile}
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex justify-center items-center">
                                                        <Tippy content="Customer Profile">
                                                            <div>
                                                                <AiFillEye
                                                                    className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                                    onClick={() =>
                                                                        navigate(`/Customer/profile-detail/${item?.id}`)} />
                                                            </div>
                                                        </Tippy>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5 ">
                                                    <h1 className='italic font-semibold text-green-600'>
                                                        Running
                                                    </h1>
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
                        AllCustomer?.data?.data?.AllCustomer?.length > 0 ?
                            null
                            :
                            <div className='flex justify-center items-center w-full pt-5 space-x-4 text-gray-500'>
                                <FaUsers className='text-3xl' />
                                <h1 className='font-semibold'>Customer Not Found</h1>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Search