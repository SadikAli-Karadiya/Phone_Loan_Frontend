import React from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* {currentUser ? (
                    <>
                        <Route path='/*' element={<PrivateRoutes />} />
                        <Route index element={<Navigate to='/' />} />
                    </>
                ) : (
                    <>
                        <Route path='/*' element={<PublicRoutes />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </>
                )} */}
                {/* <Route path='/*' element={<PrivateRoutes />} />
                <Route path='*' element={<Navigate to='/' />} /> */}
                <Route path='/' element={<PublicRoutes />} />
                <Route path='*' element={<Navigate to='/Login' />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
