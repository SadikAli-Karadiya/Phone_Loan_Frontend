import { useQuery } from 'react-query';
import axios from 'axios'

const instance = axios.create({
  baseURL : 'http://localhost:4000/',
  headers: {
    //  Authorization: `<Your Auth Token>`,
    ContentType: "application/json",
    timeout: 1000,
  },
  // .. other options
});

const SERVER = "http://localhost:4000";


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



    export const getAllCompanies = () => {
      return instance({
          'method':'GET',
          'url':'/company',
          'headers': { 'content-type':'application/json' // override instance defaults
          },
      })
    }
