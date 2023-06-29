import { useQuery } from 'react-query';
import axios from 'axios'
import qs from "qs";

const instance = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    //  Authorization: `<Your Auth Token>`,
    ContentType: "application/json",
    timeout: 1000,
  },
  // .. other options
});



// export default {
//   getData: () => {
//     return instance({
//       'method': 'GET',
//       'url': '/query',
//       'data': {
//         'item1': 'data1',
//       },
//       'headers': {
//         'content-type': 'application/json' // override instance defaults
//       },
//     })
//   },

// }



// User --------------------------------------------

export const SignUp = (data) => {
  return instance({
    'url': '/user/Usersignup',
    'method': 'POST',
    'data': data,
  })
}

export const SignIn = (data) => {
  return instance({
    'url': '/user/login',
    'method': 'POST',
    'data': data,
  })
}

export const userDetail = () => {
  return instance({
    'url': '/user/detail',
    'method': 'GET',
  })
}






// Installment --------------------------------------------

export const AddInstallment = (data) => {
  return instance({
    'url': '/installment/addinstallment',
    'method': 'POST',
    'data': data,
  })
}

export const getCustomersByInstallment = (installment_id) => {
  return instance({
    'url': `/installment/${installment_id}`,
    'method': 'GET',
  })
}

export const getAllInstallment = () => {
  return instance({
    'method': 'GET',
    'url': '/installment',
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const DeleteInstallment = (id) => {
  return instance({
    'url': `/installment/delete/${id}`,
    'method': 'DELETE',
    'data': id,
  })
}

export const UpdateInstallment = (data) => {
  return instance({
    'url': `/installment/update/${data.id}`,
    'method': 'PUT',
    'data': data,
  })
}

// Admin -------------------------------------------------------

export const Admindetails = (id) => {
  return instance({
    'url': `/admin/details/${id}`,
    'method': 'GET',
  })
}

export const UpdateAdmin = (data) => {
  return instance({
    'url': `/admin/update`,
    'method': 'PUT',
    'data': data,
  })
}

// Customer -------------------------------------------------------

export const AddCustomer = (data) => {
  return instance({
    'url': '/customer/addcustomer',
    'method': 'POST',
    'data': data,
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
    },
  })
}

export const searchCustomer = (CustomerName) => {
  return instance({
    'url': `/customer/search/${CustomerName}`,
    'method': 'GET',
  })
}

export const getAllCustomer = (pageNo) => {
  return instance({
    'url': `/customer/List/${pageNo?.pageNo}`,
    'method': 'GET',
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
    },
  })
}

export const UpdateCustomer = (data) => {
  return instance({
    'url': `/customer/update`,
    'method': 'PUT',
    'data': data,
    'headers': {
      'content-type': "multipart/form-data"
    },
  })
}

export const getCustomerByid = (id) => {
  return instance({
    'url': `/customer/details/${id}`,
    'method': 'GET',
    'data': id,
  })
}

export const DeleteCustomer = (id) => {
  return instance({
    'url': `/customer/delete/${id}`,
    'method': 'DELETE',
    'data': id,
  })
}


// Company -------------------------------------------------------------------

export const AddCompany = (data) => {
  console.log(data, "ksdhvb")
  return instance({
    'url': '/company/addcompany',
    'method': 'POST',
    'data': data,
  })
}

export const getAllCompanies = () => {
  return instance({
    'method': 'GET',
    'url': '/company',
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

// Phone ----------------------------------------------------------------

export const AddNewPhone = (data) => {
  return instance({
    'url': '/phone/addphone',
    'method': 'POST',
    'data': data,
  })
}

export const DeletePhone = (id) => {
  console.log(id)
  return instance({
    'url': `/phone/delete/${id}`,
    'method': 'DELETE',
    'data': id,
  })
}

export const UpdatePhone = (data) => {
  return instance({
    'url': `/phone/update/${data.id}`,
    'method': 'PUT',
    'data': data,
  })
}

export const searchPhone = (modelName) => {
  return instance({
    'url': `/phone/search/${modelName}`,
    'method': 'GET',
  })
}

export const getAllPhone = (pageNo) => {
  return instance({
    'method': 'GET',
    'url': `/phone/List/${pageNo.pageNo}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}


// Purchase ----------------------------------------------------------

export const AddNewPurchase = (data) => {
  return instance({
    'url': `/purchase/addpurchase`,
    'method': 'POST',
    'data': data,
  })
}

export const getAllPurchase = (pageNo) => {
  return instance({
    'method': 'GET',
    'url': `/purchase/List/${pageNo.pageNo}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const getPurchaseCustomerbyId = (id) => {
  return instance({
    'method': 'GET',
    'url': `/purchase/Customer_details/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}


export const DeletePurchase = (id) => {
  return instance({
    'url': `/purchase/delete/${id}`,
    'method': 'DELETE',
    'data': id,
  })
}

// EMI ----------------------------------------------------------------

export const getEmiPurchasebyId = (id) => {
  return instance({
    'method': 'GET',
    'url': `/emi/Emi_details/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const getPendingEmi = (pageNo) => {
  return instance({
    'method': 'GET',
    'url': `/emi/pending/${pageNo?.pageNo}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const getemibycustomername = (search) => {
  return instance({
    'method': 'GET',
    'url': `/emi/search/${search.pageNo}/${search.search}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const getSingleEmi = (id) => {
  return instance({
    'method': 'GET',
    'url': `/emi/details/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}



// Transections ------------------------------------------------------------

export const AddTransection = (data) => {
  return instance({
    'url': `/transaction/addtransaction`,
    'method': 'POST',
    'data': data,
  })
}

export const getallTransection = (pageNo) => {
  return instance({
    'method': 'GET',
    'url': `/transaction/List/${pageNo}`,
  })
}

export const getReceiptbyReceiptId = (id) => {
  return instance({
    'method': 'GET',
    'url': `/transaction/ReceiptId/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

// Reciept ------------------------------------------------------------
export const getallReceipt = (pageNo) => {
  return instance({
    'method': 'GET',
    'url': `/receipt/List/${pageNo}`,
  })
}

export const getReceiptbyPurchaseId = (id) => {
  return instance({
    'method': 'GET',
    'url': `/receipt/search/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const getReceiptbyEmiId = (id) => {
  return instance({
    'method': 'GET',
    'url': `/receipt/searchbyEmi/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const onerecieptDetailsbyNumber = (search) => {
  return instance({
    'method': 'GET',
    'url': `/receipt/search/${search.pageNo}/${search.search}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

// Specifiaction ------------------------------------------------------

export const AddSpecification = (data) => {
  return instance({
    'url': '/specification/addspecification',
    'method': 'POST',
    'data': data,
  })
}

export const getallSpecification = () => {
  return instance({
    'method': 'GET',
    'url': '/specification',
  })
}

export const getallSpecificationById = (id) => {
  return instance({
    'method': 'GET',
    'url': `/specification/${id}`,
  })
}

export const UpdateSpecification = (data) => {
  return instance({
    'url': `/specification/update/${data.id}`,
    'method': 'PUT',
    'data': data,
  })
}

export const deleteSpecification = (id) => {
  return instance({
    'method': 'DELETE',
    'url': `/specification/Delete/${id}`,
  })
}