import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Component/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { NewPhoneSchema, NewPhoneValues } from "../Component/AddNewsPhoneSchema";
import { getAllPhone, getAllCompanies, getallSpecification, getAllInstallment } from "../utils/apiCalls";
import { useQuery } from 'react-query'


function NewPhoneFormModal({ showModal, handleShowModal }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState();
  const [SelectedCompany, setSelectedCompany] = useState([]);
  const [Company, setCompany] = useState("");
  const [SelectModel, setSelectModel] = useState([]);
  const [Model, setModel] = useState("");
  const [SelectSpecification, setSelectSpecification] = useState("");
  const [Specification, setSpecification] = useState("");
  const [Down_Payment, setDownPayment] = useState("");
  const [SelectInstallment, setSelectInstallment] = useState([]);
  const [installment, setinstallment] = useState("");
  const Company_Details = useQuery('company', getAllCompanies)
  const Phone_Details = useQuery('phone', getAllPhone)
  const specification = useQuery('specification', getallSpecification)
  const Installment = useQuery('installment', getAllInstallment)
  // console.log(Installment?.data?.data?.AllInstallment)
  // console.log(Company_Details.data.data.all_companies)

  const { values, touched, resetForm, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: NewPhoneValues,
      validationSchema: NewPhoneSchema,
      async onSubmit(data) {
        if (Company === null) {
          toast.error("Please select team captain");
          return;
        }
        try {
          const fb = new FormData();
          let ok = JSON.stringify({
            PhoneInfo: data,
            company_name: Company,
          });
          // const response = await setdata(data)
          if (response.error) {
            toast.error(response.error.data.message)
          } else if (response.data.success) {
            toast.success(response.data.message);
            resetForm({ values: "" })
            handleModalClose(false);
          }
        } catch (err) {
          toast.error(err.message);
        }
      },
    });

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "rgb(75 85 99)",
      borderColor: "rgb(107 114 128)",
      borderRadius: "8px",
      minHeight: "44px",
      height: "44px",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: "44px",
      padding: "0 6px",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),

    input: (provided, state) => ({
      ...provided,
      margin: "0px",
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: "44px",
    }),
  };


  function handleSelectCompany(event) {
    let company_name = event.target.value
    setCompany(company_name)
    let Company = Phone_Details?.data?.data?.AllModel?.filter((n) => {
      return n?.company?.company_name == company_name;
    });
    setSelectedCompany(Company)
  };

  function handleSelectModel(event) {
    let Model_name = event.target.value
    setModel(Model_name)
    let Model = specification?.data?.data?.AllSpecification?.filter((n) => {
      return n?.phone?.model_name == Model_name;
    });
    setSelectModel(Model)
  };

  function handleSelectStorage(event) {
    let storage = event.target.value
    setSpecification(storage)
    let Price = specification?.data?.data?.AllSpecification?.find((n) => {
      return n?.storage == storage;
    });
    setSelectSpecification(Price.price)
  };

  function handleSelectInstallment(event) {
    let month = event.target.value
    setinstallment(month)
    let Charge = Installment?.data?.data?.AllInstallment?.find((n) => {
      return n?.month == month;
    });
    // console.log(Charge)
    setSelectInstallment(Charge.charges)
  };

  const Net_playable = (SelectInstallment + SelectSpecification)

  // function handledp(event) {
  //   let down_payment = event.target.value
  //   console.log(down_payment)
  //   // setDownPayment(storage)
  // };


  // let net_payable = SelectSpecification +

  // console.log(SelectSpecification)

  const handleModalClose = () => {
    resetForm("")
    handleShowModal(false);
  };


  return (
    <Modal open={showModal}
      onClose={handleModalClose}
    >
      <Modal.Description className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
        <Modal.Title
          as="h3"
          className="mb-4 text-xl font-medium text-white">
          Add Model
        </Modal.Title>
        <button
          type="button"
          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="match-formation-modal"
          onClick={handleModalClose}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <Modal.Description>
          <div className="px-4 py-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center items-center w-full xl:gap-1">
                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                  <div className="date w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Date *
                      </span>
                      <input
                        type="date"
                        name="date"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date}
                        className='w-full hover:cursor-pointer mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.date && touched.date ? errors.date : null}
                      </span>
                    </label>
                  </div>
                  <div className="selectinst w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Company *
                      </span>
                      <select
                        name="company_name"
                        id="company_name"
                        value={Company}
                        onChange={handleSelectCompany}
                        className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                        <option value="">Select Company</option>
                        {
                          Company_Details?.data?.data?.all_companies?.map((company, index) => {
                            return (
                              <option
                                key={index} value={company.company_name}>{company.company_name}</option>
                            )
                          })
                        }
                      </select>
                    </label>
                    {/* <span className="text-xs font-semibold text-red-600 px-1">
                      {errors.company && touched.company ? errors.company : null}
                    </span> */}
                  </div>
                </div>
                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full pb-6">
                  <div className="selectinst w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Model *
                      </span>
                      <select
                        name="model_name"
                        id="model_name"
                        value={Model}
                        onChange={handleSelectModel}
                        onBlur={handleBlur}
                        className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                        <option value="">Select Model</option>
                        {
                          SelectedCompany.map((model, index) => {
                            return (
                              <option
                                key={index} value={model.model_name}>{model.model_name}</option>
                            )
                          })
                        }
                      </select>
                    </label>
                    {/* <span className="text-xs font-semibold text-red-600 px-1">
                      {errors.model && touched.model ? errors.model : null}
                    </span> */}
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <div className="storage w-full">
                      <label className="block">
                        <span className="block text-sm font-medium text-white">
                          Storage *
                        </span>
                        <select
                          name="storage"
                          id="storage"
                          value={Specification}
                          onChange={handleSelectStorage}
                          className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                          <option value="">RAM / Storage</option>
                          {
                            SelectModel?.map((specification, index) => {
                              return (
                                <option
                                  key={index} value={specification.ram && specification.storage}>{specification.ram} / {specification.storage}</option>
                              )
                            })
                          }
                        </select>
                      </label>
                      {/* <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.company && touched.company ? errors.company : null}
                      </span> */}
                    </div>
                  </div>
                </div>
                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full pb-6">
                  <div className="price w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Price *
                      </span>
                      <input
                        type="text"
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={SelectSpecification}
                        placeholder="Enter Price"
                        className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      {/* <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.price && touched.price ? errors.price : null}
                      </span> */}
                    </label>
                  </div>
                  <div className="installment w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Installment *
                      </span>
                      <select
                        name="month"
                        id="month"
                        onChange={handleSelectInstallment}
                        value={installment}
                        className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                        <option value="">Select Installment</option>
                        {
                          Installment?.data?.data?.AllInstallment?.map((installment, index) => {
                            return (
                              <option
                                key={index} value={installment.month}>{installment.month} Month</option>
                            )
                          })
                        }
                      </select>
                    </label>
                    {/* <span className="text-xs font-semibold text-red-600 px-1">
                      {errors.installment && touched.installment ? errors.installment : null}
                    </span> */}
                  </div>
                </div>
                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full ">
                  <div className="dp w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Down Payment *
                      </span>
                      <input
                        type="text"
                        name="dp"
                        onChange={e => setDownPayment(e.target.value)}
                        value={Down_Payment}
                        placeholder="Enter Down Payment"
                        className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      {/* <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.dp && touched.dp ? errors.dp : null}
                      </span> */}
                    </label>
                  </div>
                  <div className="totalfee w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Total Fee
                      </span>
                      <input
                        type="text" id='totalfee'
                        name="net_payable"
                        disabled={true}
                        value={Net_playable}
                        placeholder="Enter Net Payable Amount"
                        className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      {/* <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.net_payable && touched.net_payable
                          ? errors.net_payable
                          : null}
                      </span> */}
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-right">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`${isLoading ? 'opacity-60' : ''} w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                >
                  {isLoading ? 'Loading...' : 'Submit'}
                </button>
              </div>
            </form>
            {error != "" ? (
              <div className="text-center">
                <small className="text-red-500">{error}</small>
              </div>
            ) : null}
          </div>
        </Modal.Description>
      </Modal.Description>
    </Modal>
  );
}

export default NewPhoneFormModal;
