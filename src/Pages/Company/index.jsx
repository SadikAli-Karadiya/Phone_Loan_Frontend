import React from "react";
import { Route, Routes } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyFormModal from "./CompanyDetails/CompanyAddEditModel";


function Company() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/" element={<CompanyList />} />
                    <Route path="/product-details" element={<CompanyFormModal />} />

                </Route>
            </Routes>
        </>
    )
}

export default Company