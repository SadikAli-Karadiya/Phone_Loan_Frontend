import axios from "axios"; 

const instance = axios.create({
  baseURL : 'http://localhost:4000/',
  headers: {
//  Authorization: `<Your Auth Token>`,
    ContentType: "application/json",
    timeout : 1000,
  }, 
  // .. other options
});



    export const getAllCompanies = () => {
      return instance({
          'method':'GET',
          'url':'/company',
          'headers': { 'content-type':'application/json' // override instance defaults
          },
      })
    }
