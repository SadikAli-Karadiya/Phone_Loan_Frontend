import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Component/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { NewPhoneSchema, NewPhoneValues } from "../Component/AddNewsPhoneSchema";


function NewPhoneFormModal({ showModal, handleShowModal }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = React.useState();

  const { values, touched, resetForm, errors, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: NewPhoneValues,
      validationSchema: NewPhoneSchema,
      async onSubmit(date) {
        try {
          const response = await setdata(data)
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
                      <span className="block text-sm font-medium text-slate-700">
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
                      <span className="block text-sm font-medium text-slate-700">
                        Company *
                      </span>
                      <select
                        name="company"
                        id="company"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                        <option value="">Select Company</option>
                        <option value="Oppo">Oppo</option>
                        <option value="Vivo">Vivo</option>
                      </select>
                    </label>
                    <span className="text-xs font-semibold text-red-600 px-1">
                      {errors.company && touched.company ? errors.company : null}
                    </span>
                  </div>
                </div>
                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                  <div className="selectinst w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Model *
                      </span>
                      <select
                        name="model"
                        id="model"
                        value={values.model}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'

                      >
                        <option value="">Select Model</option>
                        <option value="F17">F17</option>
                      </select>
                    </label>
                    <span className="text-xs font-semibold text-red-600 px-1">
                      {errors.model && touched.model ? errors.model : null}
                    </span>
                  </div>
                  <div className="dp w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Price *
                      </span>
                      <input
                        type="text"
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price}
                        placeholder="Enter Down Payment"
                        className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.price && touched.price ? errors.price : null}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                  <div className="selectinst w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Installment *
                      </span>
                      <select
                        name="installment"
                        id="installment"
                        value={values.installment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                        <option value="">Select Installment</option>
                        <option value="2">For 2 Month</option>
                        <option value="3">For 3 Month</option>
                      </select>
                    </label>
                    <span className="text-xs font-semibold text-red-600 px-1">
                      {errors.installment && touched.installment ? errors.installment : null}
                    </span>
                  </div>
                  <div className="dp w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Down Payment *
                      </span>
                      <input
                        type="text"
                        name="dp"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.dp}
                        placeholder="Enter Down Payment"
                        className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.dp && touched.dp ? errors.dp : null}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                  <div className="totalfee w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700">
                        Total Fee
                      </span>
                      <input
                        type="text" id='totalfee'
                        name="net_payable"
                        disabled={true}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.net_payable}
                        placeholder="Enter Net Payable Amount"
                        className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.net_payable && touched.net_payable
                          ? errors.net_payable
                          : null}
                      </span>
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
