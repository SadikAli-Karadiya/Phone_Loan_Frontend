import React from 'react'
import ForgetPassword from '../Pages/ForgetPassword/Forgetpassword'
import Login from '../Pages/Login'
import {Route, Routes } from 'react-router-dom'
import PublicLayout from '../Layout/PublicLayout'
import Registration from '../Pages/Register'
import NewPassword from '../Pages/ForgetPassword/NewPassword'

function PublicRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/' element={<Login />} />
          <Route path='/ForgetPassword' element={<ForgetPassword />} />
          <Route path='/NewPassword' element={<NewPassword />} />
          <Route path='/SignUp' element={<Registration />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default PublicRoutes
