import { React, useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import "../../App.css"
import { useNavigate } from "react-router-dom";
import LoaderSmall from '../../Component/LoaderSmall';
import Tippy from '@tippyjs/react';
import { IoMdInformationCircle } from 'react-icons/io';
import 'tippy.js/dist/tippy.css';
import { useQuery } from 'react-query'
import ChargeFormModal from '../../Component/ChargeFormModal';
import { getPurchaseCustomerbyNumber } from '../../utils/apiCalls';
import Pagination from 'react-responsive-pagination'
import '../../Component/Pagination/pagination.css'

function PayEMI() {
  const navigate = useNavigate();
  // const { isLoading, isError, error, mutate } = useMutation((data) => { console.log(data) }, { retry: 3 })
  const [chargeFormModal, setChargeFormModal] = useState(false);
  const [search, setSearch] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const purchase = useQuery(['purchase', pageNo, search], () => getPurchaseCustomerbyNumber({
    pageNo: pageNo - 1,
    search
  }))
  console.log(purchase?.data?.data)

  return (
    <>
      <div className=' sm:px-5 xl:px-10 py-5 h-full'>
        <div className=' py-5 px-5'>
          <h1 className='text-[#0d0d48] text-2xl font-bold'>Pay EMI</h1>
          <div className='flex justify-center items-center mt-10 '>
            <input
              type="search"
              autoFocus={true}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder='Search Customer  (BY : Name , Whatsapp Number)'
              className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-lg w-2/3'
            />
          </div>
        </div>

        {
          purchase?.data?.data?.data?.length > 0 ?
            (
              <div className="bg-white shadow-md  xs:overflow-x-scroll xl:overflow-x-hidden mx-10 pt-5 mt-10">
                <h1 className='font-bold text-lg pl-7'>Customer List</h1>
                <table
                  className="w-full text-sm text-center rounded-xl  text-white  mt-5"
                  id="table-to-xls">
                  <thead className="text-xs  bg-gray-100 text-[#0d0d48]">
                    <tr className=" text-sm">
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Model
                      </th>
                      <th scope="col" className="px-6 py-4">
                        EMI Date
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
                  {
                    purchase?.data?.data?.data?.map((item, index) => {
                      let isPending = false;
                      const paidAmount = item.net_amount - item.pending_amount;

                      if (item.net_amount > paidAmount) {
                        isPending = true;
                      }
                      return (
                        <tbody key={index} className={`${isPending ? "bg-red-100" : "bg-green-100"} text-black items-center  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden`}>
                          <tr className=" border-b">
                            <td className="px-6 py-5 capitalize space-x-2">
                              <span>{item.customer.first_name}</span>
                              <span>{item.customer.last_name}</span>
                            </td>
                            <td className="px-6 py-5">
                              {item.customer.mobile}
                            </td>
                            <td className="px-6  py-5">
                              <span>{item.phone.company.company_name}</span> || <span>{item.phone.model_name}</span>
                            </td>
                            <td className="px-6 py-5">
                              10 / 12 / 23
                            </td>
                            <td className="px-6 py-5">
                              {item.net_amount}
                            </td>
                            <td className="px-6 py-5">
                              {item.pending_amount}
                            </td>
                            <td className="px-6 py-5">
                              <div className="flex justify-center items-center">
                                <Tippy content="Customer Profile">
                                  <div>
                                    <AiFillEye
                                      className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                      onClick={() =>
                                        navigate(`/Customer/profile-detail/${item.customer.customer_id}`)}
                                    />
                                  </div>
                                </Tippy>
                              </div>
                            </td>
                            <td className="px-6 py-5 ">
                              <div className="flex justify-center space-x-3">
                                <button
                                  onClick={() => setChargeFormModal(true)}
                                  className='bg-green-800 hover:bg-green-700 px-4 text-white py-[3px] text-sm font-semibold rounded-md'>
                                  Pay
                                </button>
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
                <h1 className='text-sm font-bold text-red-800'>No Customer Found </h1>
              </div>
            )
        }

        {/* {
          purchase?.data?.data?.data?.length > 0 ?
            <div className='mx-auto px-20 py-12 sm:px-24 sm:py-12 md:px-28 md:py-16'>
              <Pagination
                total={purchase && purchase?.data?.data?.pageCount ? purchase?.data?.data?.pageCount : 0}
                current={pageNo}
                onPageChange={(page) => setPageNo(page)}
              // previousLabel="Previous" nextLabel="Next"
              />
            </div>
            :
            null
        } */}

        <ChargeFormModal
          showModal={chargeFormModal}
          handleShowModal={setChargeFormModal}
        // refetchData={refetchData}
        // tournamentDetails={tournamentDetails}
        />
      </div>
    </>
  )
}

export default PayEMI