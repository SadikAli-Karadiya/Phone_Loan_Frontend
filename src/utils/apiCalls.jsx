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


export const AddInstallment = (data) => {
  return instance({
    'url': '/installment/addinstallment',
    'method': 'POST',
    'data': data,
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
    },
  })
}

export const AddCustomer = (data) => {
  // for (const value of data.values()) {
  //   console.log(value);
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

export const UpdateCustomer = (data) => {
  // for (const value of data.values()) {
  //   console.log(value);
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

export const AddCompany = (body) => {
  return instance({
    'url': '/company/addcompany',
    'method': 'POST',
    'data': body,
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
    },
  })
}

export const AddNewPhone = (formdata) => {
  return instance({
    'url': '/phone/addphone',
    'method': 'POST',
    'data': formdata,
    'headers': {
      'content-type': "multipart/form-data" // override instance defaults
    },
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

export const getAllPhone = () => {
  return instance({
    'method': 'GET',
    'url': '/phone',
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

export const getallSpecification = (id) => {
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

export const getallReceipt = (search) => {
  return instance({
    'method': 'GET',
    'url': `/receipt/List/${search}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}

