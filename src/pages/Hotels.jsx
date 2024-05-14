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
                    <h2>Change your mind, change your trip</h2>
                    <br></br>
                    <p>Looking for a change of scenery, but want something flexible? We get it. With free cancellation on most hotels, you can book with peace of mind. Some hotels require you to cancel more than 24 hours before check in. Please check hotel's detail page.Terms and conditions</p>
                 <br></br>
                    <CardSlider />

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%" }}>
                    <h2>Travel advice and inspiration from the experts</h2>
                    <br></br>
                    <div style={{ display: "flex" }}>
                        <Card

                            bordered={true}
                            style={{
                                width: 350,
                                height: "220px",
                                margin: "3px"

                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <div style={{ width: "100%", height: "160px", borderRadius: "10px 10px 0px 0px", border: "1px solid white", backgroundImage: "url(https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover" }}>
                            
                                <p style={{ color: "white", marginTop: "70px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus earum illo eserunt unde!</p>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: 350,
                                height: "220px",
                                margin: "3px"

                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <div style={{ width: "100%", height: "160px", borderRadius: "10px 10px 0px 0px", border: "1px solid white", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1714839369121-c59d430708ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D)", backgroundSize: "cover" }}>
                            
                                <p style={{ color: "white", marginTop: "70px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus earum illo eserunt unde!</p>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: 350,
                                height: "220px",
                                margin:"3px"
                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <div style={{ width: "100%", height: "160px", borderRadius: "10px 10px 0px 0px", border: "1px solid white", backgroundImage: "url(https://images.unsplash.com/photo-1522010675502-c7b3888985f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D)", backgroundSize: "cover" }}>
                            
                                <p style={{ color: "white", marginTop: "70px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus earum illo eserunt unde!</p>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                       
                    </div>
                </div >

            </div >
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%" }}>
                    <h2>Deals designed for you</h2>
                    <br></br>
                    <div style={{ display: "flex" }}>
                        <Card

                            bordered={true}
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "3px",
                                display: "flex",
                                justifyContent:"center",
                                alignItems:"center",
                                color: "white",
                                backgroundImage: "url(https://images.unsplash.com/photo-1495904786722-d2b5a19a8535?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover"
                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <h2>Muree</h2>
                            
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "3px",
                                display: "flex",
                                justifyContent:"center",
                                alignItems:"center",
                                color: "white",
                                backgroundImage: "url(https://plus.unsplash.com/premium_photo-1683120819310-47e91ec7e17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover"
                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <h2>Multan</h2>
                            
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "3px",
                                display: "flex",
                                justifyContent:"center",
                                alignItems:"center",
                                color: "white",
                                backgroundImage: "url(https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover"
                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <h2>Karachi</h2>
                            
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "3px",
                                display: "flex",
                                justifyContent:"center",
                                alignItems:"center",
                                color: "white",
                                backgroundImage: "url(https://images.unsplash.com/photo-1499063078284-f78f7d89616a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)",
                                backgroundSize: "cover"
                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <h2>Kashmir</h2>
                            
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: "200px",
                                height: "200px",
                                margin: "3px",
                                display: "flex",
                                justifyContent:"center",
                                alignItems:"center",
                                color: "white",
                                backgroundImage: "url(https://images.unsplash.com/photo-1527838832700-5059252407fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover"
                            }}
                            bodyStyle={{padding:"0px"}}
                        >
                            <h2>Islamabad</h2>
                            
                        </Card>
                       
                       
                    </div>
                </div >

            </div >
            <AppFooter />
        </>
    )
}

export default Hotels