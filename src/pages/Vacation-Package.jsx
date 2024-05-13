import React from 'react'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter/AppFooter'
import Package from '../components/Search/Package'
import { Card, Image } from 'antd'
import CardSlider from '../components/Slider/CardSlider'

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
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                    </div>
                </div >

            </div >
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%" }}>
                    <CardSlider />
                </div >

            </div >
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "85%", padding: "10px" }}>
                    <h3 >Here to help keep you on the move</h3>
                    <div style={{ display: "flex", width: "100%", border: "1px solid gray", justifyContent: "space-between" }}>

                        <Image
                            width="37%"
                            height="250px"

                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />




                        <div
                            style={{ padding: "20px", width: "55%", height: "250px" }}>
                            <h3>title</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ad, tempore nihil, temporibus asperiores eaque at perspiciatis ratione facere delectus obcaecati odit aliquid pariatur nostrum rerum iure? Molestiae, asperiores impedit.</p>
                        </div>



                    </div>
                </div>

            </div>
            <AppFooter />
        </>
    )
}

export default VacationPackage