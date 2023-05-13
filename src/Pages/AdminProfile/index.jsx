import React from 'react'
import { Route, Routes } from "react-router-dom";
import Updateprofile from './Profile';
import { Addadmin } from './Register';
import AdminList from './list';

function Admin() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/UpdateProfile" element={<Updateprofile />} />
          <Route path="/Addadmin" element={<Addadmin />} />
          <Route path="/list" element={<AdminList />} />
        </Route>
      </Routes>
    </>
  )
}

export default Admin
