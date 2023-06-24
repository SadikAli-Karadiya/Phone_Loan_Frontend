import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import "../App.css"
import Dashboard from '../Pages/Dashboard'
import Report from '../Pages/Report'
import PrivatLayout from '../Layout/PrivatLayout'
import PayEMI from '../Pages/PayEMI'
import Product from '../Pages/Product'
import Search from '../Pages/Search'
import Customer from '../Pages/Customer'
import Index from '../Pages/Reciept'
import Admin from '../Pages/AdminProfile'
import Error from '../Component/Error'
import InstallmentList from '../Pages/Installment/installmentlist'
import CustomerProfile from '../Pages/Customer/CustometProfile'
import { userDetail } from '../utils/apiCalls';
import { useQuery } from 'react-query'
import Loader from "../Component/Loader";

function PrivateRoutes() {
  const token = localStorage.getItem('token');
  // const { User, isLoading } = useQuery('purchase', userDetail)


  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <div>

      <Routes>
        <Route element={<PrivatLayout />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/EMI' element={<PayEMI />} />
          <Route path='/Receipt/*' element={<Index />} />
          <Route path='/Report' element={<Report />} />
          <Route path='/Product/*' element={<Product />} />
          <Route path='/Search' element={<Search />} />
          <Route path='/Customer/*' element={<Customer />} />
          <Route path='/InstallmentList' element={<InstallmentList />} />
          <Route path="/InstallmentList/profile-detail/:id" element={<CustomerProfile />} />
          <Route path='/admin/*' element={<Admin />} />
          {/* <Route path='/' element={<Navigate to='/dashboard' />} /> */}
          <Route path='/*' element={<Error />} />
        </Route>
      </Routes>
    </div>
  )
}

export default PrivateRoutes