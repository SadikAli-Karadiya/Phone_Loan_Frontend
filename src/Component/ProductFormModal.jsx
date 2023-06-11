import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Component/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import CreatableSelect from 'react-select/creatable';
import { AddCompany, AddNewPhone, UpdatePhone, getAllCompany } from "../utils/apiCalls"
import { useMutation, useQuery } from 'react-query'


const createCompany = (label) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});


const productSchema = Yup.object({
  model_name: Yup.string().required("Please Enter Model Name"),
});

function ProductFormModal({ showModal, handleShowModal, ModelDetails, is_Edit }) {
  console.log(ModelDetails?.id)
  const [error, setError] = useState("");
  const [company, setCompany] = React.useState();
  const [isLoading, setIsLoading] = React.useState();
  const addNewCompany = useMutation(AddCompany)
  let Company = useQuery('company', getAllCompany)
  const [CompanyList, setComapnyList] = React.useState([]);
  // console.log(CompanyList, "ekjfvn")
  let Companies = Company?.data?.data?.all_companies
  console.log(Companies)
  const handleCreateCompany = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newComapny = createCompany(inputValue);
      setIsLoading(false);
      setComapnyList();
      setCompany(newComapny);
    }, 1000);
    try {
      const respons = addNewCompany.mutate({ company: inputValue })
    } catch (error) {
      console.log(err)
    }
    console.log(respons, "jhsdb")
  };

  const initialValues = {
    company_name: "",
    model_name: "",
  }
  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues:
        JSON.stringify(ModelDetails) != {} ? { company: ModelDetails?.company?.company_name, model_name: ModelDetails?.model_name } :
          initialValues,
      validationSchema: productSchema,
      async onSubmit(data) {
        Object.assign(data, { company: company.value, id: ModelDetails?.id })
        try {
          if (is_Edit == true) {
            const response = await UpdatePhone(data)
            toast.success(response.data.message);
            resetForm("")
            handleShowModal(false);
          } else {
            const response = await AddNewPhone(data)
            toast.success(response.data.message);
            resetForm("")
            handleShowModal(false);
          }
        } catch (error) {
          toast.error(error.response.data.message);
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
              <div className='flex flex-col items-center w-full space-y-5'>
                <div className='w-full'>
                  <CreatableSelect
                    className='w-full'
                    isClearable
                    isDisabled={isLoading}
                    isLoading={isLoading}
                    onChange={(newCompany) => setCompany(newCompany)}
                    onCreateOption={handleCreateCompany}
                    placeholder="Select Company"
                    options={Company?.data?.data?.all_companies}
                    value={company}
                    name='company_name'
                  />
                  {/* {errors.company &&
                    touched.company ? (
                    <small className="form-error text-red-600 text-sm font-semibold">
                      {errors.company}
                    </small>
                  ) : null} */}
                </div>
                <div className="firstname flex flex-col space-y-2 w-full ">
                  <input type="text"
                    name="model_name"
                    value={values.model_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="rounded-md py-2 px-3 outline-non border border-slate-300 focus:outline-blue-500"
                    placeholder="Enter Model Name " />
                  {errors.model_name && touched.model_name
                    ?
                    <p className='form-error text-red-600 text-sm font-semibold'>{errors.model_name}</p>
                    :
                    null}
                </div>
              </div>
              <div className="mt-5 text-right">
                {
                  is_Edit == true ?
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`${isLoading ? 'opacity-60' : ''} w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      {isLoading ? 'Loading...' : 'Update'}
                    </button>
                    :
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className={`${isLoading ? 'opacity-60' : ''} w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      {isLoading ? 'Loading...' : 'Submit'}
                    </button>
                }
              </div>
            </form>
          </div>
        </Modal.Description>
      </Modal.Description>
    </Modal>
  );
}

export default ProductFormModal;
