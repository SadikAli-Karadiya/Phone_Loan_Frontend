import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../App.css"
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import LoaderSmall from '../../Component/LoaderSmall';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function Search() {
    const navigate = useNavigate();
    const [data, setdata] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [showNotFound, setShowNotFound] = React.useState(-1)
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
                {/* {
                    loading
                        ?
                        <LoaderSmall />
                        :

                        (
                            data?.length > 0
                                ? ( */}
                <div className="bg-white shadow-md  xs:overflow-x-scroll xl:overflow-x-hidden px-10 py-5 mt-5">
                    <h1 className='font-bold text-lg'>Customer List</h1>
                    <table
                        className="w-full text-sm text-center rounded-xl  text-white  mt-5"
                        id="table-to-xls"
                    >
                        <thead className="text-xs uppercase bg-[#0d0d48]">
                            <tr className="text-sm">
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
                                    Company
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Model
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Total
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
                        <tbody className="bg-white text-black items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                            <tr className=" border-b">
                                <td className="px-6 py-5 font-bold">
                                    001
                                </td>
                                <td className="px-6 py-5 capitalize">
                                    Shad
                                </td>
                                <td className="px-6 py-5">
                                    1234567890
                                </td>
                                <td className="px-6 py-5">
                                    Vivo
                                </td>
                                <td className="px-6 py-5">
                                    F17
                                </td>
                                <td className="px-6 py-5">
                                    <h1 className='bg-blue-100 py-[2px] rounded-md font-bold text-blue-900'>
                                        15000
                                    </h1>
                                </td>
                                <td className="px-6 py-5">
                                    <h1 className='bg-red-100 py-[2px] rounded-md font-bold text-red-900'>
                                        15000
                                    </h1>
                                </td>
                                <td className="px-6 py-5">
                                    <div className="flex justify-center items-center">
                                        <Tippy content="Customer Profile">
                                            <div>
                                                <AiFillEye
                                                    className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                    onClick={() =>
                                                        navigate(`/Customer/profile-detail`)}
                                                />
                                            </div>
                                        </Tippy>
                                    </div>
                                </td>
                                <td className="px-6 py-5 ">
                                    <h1 className='italic font-semibold text-green-600'>
                                        Current
                                    </h1>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* )
                                : (
                                    showNotFound != -1
                                        ?
                                        <div className="bg-red-200 font-bold justify-center items-center p-2 rounded mx-3 flex space-x-2">
                                            <IoMdInformationCircle className="text-xl text-red-600" />

                                            <h1 className="text-red-800">No Student Found </h1>
                                        </div>
                                        :
                                        null
                                )
                        )
                } */}
            </div>
        </>
    )
}

export default Search