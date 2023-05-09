import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomersList from "./CustomerList";
import CustomerRegister from "./CustomerRegister/Register";
import CustomerProfile from "./CustometProfile";
import EMIHistory from "./CustometProfile/EmiHistory";


function Customer() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/list" element={<CustomersList />} />
                    <Route path="/add-edit" element={<CustomerRegister />} />
                    <Route path="/profile-detail" element={<CustomerProfile />} />
                    <Route path="/EMI-History" element={<EMIHistory />} />

                    {/* <Route index element={<CustomersList />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default Customer