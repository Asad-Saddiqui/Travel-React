import React from 'react'
import Navbar from '../components/Navbar'
import Stay from '../components/Search/Stay'
import CardSlider from '../components/Slider/CardSlider'
import { Card } from 'antd'
import AppFooter from '../components/AppFooter/AppFooter'

function Hotels() {
    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px", }}>
                <div style={{ width: "80%", marginTop: "20px", marginBottom: "20px" }}>
                    <h2>Search Vacation Packages</h2>
                    <Stay />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginBottom: "20px" }}>
                <div style={{ width: "80%", marginBottom: "20px" }}>
                    <h1>Featured travel</h1>
                    <br>
                    </br>
                    <h2>Family hotel deals</h2>
                    <br></br>
                    <p>With hotel offers for the most kid-friendly vacation spots you can book today—and be on your way!Terms and conditions</p>
                    <CardSlider />

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%" }}>
                    <div style={{ display: "flex" }}>
                        <Card

                            bordered={false}
                            style={{
                                width: 350,
                            }}
                        >
                            <div style={{ width: "100%", height: "100px", backgroundImage: "url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", marginTop: "70px" }} > title</h3>
                                <p style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus earum illo eserunt unde!</p>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: 350,
                            }}
                        >
                            <div style={{ width: "100%", height: "100px", backgroundImage: "url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", marginTop: "70px" }} > title</h3>
                                <p style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus earum illo eserunt unde!</p>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: 350,
                            }}
                        >
                            <div style={{ width: "100%", height: "100px", backgroundImage: "url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", marginTop: "70px" }} > title</h3>
                                <p style={{ color: "white" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus earum illo eserunt unde!</p>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                    </div>
                </div >

            </div >
            <AppFooter />
        </>
    )
}

export default Hotels