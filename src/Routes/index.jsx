import React from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

function AppRoutes() {

    const token = localStorage.getItem('token');
    console.log(token)
    return (
        <BrowserRouter>
            <Routes>
                {/* {token ? (
                    <>
                        <Route path='/*' element={<PrivateRoutes />} />
                    </>
                ) : (
                    <>
                        <Route path='/*' element={<PublicRoutes />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </>
                )} */}
                <Route path='/*' element={<PrivateRoutes />} />
                <Route path='*' element={<Navigate to='/' />} />
                {/* <Route path='/*' element={<PublicRoutes />} />
                <Route path='*' element={<Navigate to='/' />} /> */}

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
