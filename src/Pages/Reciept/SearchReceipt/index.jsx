import { React, useState } from 'react'
import { BiSearch } from "react-icons/bi"
import "../../../App.css"
import { AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { getallReceipt } from '../../../utils/apiCalls';
import { useQuery } from 'react-query'
import moment from 'moment'


function SearchReciept() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [CustomerReceipts, setCustomerReceipts] = useState([])
  const [showNotFound, setShowNotFound] = useState(-1)
  const data = useQuery(['receipt', searchValue], () => getallReceipt(searchValue))

  const searchAllReceipts = async (e) => {
    try {
      e.preventDefault();
      if (searchValue == '' || searchValue == ' ') {
        return;
      }

      setLoading(true);
      const res = await searchReceipt(searchValue, section == 'primary' ? 1 : 0)
      setLoading(false);

      setCustomerReceipts(res.data.student_receipts)
      setShowNotFound(1)
    }
    catch (err) {
      setLoading(false);
      if (err instanceof AxiosError) {
        Toaster("error", err.response.data.message);
      }
      else {
        Toaster("error", err.message);
      }
    }
  }

  return (
    <>
      <div className=' sm:px-5 xl:px-10 py-5 h-full'>
        <div className=' py-5 px-5'>
          <h1 className='text-[#0d0d48] text-2xl font-bold'>Search Receipt</h1>
          <div className='flex justify-center items-center mt-10 '>
            <input
              type="search"
              autoFocus={true}
              value={searchValue}
              onChange={(e) => { setSearchValue(e.target.value) }}
              placeholder='Search Receipt (BY : Receipt ID , Name , Whatsapp Number)'
              className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-l-lg w-2/3'
            />
            <div
              onClick={searchAllReceipts}
              className='bg-[#0d0d48] px-3 py-[7px] group rounded-r-lg flex justify-center items-center
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
              CustomerReceipts?.length > 0
                ?
                ( */}
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
            <tbody className="bg-white text-black items-center overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden h-20">
              <tr className=" border-b">
                <td className="px-6 py-5">
                  001
                </td>
                <td className="px-6 py-5 font-bold">
                  01
                </td>
                <td className="px-6 py-5">
                  Shad
                </td>
                <td className="px-3 text-start py-5">
                  Vivo | F17
                </td>
                <td className="px-6 py-5">
                  5
                </td>
                <td className="px-6 py-5">
                  <h1 className='bg-green-300 text-green-900 font-bold rounded-md'>
                    5000
                  </h1>
                </td>
                <td className="px-6 py-5">
                  <h1 className='bg-blue-200 text-blue-900 font-bold rounded-md'>
                    5000
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
          </table>
        </div>
        {/* )
                : (
                  showNotFound != -1
                    ?
                    <div className="bg-red-200 font-semibold justify-center items-center p-2 mt-10 rounded mx-3 flex space-x-2">
                      <IoMdInformationCircle className="text-xl text-red-600" />

                      <h1 className="text-red-800">No Customer Found </h1>
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

export default SearchReciept
