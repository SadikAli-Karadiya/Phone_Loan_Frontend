import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import "../App.css"
import Dashboard from '../Pages/Dashboard'
import Reciept from '../Pages/Reciept'
import Report from '../Pages/Report'
import Search from '../Pages/Product'
import PrivatLayout from '../Layout/PrivatLayout'
import Customers from '../Pages/Customers'
import PayEMI from '../Pages/PayEMI'
import EMI from "../Pages/EMI"
import Product from '../Pages/Product'

function PrivateRoutes() {
  return (
    <div>

    <Routes>
        <Route element={<PrivatLayout />}>
            <Route path='/' element={<Dashboard />}  />
            <Route path='/Customers' element={<Customers />}  />
            <Route path='/EMI' element={<EMI />}  />
            <Route path='/PayEMI' element={<PayEMI />}  />
            <Route path='/Reciept' element={<Reciept />}  />
            <Route path='/Report' element={<Report />}  />            
            <Route path='/Product' element={<Product />}  />
            <Route path='/' element={<Navigate to='/dashboard' />} />

        </Route>
    </Routes>
    </div>
  )
}

export default PrivateRoutes