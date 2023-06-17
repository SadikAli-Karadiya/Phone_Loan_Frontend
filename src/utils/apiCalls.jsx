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

// Installment --------------------------------------------

export const AddInstallment = (data) => {
  return instance({
    'url': '/installment/addinstallment',
    'method': 'POST',
    'data': data,
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

// Customer -------------------------------------------------------

export const AddCustomer = (data) => {
  //   for (var value of data) {
  //     console.log(value); 
  // }
  return instance({
    'url': '/customer/addcustomer',
    'method': 'POST',
    'data': data,
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
    },
  })
}

export const getAllCustomer = () => {
  return instance({
    'url': '/customer',
    'method': 'GET',
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
    },
  })
}

export const UpdateCustomer = (data) => {
  //   for (var value of data) {
  //     console.log(value); 
  // }
  return instance({
    'url': `/customer/update`,
    'method': 'PUT',
    'data': data,
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
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

export const getAllPhone = () => {
  return instance({
    'method': 'GET',
    'url': '/phone',
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}


// Purchase ----------------------------------------------------------

export const AddNewPurchase = (data) => {
  console.log(data)
  return instance({
    'url': `/purchase/addpurchase`,
    'method': 'POST',
    'data': data,
  })
}

export const getAllPurchase = () => {
  return instance({
    'method': 'GET',
    'url': '/purchase/List',
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

export const getPurchaseCustomerbyNumber = (search) => {
  //  let search = search.search
  console.log(search)
  return instance({
    'method': 'GET',
    'url': `/purchase/search/${search.pageNo}/${search.search}`,
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

// Transections ------------------------------------------------------------

export const AddTransection = (data) => {
  return instance({
    'url': `/transaction/addtransaction`,
    'method': 'POST',
    'data': data,
  })
}

export const getallTransection = (pageNo) => {
  console.log(pageNo)
  return instance({
    'method': 'GET',
    'url': `/transaction/List/${pageNo}`,
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