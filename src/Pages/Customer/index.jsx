import React from "react";
import { Route, Routes } from "react-router-dom";
import CustomerRegister from "./CustomerRegister/Register";
import EMIHistory from "./CustometProfile/EmiHistory";


function Customer() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/add-edit" element={<CustomerRegister />} />
                    <Route path="/EMI-History/:id" element={<EMIHistory />} />

                    {/* <Route index element={<CustomersList />} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default Customer