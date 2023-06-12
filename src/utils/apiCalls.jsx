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
  console.log(id , "jsvdhb")
  return instance({
    'url': `/customer/details/${id}`,
    'method': 'GET',
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

export const getAllCompany = () => {
  return instance({
    'method': 'GET',
    'url': '/company',
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

export const getEmiPurchasebyId = (id) => {
  return instance({
    'method': 'GET',
    'url': `/emi/Emi_details/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
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

export const getallReceipt = (search) => {
  return instance({
    'method': 'GET',
    'url': `/receipt/List/${search}`,
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
    // 'headers': {
    //   'content-type': "multipart/form-data" // override instance defaults
    // },
  })
}

export const getallSpecification = () => {
  return instance({
    'method': 'GET',
    'url': '/specification',
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const getallSpecificationById = (id) => {
  return instance({
    'method': 'GET',
    'url': `/specification/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
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