import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Component/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useQuery } from 'react-query'
import { AddInstallment } from '../utils/apiCalls';


function InstallmentFormModal({ showModal, handleShowModal }) {
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

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

  const installmentSchema = Yup.object({
    month: Yup.string().required("Please Enter Installment"),
    charges: Yup.string().required("Please Enter Charges"),
  });

  const initialValues = {
    month : "",
    charges : "",
  }

  const [value, setValue] = useState({
    installment: "",
    dp: "",
    charge: "",
  });

  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: installmentSchema,
      async onSubmit(data) {
        try {
          const fd = new FormData();
          let ok = JSON.stringify({
            InstallmentInfo: fd,
          });
          fd.append("data", ok);
          // if (value) {
          //   fb.append("id", value.id);
          //   useUpdateNewsDetailsMutation(fb).then(console.log("update ho gai"));
          // } else {
            AddInstallment(fd).then();
          // setPhoneInfo([...PhoneInfo, data])
          // const response = await setdata(data)
          // if (response.error) {
          //   toast.error(response.error.data.message)
          // } else if (response.data.success) {
          //   toast.success(response.data.message);
          //   resetForm({ values: "" })
          //   handleModalClose(false);
          // }
        } catch (err) {
          toast.error(err.message);
        }
      },
    });

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
          Add Installment
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
              <div className="flex xs:flex-col items-center xs:space-y-4">
                <div className="flex flex-col space-y-2  w-full ">
                  <label htmlFor="company" className="text-white">Installment *</label>
                  <input
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="month"
                    id="month"
                    value={values.month}
                    placeholder='Enter Install'
                    className="rounded-md w-full py-1 md:py-[5px] xl:py-[6px] px-2 outline-none"
                  />
                  {errors.month && touched.month ? (
                    <p className="form-error text-red-600 text-sm font-semibold">
                      {errors.month}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col space-y-2 w-full ">
                  <label htmlFor="model name " className="text-white">Charge * </label>
                  <input
                    type="text"
                    name="charges"
                    id="charges"
                    value={values.charges}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded-md py-1 w-full md:py-[5px] xl:py-[6px] px-3 outline-none"
                    placeholder="Enter Charge Amount "
                  />
                  {errors.charges && touched.charges
                    ?
                    <p className='form-error text-red-600 text-sm font-semibold'>{errors.charges}</p>
                    :
                    null}
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

export default InstallmentFormModal;
