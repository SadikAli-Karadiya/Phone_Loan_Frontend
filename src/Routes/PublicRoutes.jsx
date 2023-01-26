import React from 'react'
import ForgetPassword from '../Pages/ForgetPassword'
import Login from '../Pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from '../Layout/PublicLayout'

function PublicRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path='/Login' element={<Login />} />
          {/* <Route path='/ForgetPassword' element={<ForgetPassword />} /> */}
          <Route index element={<Navigate to='/Login' />} />

        </Route>
      </Routes>
    </div>
  )
}

export default PublicRoutes
