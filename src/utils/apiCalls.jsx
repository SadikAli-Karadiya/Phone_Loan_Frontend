import { useQuery } from 'react-query';
import axios from 'axios'

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
    'url': '/purchase',
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
    'url': `/specification/${id}`,
    'headers': {
      'content-type': 'application/json' // override instance defaults
    },
  })
}
