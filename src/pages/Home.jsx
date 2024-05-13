import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Tab/Search'
import CardSlider from '../components/Slider/CardSlider'
import ImageView from '../components/ImageView/ImageView'
import HelpView from '../components/HelpView/HelpView'
import AppFooter from '../components/AppFooter/AppFooter'

function Home() {
    return (
        <>
            <Navbar />
            <br></br>
            <Search />
            <div style={{ display: "flex", justifyContent: "center",  width: "100%" }}>
                <div style={{ width: "85%", padding: "10px" }}>
                    <h2 style={{ marginTop: "20px" }}>Explore stays in trending destinations</h2>

                    <div style={{ marginTop: "20px", display: "flex" }}>
                        <CardSlider />
                    </div>
                </div>

            </div>
            <ImageView />
            <HelpView />
            <AppFooter />
        </>
    )
}

export default Home