import { React, useState } from 'react'
import { BiSearch } from "react-icons/bi"
import "../../../App.css"
import { AiFillEye } from "react-icons/ai";
import { IoMdInformationCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { onerecieptDetailsbyNumber, getallReceipt } from '../../../utils/apiCalls';
import { useQuery } from 'react-query'
import moment from 'moment'
import LoaderSmall from '../../../Component/LoaderSmall';


function SearchReciept() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const data = useQuery(['receipt', pageNo, search], () => onerecieptDetailsbyNumber({
    pageNo: pageNo - 1,
    search
  }))
  // console.log(data?.data?.data?.data)
  return (
    <>
      <div className=' sm:px-5 xl:px-10 py-5 h-full'>
        <div className=' py-5 px-5'>
          <h1 className='text-[#0d0d48] text-2xl font-bold'>Search Receipt</h1>
          <div className='flex justify-center items-center mt-10 '>
            <input
              type="search"
              autoFocus={true}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder='Search Receipt (BY : Receipt ID , Name , Whatsapp Number)'
              className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-l-lg w-2/3'
            />
          </div>
        </div>
        {
          data?.data?.data?.data?.length > 0 ?
            (
              <div className="bg-white shadow-md  xs:overflow-x-scroll xl:overflow-x-hidden pt-5 mt-10 mx-10">
                <h1 className='font-bold text-lg pl-10'>Customer List</h1>
                <table
                  className="w-full text-sm text-center rounded-xl mt-5"
                  id="table-to-xls">
                  <thead className="bg-gray-100">
                    <tr className="font-light">
                      <th scope="col" className="pl-3 py-4 font-normal">
                        Date
                      </th>
                      <th scope="col" className="pl-3 py-4 font-normal">
                        Receipt No
                      </th>
                      <th scope="col" className="px-6 py-4 font-normal">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-4 text-start font-normal">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-4 font-normal">
                        Installment
                      </th>
                      <th scope="col" className="px-6 py-4 font-normal">
                        Paid
                      </th>
                      <th scope="col" className="px-6 py-4 font-normal">
                        Total
                      </th>
                      <th scope="col" className="px-6 py-4 font-normal">
                        Admin
                      </th>
                      <th scope="col" className="px-6 py-4 font-normal">
                        Action
                      </th>
                    </tr>
                  </thead>

                  {

                    data?.data?.data?.data?.map((item, index) => {
                      console.log(item)
                      return (
                        <tbody key={index} className="bg-white text-black items-center overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden h-20">
                          <tr className=" border-b">
                            <td className="px-6 py-5">
                              {moment(item.createdAt).format("DD / MM / YYYY")}
                            </td>
                            <td className="px-6 py-5 font-bold">
                              {item.id}
                            </td>
                            <td className="px-6 py-5">
                              {item.emi.purchase.customer.first_name}
                            </td>
                            <td className="px-3 text-start py-5">
                              <span>{item.emi.purchase.phone.company.company_name}</span> |  <span>{item.emi.purchase.phone.model_name}</span>

                            </td>
                            <td className="px-6 py-5">
                              5
                            </td>
                            <td className="px-6 py-5">
                              <h1 className='bg-green-300 text-green-900 font-bold rounded-md'>
                                {item.emi.amount}
                              </h1>
                            </td>
                            <td className="px-6 py-5">
                              <h1 className='bg-blue-200 text-blue-900 font-bold rounded-md'>
                                {item.emi.purchase.net_amount}
                              </h1>
                            </td>
                            <td className="px-6 py-5">
                              Israil
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex justify-center items-center">
                                <Tippy content="Show Reciept">
                                  <div>
                                    <AiFillEye
                                      className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                      onClick={() =>
                                        navigate(`/Receipt/Receipt`)}
                                    />
                                  </div>
                                </Tippy>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      )
                    })
                  }
                </table>
              </div>
            )
            :
            (
              <div className='flex mx-20 justify-center items-center py-[7px]  rounded-md space-x-4 bg-red-200'>
                <IoMdInformationCircle className='text-xl text-red-600' />
                <h1 className='text-sm font-bold text-red-800'>No Receipt Found </h1>
              </div>
            )
        }
      </div>
    </>
  )
}

export default SearchReciept
