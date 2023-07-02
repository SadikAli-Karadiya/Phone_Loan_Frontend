import React, { useState } from "react";
import { toast } from "react-toastify";
import { Modal } from "../Component/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import CreatableSelect from 'react-select/creatable';
import { AddCompany, AddNewPhone, UpdatePhone, getAllCompanies } from "../utils/apiCalls"
import { useQuery, useMutation } from 'react-query'

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

const productSchema = Yup.object({
  model_name: Yup.string().required("Please Enter Model Name"),
});

function ProductFormModal({ showModal, handleShowModal, ModelDetails, is_Edit }) {

  if (!showModal) {
    return <></>;
  }

  const [company, setCompany] = React.useState();
  const [isLoading, setIsLoading] = React.useState();
  let Company = useQuery('company', getAllCompanies)
  const [CompanyList, setComapnyList] = React.useState([]);
  let Companies = Company?.data?.data?.all_companies
  
  const addPhone = useMutation(AddNewPhone);
  const updatePhone = useMutation(UpdatePhone);

  const handleCreateCompany = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      // const newComapny = createCompany(inputValue);
    const respons = AddCompany({ inputValue })
      setIsLoading(false);
      setComapnyList();
      // setCompany(newComapny);
    }, 1000);
  };

  const initialValues = {
    company_name: "",
    model_name: "",
  }

  const { values, errors, resetForm, handleBlur, touched, setFieldValue, handleChange, handleSubmit } =
    useFormik({
      initialValues:
        JSON.stringify(ModelDetails) != {} ? { company_name: ModelDetails?.company?.company_name, model_name: ModelDetails?.model_name }
          :
          initialValues,
      validationSchema: productSchema,
      async onSubmit(data) {
        if (company == null) {
          toast("Please Select Company")
        }
        Object.assign(data, { company_name: company.value, id: ModelDetails?.id })
        try {
          if (is_Edit == true) {
            addPhone.mutate(data)
          } else {
            updatePhone.mutate(data)
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      },
    });

  const handleModalClose = () => {
    resetForm({ values: "" })
    handleShowModal(false);
  };

  React.useEffect(() => {
    if(is_Edit && updatePhone.data?.data){
      toast.success(updatePhone.data?.data?.message);
      handleModalClose()
    }
    else if(addPhone.data?.data){
      toast.success(addPhone.data?.data?.message);
      handleModalClose()
    }
  },[addPhone.isSuccess, updatePhone.isSuccess]);

  return (
    <Modal open={showModal}
      onClose={handleModalClose}
    >
      <Modal.Description className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-gray-700 shadow-xl rounded-lg ">
        <Modal.Title
          as="h3"
          className="mb-4 text-xl font-medium text-white">
          {is_Edit ? 'Edit' : 'Add'} Model
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
                    defaultValue={is_Edit == true ? { value: ModelDetails?.company.company_name, label: ModelDetails?.company.company_name } : null}
                    onChange={(e) => { setFieldValue('company_name', e.value); setCompany(e) }}
                    onBlur={handleBlur}
                    onCreateOption={handleCreateCompany}
                    placeholder="Select Company"
                    options={Companies?.map(item => {
                      return { value: item?.company_name, label: item?.company_name };
                    })
                    }
                    name='company_name'
                  />
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
                  
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={addPhone.isLoading || updatePhone.isLoading}
                      className={`${addPhone.isLoading || updatePhone.isLoading ? 'opacity-60' : ''} w-28 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                    >
                      {
                        addPhone.isLoading || updatePhone.isLoading 
                        ? 
                          'Loading...' 
                        : 
                          is_Edit
                          ?
                            'Update'
                          :
                            'Submit'
                      }
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
