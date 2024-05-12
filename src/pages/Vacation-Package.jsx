import React from 'react'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter/AppFooter'
import Package from '../components/Search/Package'

function VacationPackage() {
    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ width: "80%", marginTop: "20px", marginBottom: "20px" }}>
                    <h2>Search Vacation Packages</h2>
                    <Package />
                </div>
            </div>
            <AppFooter />
        </>
    )
}

export default VacationPackage