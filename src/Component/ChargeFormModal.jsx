import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Component/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { MdDelete } from "react-icons/md"
import { FiPlus } from "react-icons/fi"

const productSchema = Yup.object({
  price: Yup.string().required("Please Enter Price"),
});

function ChargeFormModal({ showModal, handleShowModal }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = React.useState();
  const [RamList, setRamList] = React.useState([]);
  const [ram, setRam] = React.useState();
  const [StorageList, setStorageList] = React.useState([]);
  const [Charge, setCharge] = React.useState(false);
  const [Charge_amount, setchargeamount] = React.useState();
  const [EMI_Amount, setemiamount] = React.useState();


  const initialValues = {
    charge: "",
    price: "",
  }

  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: productSchema,
      onSubmit(data) {
        console.log(data)
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
    setCharge(false)
  };

  function handlecharge() {
    setCharge(true)
  }

  function handleremovecharge() {
    setCharge(false)
  }

  function handleCharge(event) {
    setchargeamount(event.target.value)
  };

  function handleemi(event) {
    setemiamount(event.target.value)
  };

  let Total = (EMI_Amount) + (Charge_amount)

  console.log(Total)

  return (
    <Modal open={showModal}
      onClose={handleModalClose}>
      <Modal.Description className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
        <Modal.Title
          as="h3"
          className="mb-4 text-xl font-medium text-white">
          Pay EMI
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
          <div className="px-4 pb-4">
            <div className="flex justify-start items-start pb-5 ">
              <select name="" id="" className="w-20 py-1 rounded-md px-2 outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className='flex flex-col justify-start w-full'>
                <div className="flex flex-col space-y-2 w-full ">
                  <input type="text"
                    name="price"
                    value={EMI_Amount}
                    onChange={handleemi}
                    className="rounded-md py-2 px-3 outline-non"
                    placeholder="Enter Phone Price " />

                </div>
                {
                  Charge == true ?
                    <div className="mt-5 flex flex-col ">
                      <div className="flex items-center justify-start space-x-3">
                        <div className="flex flex-col w-full ">
                          <input type="text"
                            name="charge"
                            value={Charge_amount}
                            onChange={handleCharge}
                            onBlur={handleBlur}
                            className="rounded-md py-2 px-3 outline-non"
                            placeholder="Enter Charge " />
                          {errors.charge && touched.charge
                            ?
                            <p className='form-error text-red-600 text-sm font-semibold'>{errors.charge}</p>
                            :
                            null}
                        </div>
                        <div className="flex items-center space-x-2 group cursor-pointer bg-red-600 py-2 px-2 rounded-md hover:bg-white "
                          onClick={handleremovecharge}
                        >
                          <MdDelete className="text-white text-lg group-hover:text-red-600" />
                        </div>
                      </div>
                      <div className="mt-5 w-full">
                        <div
                          className="rounded-md py-2 bg-white px-3 w-full outline-non">
                          Total : {Total}
                        </div>
                      </div>
                    </div>
                    :
                    null
                }
                {
                  Charge == false ?
                    <div className="flex items-center bg-white  mt-5 py-1 pl-1 hover:text-red-600 w-28  rounded-md text-gray-600 cursor-pointer"
                      onClick={handlecharge}
                    >
                      <div className="px-1 py-1 rounded-md text-lg">
                        <FiPlus />
                      </div>
                      <h1 className="font-semibold text-sm text-start">Add Charge</h1>
                    </div>
                    :
                    ""
                }
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
      </Modal.Description >
    </Modal >
  );
}

export default ChargeFormModal;
