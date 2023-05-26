import axios from "axios"; 

const instance = axios.create({
  baseURL : 'http://127.0.0.1:8000/api/',
  headers: {
//  Authorization: `<Your Auth Token>`,
    ContentType: "application/json",
    timeout : 1000,
  }, 
  // .. other options
});


export default {
    getData: () => {
      return instance({
          'method':'GET',
          'url':'/query',
          'data': {
            'item1':'data1',
          },
          'headers': { 'content-type':'application/json' // override instance defaults
          },
      })
    }
}