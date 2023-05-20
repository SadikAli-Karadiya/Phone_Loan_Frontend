import { React, useState } from 'react'
import { BiSearch } from "react-icons/bi"
import { AiFillEye } from "react-icons/ai";
import "../../App.css"
import { useNavigate } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import LoaderSmall from '../../Component/LoaderSmall';



function PayEMI() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNotFound, setShowNotFound] = useState(-1)
  const [data, setdata] = useState([
    // {
    //   id: 1,
    //   installment: 1,
    //   dp: 40,
    //   charge: 1500,
    //   CustomersList: [
    //     {
    //       id: 1,
    //       customer_id: 1,
    //       name: "shad",
    //       mobile: 1234567890,
    //       total: 15000,
    //       pending: 7500,
    //     },
    //     {
    //       id: 2,
    //       customer_id: 2,
    //       name: "xyz",
    //       mobile: 1234567890,
    //       total: 10000,
    //       pending: 7500,
    //     }
    //   ]
    // },
    // {
    //   id: 2,
    //   installment: 2,
    //   dp: 45,
    //   charge: 1600,
    //   CustomersList: [
    //     {
    //       id: 1,
    //       customer_id: 1,
    //       name: "shad",
    //       mobile: 1234567890,
    //       total: 15000,
    //       pending: 7500,
    //     },
    //     {
    //       id: 2,
    //       customer_id: 2,
    //       name: "xyz",
    //       mobile: 1234567890,
    //       total: 10000,
    //       pending: 7500,
    //     }
    //   ]
    // },
    // {
    //   id: 3,
    //   installment: 3,
    //   dp: 50,
    //   charge: 1800,
    //   CustomersList: [
    //     {
    //       id: 1,
    //       customer_id: 1,
    //       name: "shad",
    //       mobile: 1234567890,
    //       total: 15000,
    //       pending: 7500,
    //     },
    //     {
    //       id: 2,
    //       customer_id: 2,
    //       name: "xyz",
    //       mobile: 1234567890,
    //       total: 10000,
    //       pending: 7500,
    //     }
    //   ]
    // },
    // {
    //   id: 4,
    //   installment: 4,
    //   dp: 55,
    //   charge: 2000,
    //   CustomersList: [
    //     {
    //       id: 1,
    //       customer_id: 1,
    //       name: "shad",
    //       mobile: 1234567890,
    //       total: 15000,
    //       pending: 7500,
    //     },
    //     {
    //       id: 2,
    //       customer_id: 2,
    //       name: "xyz",
    //       mobile: 1234567890,
    //       total: 10000,
    //       pending: 7500,
    //     }
    //   ]
    // },
  ])

  async function searchStudent() {
    try {
      if (searchValue == '' || searchValue == ' ') {
        return;
      }
      setLoading(true);
      const res = await getStudentDetails(searchValue, section == 'primary' ? 1 : 0)
      setLoading(false);
      setdata(res?.data?.data?.students_detail?.length > 0 ? res?.data?.data?.students_detail : null);
      setShowNotFound(1)
    }
    catch (err) {
      setLoading(false);
      if (err instanceof AxiosError) {
        if (err.response) {
          Toaster("error", err?.response?.data?.message);
        }
        else {
          Toaster("error", err.message);
        }
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
          <h1 className='text-[#0d0d48] text-2xl font-bold'>Pay EMI</h1>
          <div className='flex justify-center items-center mt-10 '>
            <input
              type="search"
              autoFocus={true}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search Customer  (BY : ID , Name , Whatsapp Number)'
              className='drop-shadow-lg border px-4 py-[6px]  focus:outline-none rounded-l-lg w-2/3'
            />
            <div
              onClick={searchStudent}
              className='bg-[#0d0d48] px-3 py-[7px] group rounded-r-lg flex justify-center items-center
            shadow-xl cursor-pointer text-white text-2xl '>
              <BiSearch className='search group-hover:scale-125 duration-300' />
            </div>
          </div>
        </div>
        {/* 
        {
          loading
            ?
            <LoaderSmall />
            :
            (
              data?.length > 0
                ?
                ( */}
          <div className="bg-white shadow-md  xs:overflow-x-scroll xl:overflow-x-hidden px-10 py-5 mt-5">
            <h1 className='font-bold text-lg'>Customer List</h1>
            <table
              className="w-full text-sm text-center rounded-xl  text-white  mt-5"
              id="table-to-xls">
              <thead className="text-xs uppercase bg-[#0d0d48]">
                <tr className=" text-sm">
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
                    15000
                  </td>
                  <td className="px-6 py-5">
                    5000
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex justify-center items-center">
                      <AiFillEye
                        className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                        onClick={() =>
                          navigate(`/Customer/profile-detail`)}
                      />
                    </div>
                  </td>
                  <td className="px-6 py-5 ">
                    <div className="flex justify-center space-x-3">
                      <button
                        onClick={() =>
                          navigate(`/Receipt/Generate`)}
                        className='bg-green-800 hover:bg-green-700 px-4 text-white py-[3px] text-sm font-semibold rounded-md'>
                        Pay
                      </button>
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
                    <div className="bg-red-200 font-bold justify-center items-center p-2 rounded mx-3 flex space-x-2">
                      <IoMdInformationCircle className="text-xl text-red-600" />

                      <h1 className="text-red-800">No Curtomer Found </h1>
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

export default PayEMI