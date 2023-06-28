import React from 'react'
import { BiSearch } from "react-icons/bi"
import "../../App.css"
import { AiFillEye } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import LoaderSmall from '../../Component/LoaderSmall';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { getAllCustomer, searchCustomer } from '../../utils/apiCalls';
import { useQuery, useMutation } from 'react-query'
import { FaUsers } from "react-icons/fa";
import Pagination from 'react-responsive-pagination'
import '../../Component/Pagination/pagination.css'


function Search() {
    const navigate = useNavigate();
    const [data, setdata] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');
    const [showNotFound, setShowNotFound] = React.useState(-1)
    const [search, setSearch] = React.useState("");
    const [pageNo, setPageNo] = React.useState(1);
    const [Customers, setCustomers] = React.useState([]);
    const searchCustomerWithName = useMutation(searchCustomer)
    const AllCustomer = useQuery(['customer', pageNo], () => getAllCustomer({ pageNo: pageNo - 1, }))

    const handleCustomerSearch = async (e) => {
        setSearch(e.target.value)
        if (e.target.value == '') {
            setCustomers(AllCustomer?.data?.data?.AllCustomer)
            return;
        }
        searchCustomerWithName.mutate(e.target.value)
    }


    React.useEffect(() => {
        setCustomers(AllCustomer?.data?.data?.AllCustomer)
    }, [AllCustomer?.data?.data?.AllCustomer])

    React.useEffect(() => {
        setCustomers(searchCustomerWithName?.data?.data?.modelDetails)
    }, [searchCustomerWithName.isSuccess, searchCustomerWithName.data])

    console.log(Customers)

    return (
        <>
            <div className=' sm:px-5 xl:px-10 py-5 h-full'>
                <div className=' py-5 px-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>Search Past / Current Customer</h1>
                    <div className='flex justify-center items-center mt-10 '>
                        <input
                            type="search"
                            onChange={handleCustomerSearch}
                            value={search}
                            placeholder='Search Customer (BY : Name , Whatsapp Number)'
                            className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-lg w-2/3'
                        />
                    </div>
                </div>
                <div className="bg-white shadow-md  xs:overflow-x-scroll xl:overflow-x-hidden mx-10 px-10 py-5 mt-5">
                    <h1 className='font-bold text-lg pl-5'>Customer List</h1>
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
                                    Full Name
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Mobile
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    alternate_no
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    Profile
                                </th>
                            </tr>
                        </thead>
                        {
                            Customers?.length > 0 ? (
                                Customers?.map((item, index) => {
                                    return (
                                        <tbody key={index} className="bg-white text-black items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                                            <tr className=" border-b">
                                                <td className="px-6 py-5 font-bold">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-5 capitalize">
                                                    {item?.full_name}
                                                </td>
                                                <td className="px-6 py-5">
                                                    {item?.mobile}
                                                </td>
                                                <td className="px-6 py-5">
                                                    {item?.alternate_no ? item?.alternate_no : "--"}
                                                </td>
                                                <td className="px-6 py-5 flex justify-center items-center">
                                                    <div className='flex items-center space-x-2'>
                                                        <div className="flex justify-center items-center">
                                                            <Tippy content="Customer Profile">
                                                                <div>
                                                                    <AiFillEye
                                                                        className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                                        onClick={() =>
                                                                            navigate(`/InstallmentList/profile-detail/${item?.id}`)} />
                                                                </div>
                                                            </Tippy>
                                                        </div>
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
                        Customers?.length > 0 ?
                            null
                            :
                            <div className='flex justify-center items-center w-full pt-5 space-x-4 text-gray-500'>
                                <FaUsers className='text-3xl' />
                                <h1 className='font-semibold'>Customer Not Found</h1>
                            </div>
                    }
                </div>
                {
                    Customers?.length > 0
                        ?
                        <div className='mx-auto BGYE px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-5'>
                            <Pagination
                                total={AllCustomer?.data?.data && AllCustomer?.data?.data?.pageCount ? AllCustomer?.data?.data?.pageCount : 0}
                                current={pageNo}
                                onPageChange={(page) => setPageNo(page)}
                                previousLabel="Previous" nextLabel="Next"
                            />
                        </div>
                        :
                        null
                }
            </div>
        </>
    )
}

export default Search