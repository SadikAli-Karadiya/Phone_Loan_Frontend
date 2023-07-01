import React, {useContext} from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import {PhoneContext} from '../PhoneContext'

const token = localStorage.getItem('token');
function AppRoutes() {
    const {token} = React.useContext(PhoneContext)

    return (
        <BrowserRouter>
            <Routes>
                {token ? (
                    <>
                        <Route path='/*' element={<PrivateRoutes />} />
                    </>
                ) : (
                    <>
                        <Route path='/*' element={<PublicRoutes />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </>
                )}
                {/* <Route path='/*' element={<PrivateRoutes />} />
                <Route path='*' element={<Navigate to='/' />} /> */}
                {/* <Route path='/*' element={<PublicRoutes />} />
                <Route path='*' element={<Navigate to='/' />} /> */}

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
