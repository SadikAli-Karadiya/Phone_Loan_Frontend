import React, {useContext} from 'react'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { PhoneContext } from '../PhoneContext'

function AppRoutes() {
    
    const {token} = useContext(PhoneContext)
    console.log(token)
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
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
