import React from "react";
import { BiRupee } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { getReceiptbyReceiptId } from '../../../utils/apiCalls';
import { useQuery } from 'react-query'
import moment from 'moment'


function Receipt() {
    const params = useParams();
    const data = useQuery(['transection', params.id], () => getReceiptbyReceiptId(params.id));
    // console.log(data?.data?.data?.SingleTransaction)
    const handleDeleteReceipt = async () => {
        Swal.fire({
            title: "Are you sure to delete installment?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete",
        }).then(async (result) => {
            if (result.isConfirmed) {
                // const deleteClassResponse = await DeleteInstallment(id);
                let success
                if (success) {
                    toast.success("Receipt Delete Successfull");
                }
                // else if (deleteClassResponse.data.success == false) {
                //     toast.error(deleteClassResponse.data.message);
                // }
            }
        });
    };

    return (
        <>
            <div className=' sm:px-5 xl:px-10 h-full'>
                <div className=' py-5 px-5'>
                    <h1 className='text-[#0d0d48] text-2xl font-bold'>Receipt</h1>
                </div>
                <div className="flex justify-center items-center px-5">
                    <div className=" py-7 bg-white w-[790px] shadow-xl rounded-md h-full ">
                        <div className="px-10 flex items-center justify-between">
                            <div className="flex items-center ">
                                <div className="logo">
                                    <h1 className="font-bold text-4xl">LOGO</h1>
                                </div>
                                <div className="address pl-20">
                                    <span>Phone : +91 7600199352</span>
                                    <p>Ajit Mill Char Rasta</p>
                                    <p>Rakhial Road Ahmedabad</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-2xl">Receipt No : </h1>
                                <div className="bg-slate-200 py-[10px] px-9 rounded-full ml-4">
                                    <span className="text-2xl text-gray-600 font-bold">000001</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full px-10 pt-4 space-x-5">
                            <div className="flex items-center w-[65%] py-5">
                                <h1 className=" font-semibold w-[230px]">Customer Name <span className="ml-5">:</span></h1>
                                <div className="text-xl w-full border-dotted border-b-2 border-slate-300">
                                    <span className=" uppercase font-semibold text-[16px] space-x-2">
                                        <span>{data?.data?.data?.SingleTransaction?.receipt?.emi?.purchase?.customer?.first_name}</span>
                                        <span>{data?.data?.data?.SingleTransaction?.receipt?.emi?.purchase?.customer?.last_name}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center w-[35%]">
                                <h1 className=" font-semibold w-[100px]">Date <span className="ml-3 "> :</span></h1>
                                <div className="text-xl w-full border-dotted border-b-2 border-slate-300">
                                    <span className="uppercase font-semibold text-[16px]  ">
                                        {moment(data?.data?.data?.SingleTransaction?.createdAt).format("DD / MM / YYYY")}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full px-10 ">
                            <div className="flex items-center w-full">
                                <h1 className=" font-semibold w-[200px]">Amount <span className="ml-[80px] ">: </span> </h1>
                                <div className="text-xl w-full border-dotted border-b-2 border-slate-300">
                                    <span className="uppercase font-semibold text-[16px]  ">Fifthy thousand only</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-200 mx-16 rounded-full items-center px-6 py-2 h-12 flex  ml-48 my-4">
                            <BiRupee className="text-3xl mt-1" />
                            <h1 className="font-bold ml-3 text-3xl">
                                {data?.data?.data?.SingleTransaction?.amount}
                                /-</h1>
                        </div>
                        <div className="flex justify-start w-full px-10">
                            <h1 className=" font-semibold w-40">Payment For <span className="ml-5">:</span></h1>
                            <div className="ml-10 flex items-center text-xl w-full space-x-2 border-dotted border-b-2 border-slate-300">
                                <span className=" uppercase font-semibold text-[16px] ">
                                    {data?.data?.data?.SingleTransaction?.receipt?.emi?.type}
                                </span>
                                <div className="uppercase font-semibold text-[16px] space-x-2 ">
                                    (
                                    <span className="">
                                        {data?.data?.data?.SingleTransaction?.receipt?.emi?.purchase?.phone?.company?.company_name}
                                    </span>
                                    <span>
                                        {data?.data?.data?.SingleTransaction?.receipt?.emi?.purchase?.phone?.model_name}
                                    </span>

                                    )
                                </div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between px-10 pt-5">
                            <div className="space-y-1">
                                <div className="flex items-center w-64">
                                    <h1 className=" font-semibold text-sm">Total Amount </h1>
                                    <span className="pl-[26px] text-lg">:</span>
                                    <div className="px-4 ml-3 font-semibold rounded-md text-slate-600">
                                        <h1>150000</h1>
                                    </div>
                                </div>
                                <div className="flex items-center w-64">
                                    <h1 className=" font-semibold">Paid Amount </h1>
                                    <span className="pl-[19px] text-lg">:</span>
                                    <div className="px-4 ml-3 font-semibold  rounded-md text-slate-600 ">
                                        <h1>5000</h1>
                                    </div>
                                </div>
                                <div className="flex items-center w-64">
                                    <h1 className=" font-semibold">Due Amount </h1>
                                    <span className="pl-5 text-lg">:</span>
                                    <div className="px-4 ml-3 font-semibold rounded-md text-slate-600 ">
                                        <h1>10000</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <h1 className="font-semibold">By : </h1>
                                <div className="flex flex-col items-start ml-3">
                                    <p className="font-semibold">
                                        {
                                            data?.data?.data?.SingleTransaction?.is_by_cash == true
                                                ?
                                                (<span>Cash</span>)
                                                :
                                                data?.data?.data?.SingleTransaction?.is_by_upi == true ?
                                                    <span>UPI ( {data?.data?.data?.SingleTransaction?.upi_no} ) </span>
                                                    :
                                                    data?.data?.data?.SingleTransaction?.is_by_cheque == true
                                                        ?
                                                        <div>
                                                        <span> Cheque </span>
                                                        <div>
                                                            <span> {moment(data?.data?.data?.SingleTransaction?.cheque_date).format("DD / MM / YYYY")}</span>
                                                            <span>( {data?.data?.data?.SingleTransaction?.cheque_no} )</span>
                                                        </div>
                                                        </div>
                                                        :
                                                        null
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="w-[20%]">
                                <div className="border-b-2">

                                </div>
                                <h1 className="font-semibold mt-2 text-end text-sm text-slate-500">Authorized Signature</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-8 space-x-5">
                    <button className="bg-[#0d0d48] flex items-center space-x-1 px-2 py-[5px] hover:bg-slate-600 rounded-md text-white">
                        <MdModeEdit className="text-blue-400" />
                        <h1 className="text-sm">Edit</h1>
                    </button>
                    <button
                        onClick={handleDeleteReceipt}
                        className="bg-[#0d0d48] flex items-center space-x-1 px-2 py-[5px] hover:bg-slate-500 rounded-md text-white">
                        <MdDelete className="text-blue-400" />
                        <h1 className="text-sm">Delete</h1>
                    </button>
                    <button className="bg-[#0d0d48]  px-2 py-[5px] text-sm rounded-md hover:bg-slate-500 text-white">Download/Print</button>
                </div>
            </div >
        </>
    )
}

export default Receipt