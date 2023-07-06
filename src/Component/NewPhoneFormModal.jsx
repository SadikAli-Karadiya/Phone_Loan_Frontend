import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Modal } from "../Component/Modal";
import * as Yup from "yup";
import { useFormik } from "formik";
import { NewPhoneValues, PhoneSchema } from "../Component/AddNewsPhoneSchema";
import { getAllPhone, getAllCompanies, getallSpecification, getAllInstallment, AddNewPurchase } from "../utils/apiCalls";
import { useQuery } from 'react-query'
import { PhoneContext } from "../PhoneContext";
import CreatableSelect from 'react-select/creatable';

function NewPhoneFormModal({ showModal, handleShowModal, PhoneDetails, is_Edit }) {

  if (!showModal) {
    return <></>;
  }

  const {user} = React.useContext(PhoneContext)

  const params = useParams();
  let customer_id = params?.id
  const DATE = new Date();
  const defaultValue = DATE.toLocaleDateString('en-CA');
  const [date, setDate] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState();
  const [SelectedCompany, setSelectedCompany] = useState([]);
  const [SelectedModel, setSelectedModel] = useState([]);
  const [Model, setModel] = useState(is_Edit == true ? PhoneDetails?.phone?.model_name : "");
  const [Phone_Price, setPhonePrice] = useState("");
  const [Ram, setRam] = useState("");
  const [ram, setram] = useState("");
  const [Storage, setstorage] = useState("");
  const [Model_Name, setModelName] = useState("");
  const [Down_Payment, setDownPayment] = useState("");
  const [SelectInstallment, setSelectInstallment] = useState([]);
  const [installment, setinstallment] = useState("");
  const [Company, setCompany] = useState(is_Edit == true ? PhoneDetails?.phone?.company?.company_name : "");
  const Company_Details = useQuery('company', getAllCompanies)
  const specification = useQuery('specification', getallSpecification)
  const Installment = useQuery('installment', getAllInstallment)
  const Phone = useQuery('phone', getAllPhone)
  const navigate = useNavigate();

  const { values, touched, resetForm, errors, setFieldValue, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues:
        JSON.stringify(PhoneDetails) != {} ? {
          date: PhoneDetails?.createdAt,
          Company: PhoneDetails?.phone?.company?.company_name,
          Model: PhoneDetails?.phone?.model_name
        } : NewPhoneValues,
      validationSchema: PhoneSchema,
      async onSubmit(data) {
        if (Company == "") {
          toast.error("Please Select Cuompany")
        }
        Object.assign(data,
          { date: date },
          { customer_id: customer_id },
          { company_name: Company },
          { model_name: Model },
          { ram: ram },
          { storage: Storage },
          { price: Phone_Price },
          { month: installment },
          { Down_Payment: Down_Payment },
          { net_payable: Net_playable },
          { admin_id: user.admin_id }
        )
        try {
          const response = await AddNewPurchase(data)
          toast.success(response.data.message);
          resetForm({ values: "" })
          handleModalClose(false);
          navigate(`/Customer/EMI-History/${response?.data?.data?.id}`)
        } catch (err) {
          toast.error(err.response.data.message);
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
    let Model = Phone?.data?.data?.AllModel?.filter((n) => {
      return n?.company?.company_name == company_name;
    });
    setSelectedCompany(Model)
  };

  function handleSelectModel(event) {
    let Model_name = event.target.value
    setModel(Model_name)
    let storage = specification?.data?.data?.AllSpecification?.filter((n) => {
      return n?.phone?.model_name == Model_name;
    });
    setSelectedModel(storage)
  };

  function handleSelectStorage(event) {
    const storage = event.target.value
    setRam(storage)
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index]
    const option = el.getAttribute('id');
    let Price = specification?.data?.data?.AllSpecification?.find((n) => {
      return n?.id == option;
    });
    setram(Price.ram)
    setstorage(Price.storage)
    setPhonePrice(Price.price)
  };
  function handleSelectInstallment(event) {
    let month = event.target.value
    setinstallment(month)
    let Charge = Installment?.data?.data?.AllInstallment?.find((n) => {
      return n?.month == month;
    });
    setSelectInstallment(Charge.charges)
  };

  function handleChangeDate(event) {
    setDate(event.target.value)

  };

  let Net_playable = (SelectInstallment + Phone_Price)
  const handleModalClose = () => {
    resetForm({ values: "" })
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
          {
            is_Edit == true ?
              "Update Model"
              :
              "Add Model"
          }
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
                        onChange={handleChangeDate}
                        value={date}
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
                  </div>
                </div>
                <div className="flex items-center xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full pb-6">
                  <div className="selectinst w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Model *
                      </span>
                      {/* <div className='w-full mt-1'>
                        <CreatableSelect
                          className='w-full'
                          isClearable
                          isDisabled={isLoading}
                          isLoading={isLoading}
                          onChange={(e) => { setFieldValue('model_name', e.value); setModel(e) }}
                          onBlur={handleBlur}
                          placeholder="Select Model"
                          options={SelectedCompany?.map(item => {
                            return { value: item?.model_name, label: item?.model_name };
                          })
                          }
                          name='storage'
                        />
                      </div> */}
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
                                key={index} id={model.id}
                                value={model?.model_name}>
                                <span>{model.model_name}</span>
                              </option>
                            )
                          })
                        }
                      </select>
                    </label>
                  </div>
                  <div className="selectinst w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Storage *
                      </span>
                      <select
                        name="model_name"
                        id="model_name"
                        value={Ram}
                        onChange={handleSelectStorage}
                        onBlur={handleBlur}
                        className='w-full mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'>
                        <option value="">Select Storage</option>
                        {
                          SelectedModel.map((storage, index) => {
                            return (
                              <option
                                key={index}
                                id={storage.id}
                                value={storage.id}
                              >
                                <span>{storage?.ram} / {storage?.storage}</span>
                              </option>
                            )
                          })
                        }
                      </select>
                    </label>
                  </div>
                </div>
                <div className="flex items-center xs:flex-col xs:gap-0 md:flex-row md:gap-4 xl:gap-4 w-full">
                  <div className="selectinst w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        IMEI Number *
                      </span>
                      <input
                        type="text"
                        name="iemi"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.iemi}
                        placeholder="IMEI Number"
                        className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                      <span className="text-xs font-semibold text-red-600 px-1">
                        {errors.iemi ? errors.iemi : null}

                      </span>
                    </label>
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
                        value={Phone_Price}
                        placeholder="Enter Price"
                        className='w-full  mt-1 block  px-3 py-2 bg-white border  border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
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
                    </label>
                  </div>
                  <div className="totalfee w-full">
                    <label className="block">
                      <span className="block text-sm font-medium text-white">
                        Total Amount
                      </span>
                      <input
                        type="text" id='totalfee'
                        name="net_payable"
                        disabled={true}
                        value={Net_playable}
                        placeholder="Enter Net Payable Amount"
                        className='w-full 2xl:w-60 mt-1 block  px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none'
                      />
                    </label>
                  </div>
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

export default NewPhoneFormModal;