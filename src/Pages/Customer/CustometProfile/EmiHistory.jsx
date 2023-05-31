import React from 'react'
import { FaReceipt } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai";
import "../../../App.css"
import { useNavigate, useParams } from "react-router-dom";
import ChargeFormModal from '../../../Component/ChargeFormModal';
import { getEmiPurchasebyId } from '../../../utils/apiCalls';
import { useQuery } from 'react-query'
import moment from 'moment'

function EMIHistory() {
    const navigate = useNavigate();
    const params = useParams();
    const [chargeFormModal, setChargeFormModal] = React.useState(false);
    const data = useQuery(['emi', params.id], () => getEmiPurchasebyId(params.id));

    return (
        <>
            <div className='xs:px-5 sm:px-10 sm:py-5 h-full'>
                <div className='sm:py-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>EMI Details</h1>
                </div>
                <div className='xs:px-0 xs:py-5 xl:px-20'>
                    <div className="bg-white xs:overflow-x-scroll xl:overflow-x-hidden">
                        <table className="w-full bg-[#0d0d48] text-sm text-center  " id="table-to-xls" >
                            <thead className="text-xs text-gray-700 bg-class3-50 uppercase  ">
                                <tr className="text-white text-xs ">
                                    <th scope="col" className="pl-3 py-4">
                                        Receipt No
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Due Date
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Paid Date
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Amount
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Installment
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        status
                                    </th>
                                    <th scope="col" className="px-6 py-4">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {
                                data?.data?.data?.AllEmi?.length > 0 ? (
                                    data?.data?.data?.AllEmi?.map((item, index) => {
                                        console.log(item.status)
                                        return (
                                            <tbody className="bg-white items-center bg  overflow-x-scroll xl:overflow-x-hidden 2xl:overflow-x-hidden">
                                                <tr className=" border-b">
                                                    <th className="py-5 px-6">
                                                        01
                                                    </th>
                                                    <td className="px-6 py-5 ">
                                                        {moment(item.due_date).format("DD / MM / YYYY")}
                                                    </td>
                                                    <td className="px-6 py-5 ">
                                                        {moment(item.paid_date).format("DD / MM / YYYY")}
                                                    </td>
                                                    <td className="px-6 py-5 capitalize">
                                                        {item.amount}
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        2
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        {
                                                            item.status == 0 ?
                                                                <h1 className='bg-red-300 text-red-900 font-bold py-[2px] rounded-md'>
                                                                    Pending
                                                                </h1>
                                                                :
                                                                <h1 className='bg-green-300 text-green-900 font-bold py-[2px] rounded-md'>
                                                                    Paid
                                                                </h1>
                                                        }
                                                    </td>
                                                    <td className="px-6 py-5">
                                                        {
                                                            item.status == 0 ?
                                                                <div
                                                                    onClick={() => setChargeFormModal(true)}
                                                                    className="flex justify-center items-center bg-green-600 hover:bg-green-500 py-[5px] rounded-lg cursor-pointer text-white font-semibold">
                                                                    Pay
                                                                </div>
                                                                :
                                                                <div className="flex justify-center items-center">
                                                                    <AiFillEye
                                                                        className="xs:text-base md:text-sm lg:text-[19px] hover:cursor-pointer "
                                                                        onClick={() =>
                                                                            navigate(`/Receipt/Receipt`)}
                                                                    />
                                                                </div>
                                                        }
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
                            data?.data?.data?.AllEmi?.length > 0 ?
                                null
                                :
                                <div className='flex justify-center items-center w-full py-5 space-x-2 text-gray-500'>
                                    <FaReceipt className='text-xl' />
                                    <h1 className='font-semibold'>Emi Not Found</h1>
                                </div>
                        }
                    </div>
                </div>
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

export default EMIHistory