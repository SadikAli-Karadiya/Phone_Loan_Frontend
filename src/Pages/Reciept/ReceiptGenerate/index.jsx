import React from "react";
import { toast } from 'react-toastify';
import { AiFillCloseCircle } from "react-icons/ai";
import { FaRupeeSign } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";
import { AxiosError } from "axios";

function GenerateReceipt() {


    const [fee, setFee] = React.useState('');
    const [discount, setDiscount] = React.useState('');
    const [payment, setPayment] = React.useState("cash");
    const [chequeNo, setChequeNo] = React.useState('');
    const [upiNo, setUpiNo] = React.useState('');
    const [toggleCheque, setToggleCheque] = React.useState(false);
    const [toggleUpi, setToggleUpi] = React.useState(false);
    const [toggleCash, setToggleCash] = React.useState(true);

    const [deduction, setDeduction] = React.useState(0);
    const [discountAppliedMsg, setDiscountAppliedMsg] = React.useState(true);
    const [model, setModel] = React.useState(false);
    const [pin, setPin] = React.useState("");
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const [errors, setErrors] = React.useState({
        amount: '',
        discount: '',
        upi: '',
        cheque: '',
        invalid_pin: ''
    });

    function handleDiscount(e) {
        if (discount == '') {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    discount: '*Please enter discount'
                }
            })
            return;
        }
        if (Number(discount) > Number(fee)) {
            return;
        }
        if (fee == '' || fee == 0 || fee == undefined) {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    amount: '*Please enter amount'
                }
            })
            return;
        }
        setFee(fee - discount);
        setDeduction(discount);
        setDiscountAppliedMsg(false);
    }
    function handleRemoveDiscount() {
        setFee(Number(fee) + Number(deduction));
        setDeduction(0);
        setDiscountAppliedMsg(true);
    }
    function handlePaymentMethod(e) {
        setUpiNo('')
        setChequeNo('')
        setErrors((prevData) => {
            return {
                ...prevData,
                upi: ''
            }
        })
        setErrors((prevData) => {
            return {
                ...prevData,
                cheque: ''
            }
        })
        if (e.target.value == 1) {
            setPayment(e.target.value);
            setToggleCash(true);
            setToggleCheque(false);
            setToggleUpi(false);
        }
        else if (e.target.value == 2) {
            setPayment(e.target.value);
            setToggleCheque(false);
            setToggleCash(false)
            setToggleUpi(true);
        }
        else {
            setPayment(e.target.value);
            setToggleUpi(false);
            setToggleCash(false);
            setToggleCheque(true);
        }
    }
    const handleFeesValidation = (e) => {
        const regex = new RegExp(/^[0-9]+$/)

        let err = 0;
        if (regex.test(e.target.value)) {
            err++;
            setErrors((prevData) => {
                return {
                    ...prevData,
                    amount: ''
                }
            })
        }
        else {
            err++;
            setErrors((prevData) => {
                return {
                    ...prevData,
                    amount: '*Enter only numbers'
                }
            })
        }

        if (Number(e.target.value) < (discount ? Number(discount) : 0)) {
            err++;
            setErrors((prevData) => {
                return {
                    ...prevData,
                    amount: '*Amount should be greater than Discount'
                }
            })
        }
        if (err > 0) {
            setFee(e.target.value);
            return;
        }
        setDeduction(0);
        setDiscountAppliedMsg(true);
    }
    const handleDiscountValidation = (e) => {
        const regex = new RegExp(/^[0-9]+$/)
        if (e.target.value != '') {
            if (regex.test(e.target.value)) {
                setErrors((prevData) => {
                    return {
                        ...prevData,
                        discount: ''
                    }
                })
            }
            else {
                setErrors((prevData) => {
                    return {
                        ...prevData,
                        discount: '*Enter only numbers'
                    }
                })
            }
        }
        else {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    discount: ''
                }
            })
        }

        if (Number(e.target.value) > Number(fee)) {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    discount: '*Discount should be less than Amount'
                }
            })
        }
        setDiscount(e.target.value)
    }
    const handleUpiNo = (e) => {
        const regex = new RegExp(/^[0-9 A-Za-z@]+$/)

        if (regex.test(e.target.value)) {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    upi: ''
                }
            })
        }
        else {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    upi: '*Enter only numbers'
                }
            })
        }
        setUpiNo(e.target.value)
    }
    const handleChequeNo = (e) => {
        const regex = new RegExp(/^[0-9]+$/)

        if (regex.test(e.target.value)) {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    cheque: ''
                }
            })
        }
        else {
            setErrors((prevData) => {
                return {
                    ...prevData,
                    cheque: '*Enter only numbers'
                }
            })
        }
        setChequeNo(e.target.value)
    }

    const onSubmit = () => {
        let err = 0;
        if (fee == '') {
            err++;
            setErrors((prevData) => {
                return {
                    ...prevData,
                    amount: '*Please enter amount'
                }
            })
        }
        if (toggleUpi && upiNo == '') {
            err++;
            setErrors((prevData) => {
                return {
                    ...prevData,
                    upi: '*Please Enter UPI Number'
                }
            })
        }
        if (toggleCheque && chequeNo == '') {
            err++;
            setErrors((prevData) => {
                return {
                    ...prevData,
                    cheque: '*Please Enter Cheque Number'
                }
            })
        }
        if ((errors.amount != '' && errors.amount != undefined) || (errors.upi != '' && errors.upi != undefined) || (errors.cheque != '' && errors.cheque != undefined)) {
            err++;
        }

        if (err == 0) {
            setPayment(
                toggleCheque
                    ?
                    'Cheque'
                    :
                    toggleUpi
                        ?
                        'UPI'
                        :
                        'Cash'
            )
            setModel(true);
        }
        else {
            return;
        }

    }

    const navigate = useNavigate();
    async function handlePINsubmit() {
        try {
            const feesData = {
                is_by_cash: toggleCash ? 1 : 0,
                is_by_cheque: toggleCheque ? 1 : 0,
                is_by_upi: toggleUpi ? 1 : 0,
                cheque_no: chequeNo,
                upi_no: upiNo,
                amount: Number(fee) + Number(deduction),
                discount: deduction,
                admin_id: admin._id,
                security_pin: pin,
                student_id: student.rollno
            };

            setIsSubmitting(true);

            // const res = await generateStudentReceipt(feesData)
            const res = true

            setIsSubmitting(false);

            if (res == true) {
                toast('success', 'Receipt generated successfully')
                navigate("/Receipt/Receipt",
                    {
                        state: {
                            isStaff: false,
                            is_cancelled: 0,
                            fees_receipt_id: res.data.data.fees_receipt_details.fees_receipt_id,
                            prevPath: location.pathname
                        }
                    });
            } else {
                setErrors((prevData) => {
                    return {
                        ...prevData,
                        invalid_pin: res.data.message
                    }
                });
            }

        }
        catch (err) {
            setIsSubmitting(false);
            if (err instanceof AxiosError) {
                toast('success', err.response?.data?.message)
            }
            else {
                toast('success', err.message)
            }
        }
    }


    return (
        <>
            <div className="relative bg-student-100 py-3 ">
                {model && (
                    <div className='absolute w-full h-full  z-30 ' >

                        <div className="flex justify-center xs:px-4 mt-4 bg-white ">
                            <div className="absolute xs:h-[81%] md:h-[68%] xl:h-[74%] mx-auto  opacity-100 shadow-2xl rounded bg-white h-full xs:w-[80%]  w-2/3 z-50">
                                <div className="flex justify-end">
                                    <button
                                        onClick={(e) => {
                                            setModel(!model);
                                            setErrors((prevData) => {
                                                return {
                                                    ...prevData,
                                                    invalid_pin: ''
                                                }
                                            });
                                            setIsSubmitting(false);
                                        }}
                                        className="absolute translate-x-4 -translate-y-4 font-bold text-2xl p-2 text-red-700"
                                    >
                                        <AiFillCloseCircle />
                                    </button>
                                </div>

                                <div className="mt-7">
                                    <h1 className="text-2xl font-bold text-[#0d0d48] px-6 ">
                                        Confirm Payment{" "}
                                    </h1>
                                    <div className="flex xs:flex-col sm:flex-row py-4 justify-between">
                                        <div className="flex xs:flex-col xs:space-y-2 lg:space-y-1 xl:space-y-2 px-7 text-sm xs:order-2 sm:order-1">
                                            <div>
                                                <h2 className="font-bold text-lg tracking-wide">NAME : Shad</h2>
                                            </div>
                                            <div className="flex xs:space-y-2 lg:space-y-1 xs:flex-col">
                                                <div className="flex xs:flex-col xs:space-y-2 lg:flex-row lg:space-x-5 lg:space-y-0">
                                                    <h2 className="font-roboto">Company : Vivo</h2>
                                                    <h2 className="font-roboto">Model : F17</h2>
                                                    <h2 className="font-roboto">RAM : 4/64</h2>
                                                </div>
                                                <h3 className="font-roboto">Customer ID : 05</h3>
                                                <h3 className="font-roboto">Net Amount : 15000</h3>
                                                <h3 className="font-roboto">Pending Amount : 10000</h3>
                                                <h3 className="font-roboto">Last Paid Upto : 5000</h3>
                                            </div>
                                        </div>
                                        <div className="px-7 font-mono xs:order-1 sm:order-2 py-2 flex justify-end">
                                            <h3 className=""> Date : 05/02/2023</h3>
                                        </div>
                                    </div>

                                    <div className="flex xs:flex-col xs:space-x-0 xs:space-y-4 xs:py-1 sm:flex-row sm:space-y-0 sm:space-x-5 px-12 py-5  space-x-4">
                                        <span className="px-4 py-1 bg-green-200 text-green-900 font-bold text-sm rounded shadow-xl ">
                                            Paid : {fee}
                                        </span>
                                        <span className="px-4 py-1 bg-red-200 text-red-900 font-bold text-sm rounded shadow-xl ">
                                            Discount : {deduction}
                                        </span>
                                        <span className="px-4 py-1 bg-blue-200 text-[#0d0d48] font-bold text-sm rounded shadow-xl ">
                                            Total : {Number(fee) + Number(deduction)}
                                        </span>
                                    </div>
                                    <div className="flex xs:flex-col md:flex-row md:items-center justify-between xs:px-5">
                                        <div className="px-6 py-3 text-[#0d0d48] ">
                                            <h2 className="font-bold">* Paid by : <span className="font-medium text-gray-600">{payment}</span></h2>
                                            {
                                                toggleCheque
                                                    ?
                                                    <h2 className="font-bold">* Cheque No: <span className="font-medium text-gray-600">{chequeNo}</span></h2>
                                                    :
                                                    toggleUpi
                                                        ?
                                                        <h2 className="font-bold">* UPI ID: <span className="font-medium text-gray-600">{upiNo}</span></h2>
                                                        :
                                                        null
                                            }
                                        </div>

                                        <div className="flex justify-center items-center">
                                            <div className="border-2 xl:mx-8 mt-6 h-8  rounded-md xl:w-fit flex xs:flex-col xs:space-y-4 sm:flex-row sm:space-y-0  items-center border-[#0d0d48]">
                                                <input
                                                    type="password"
                                                    className="px-3 outline-none "
                                                    placeholder="Enter Security PIN"
                                                    onChange={(e) => setPin(e.target.value)}
                                                />
                                                <button
                                                    disabled={isSubmitting}
                                                    className={`px-4 py-1 ${isSubmitting ? 'bg-blue-600' : 'bg-[#0d0d48]'} text-white rounded-md`}
                                                    onClick={handlePINsubmit}
                                                >
                                                    {isSubmitting ? 'Loading...' : 'Submit'}
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    {
                                        errors.invalid_pin != ''
                                            ?
                                            <h1 className=" text-red-700  text-sm my-1 font-bold w-full pr-44  text-right">
                                                {errors.invalid_pin}
                                            </h1>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className={`mt-2 bg-student-100 xs:px-5 xl:px-12  py-2 ${model && "opacity-20"} `}
                >
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-[#0d0d48] text-2xl ">
                            Generate EMI Receipt
                        </h1>
                        <div className="group h-9 w-20 flex justify-center items-center gap-1 cursor-pointer" id="" onClick={() => navigate(-1)}>
                            <IoIosArrowBack className="text-2xl font-bold group-hover:text-blue-700 text-[#0d0d48] mt-[3px]" />
                            <span className=" text-xl text-[#0d0d48] font-semibold group-hover:text-blue-700">Back</span>
                        </div>

                    </div>
                    <div className="bg-white px-1 py-3 mt-9 shadow-2xl rounded-2xl ">
                        <div className="flex xs:flex-col sm:flex-row py-4 xl:py-2 justify-between">
                            <div className="flex xs:flex-col xs:space-y-2 lg:space-y-1 xl:space-y-2 px-7 text-sm xs:order-2 sm:order-1">
                                <div>
                                    <h2 className="font-bold text-lg tracking-wide">NAME : Shad</h2>
                                </div>
                                <div className="flex xs:space-y-2 sm:space-y-1 xs:flex-col">
                                    <div className="flex xs:flex-col xs:space-y-2 lg:flex-row lg:space-x-5 lg:space-y-0">
                                        <h2 className="font-roboto">Company : Vivo</h2>
                                        <h2 className="font-roboto">Model : F17</h2>
                                        <h2 className="font-roboto">RAM : 4/64</h2>
                                    </div>
                                    <h3 className="font-roboto">Customer ID: 05</h3>
                                    <h3 className="font-roboto">Net Amount : 15000</h3>
                                    <h3 className="font-roboto">Pending Amount : 10000</h3>
                                    <h3 className="font-roboto bgye">Last Paid Upto : <span className="bg-yellow-100 px-2 py-[2px] text-yellow-900 font-semibold">5000</span></h3>
                                </div>
                            </div>
                            <div className="px-7 font-mono xs:order-1 sm:order-2 py-2 flex justify-end">
                                <h3 className=""> Date : 05/02/2023</h3>
                            </div>
                        </div>

                        <div className="flex xs:flex-col lg:flex-row lg:items-center sm:items-start xs:space-y-5 px-6 lg:justify-between  ">
                            <div className="flex xs:flex-col xs:items-start sm:flex-row w-full sm:justify-between md:justify-start sm:items-center ">
                                <div className="flex flex-col xs:mt-2 sm:mt-4 xs:order-2 sm:order-1 ">
                                    <div className="flex items-center border-2 shadow-2xl border-[#0d0d48] w-fit  rounded-3xl">
                                        <span className="py-2 bg-[#0d0d48] text-white ml-[-1px] mr-4 font-bold border-2 border-[#0d0d48] rounded-full p-2">
                                            <FaRupeeSign />
                                        </span>
                                        <input
                                            type="text"
                                            className="px-2 mr-4 text-xl font-bold outline-none w-32"
                                            placeholder="Enter fees"
                                            value={fee}
                                            onChange={handleFeesValidation}
                                        />
                                    </div>
                                    {errors.amount != '' ? (<small className="text-red-700 mt-2">{errors.amount}</small>) : null}
                                </div>
                                <div className=" xs:ml-2 sm:ml-10 flex flex-col xs:order-1 sm:order-2">
                                    <h2 className="text-[14px]">No. of Months</h2>
                                    <select className="w-28 border-2 mt-2 px-2 py-1 outline-none rounded-md" >
                                        <option value="" className="text-gray-400">select</option>
                                        <option value="" className="text-gray-400">1</option>
                                        <option value="" className="text-gray-400">2</option>
                                    </select>
                                    {errors.month != '' ? (<small className="text-red-700 mt-2">{errors.month}</small>) : null}
                                </div>
                            </div>
                            <div className="xl:ml-24">
                                <h1 className="font-bold  text-lg">
                                    Discount : <span> {deduction}</span>
                                </h1>
                                {discountAppliedMsg ? (
                                    <div className="flex flex-col">
                                        <div className="flex rounded-l-md border-2 mr-2 my-2 h-8 rounded-r-lg border-[#0d0d48] items-center">
                                            <input
                                                placeholder="Enter Discount "
                                                className="outline-none px-2 py-0 w-32 rounded-l-md "
                                                value={discount}
                                                onChange={handleDiscountValidation}
                                            />
                                            <button
                                                className=" text-white py-1  px-4 bg-[#0d0d48] rounded-r-md"
                                                onClick={handleDiscount}
                                            >
                                                Apply
                                            </button>
                                        </div>
                                        {errors.discount != '' ? (<small className="text-red-700">{errors.discount}</small>) : null}
                                    </div>
                                )
                                    :
                                    <div className="flex flex-col items-end">
                                        <h1 className="text-green-800 font-bold">
                                            Discount Applied Successfully !
                                        </h1>
                                        <button className="text-center text-sm font-semibold hover:bg-red-300 text-white bg-red-400 rounded-md px-2 py-[5px] mt-2" onClick={() => handleRemoveDiscount()}>
                                            Remove Discount
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col py-4 px-6">
                            <div className="flex items-center space-x-2">
                                <strong className="text-xl"> By</strong>
                                <input
                                    type="radio"
                                    name="payment_method"
                                    id="sme"
                                    className=""
                                    value="1"
                                    checked={toggleCash ? 'checked' : ''}
                                    onChange={handlePaymentMethod}
                                />
                                <span className="text-[15px]"> Cash </span>
                                <input
                                    type="radio"
                                    name="payment_method"
                                    id="sme"
                                    className=""
                                    value="2"
                                    onChange={handlePaymentMethod}
                                />
                                <span className="text-[15px]"> UPI </span>
                                <input
                                    type="radio"
                                    name="payment_method"
                                    id="sme"
                                    className=""
                                    value="3"
                                    onChange={handlePaymentMethod}
                                />
                                <span className="text-[15px]"> Cheque </span>
                            </div>
                        </div>
                        {
                            toggleCheque
                                ?
                                <div className="flex flex-col mx-6">
                                    <div className="flex border-2 border-[#0d0d48] w-fit ">
                                        <input
                                            type="text"
                                            placeholder="Enter Cheque Number"
                                            className="placeholder-black p-1"
                                            value={chequeNo}
                                            onChange={handleChequeNo}
                                        />
                                    </div>
                                    {errors.cheque != '' ? (<small className="text-red-700 mt-2">{errors.cheque}</small>) : null}
                                </div>
                                :
                                null
                        }
                        {
                            toggleUpi
                                ?
                                <div className="flex flex-col mx-6">
                                    <div className="flex border-2 border-[#0d0d48] w-fit">
                                        <input
                                            type="text"
                                            placeholder="Enter Upi Number/id"
                                            className=" placeholder-black p-1"
                                            value={upiNo}
                                            onChange={handleUpiNo}
                                        />
                                    </div>
                                    {errors.upi != '' ? (<small className="text-red-700 mt-2">{errors.upi}</small>) : null}
                                </div>
                                :
                                null
                        }

                        <div></div>
                        <div className="text-sm flex xs:justify-center md:justify-end xs:py-2 xl:py-0 xl:justify-end items-end uppercase font-bold font-mono ">
                            <button
                                onClick={onSubmit}
                                type="button"
                                className="bg-[#0d0d48] border-2  border-[#0d0d48] hover:text-[#0d0d48] font-semibold relative inline-flex items-center justify-center px-8 py-[6px] overflow-hidden text-white rounded-md cursor-pointer group mr-3"
                            >
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white  rounded-lg group-hover:w-full group-hover:h-56"></span>
                                <span className="relative flex items-center gap-2 text-base">
                                    Generate
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GenerateReceipt