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
            <Search />
            <CardSlider />
            <ImageView />
            <HelpView />
            <AppFooter />
        </>
    )
}

export default Home