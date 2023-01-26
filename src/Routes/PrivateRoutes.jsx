import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import "../App.css"
import PublicLayout from '../Layout/PublicLayout'
import Addnew from '../Pages/Addnew'
import Company from '../Pages/Company'
import Dashboard from '../Pages/Dashboard'
import EMI from '../Pages/EMI'
import Reciept from '../Pages/Reciept'
import Report from '../Pages/Report'
import Search from '../Pages/Search'
import Login from "../Pages/Login"
import PrivatLayout from '../Layout/PrivatLayout'
import Newpassword from '../assets/Newpassword'
import Registerform from '../assets/Registerform'

function PrivateRoutes() {
  return (
    <div>

    <Routes>
        <Route element={<PrivatLayout />}>
            <Route path='/' element={<Dashboard />}  />
            <Route path='/Company' element={<Company />}  />
            <Route path='/EMI' element={<EMI />}  />
            <Route path='/Reciept' element={<Reciept />}  />
            <Route path='/Addnew' element={<Addnew />}  />
            <Route path='/Search' element={<Search />}  />
            <Route path='/Report' element={<Report />}  />            
            <Route index element={<Dashboard />} />

        </Route>
    </Routes>
    </div>
  )
}

export default PrivateRoutes