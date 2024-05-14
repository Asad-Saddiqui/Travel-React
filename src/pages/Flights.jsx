import React from 'react'
import Navbar from '../components/Navbar'
import AppFooter from '../components/AppFooter/AppFooter'
import CardSlider from '../components/Slider/CardSlider'
import { Button, Card, Image } from 'antd'
import Stay from '../components/Search/Stay'

function Flights() {
    return (
        <>
            <Navbar />
            <div style={{ height: "75vh", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", backgroundImage: "url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwJTIwYXJvcGxhbnxlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                <div style={{ width: "80%", height: "50vh" }}>
                    <br></br>

                    <h2 style={{ color: "white" }}>Explore Flights</h2>
                    <br></br>
                    <p style={{ color: "white" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore nam sequi officia tempore nemo illum voluptatum, cum quisquam asperiores expedita placeat dolore, mollitia nesciunt libero doloribus molestiae? Soluta sint adipisci reiciendis, explicabo in ad accusantium, numquam natus, consequuntur neque est? Accusantium voluptatum ut doloribus repellendus necessitatibus minus. Recusandae iusto soluta sequi distinctio minus accusantium in quas! Nulla quidem architecto modi natus magnam at minus perferendis beatae obcaecati similique! Aut doloribus laudantium corrupti deleniti non expedita vero quis, sapiente placeat, nam dolore aperiam minus. Alias rem facilis necessitatibus voluptatibus fugit, animi, atque esse nihil, ullam omnis nobis aliquid quisquam consectetur?</p>
                    <Button type="primary" size="large">Explore</Button>

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%", marginTop: "70px" }}>
                    <h2>Featured travel</h2>
                    <br></br>
                    <h2>Travel advice and inspiration from the experts</h2>
                    <br></br>

                    <Stay />
                </div >

            </div >
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%", marginTop: "70px" }}>
                    <h2>Featured travel</h2>
                    <br></br>
                    <h2>Travel advice and inspiration from the experts</h2>
                    <br></br>

                    <div style={{ display: "flex" }}>

                        <Card

                            bordered={false}
                            style={{
                                width: "350px",
                                height: "200px",
                                margin: "4px"

                            }}
                            bodyStyle={{ padding: '0px' }}
                        >
                            <div style={{ width: "100%", height: "100px", border: "1px solid white", backgroundImage: "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", }} > Title</h3>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: "350px",
                                height: "200px",
                                margin: "4px",
                            }}
                            bodyStyle={{ padding: '0px' }}
                        >
                            <div style={{ width: "100%", height: "100px", border: "1px solid white", backgroundImage: "url(https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbCUyMGNhcnN8ZW58MHx8MHx8fDA%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", }} > Title</h3>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: "350px",
                                height: "200px",
                                margin: "4px"

                            }}
                            bodyStyle={{ padding: '0px' }}
                        >
                            <div style={{ width: "100%", height: "100px", border: "1px solid white", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1664304598312-6de674eb1b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwY2Fyc3xlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", }} > Title</h3>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>

                    </div>
                </div >

            </div >
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px" }}>
                <div style={{ width: "80%", marginBottom: "20px" }}>

                    <h2>Deals designed for you</h2>
                    <CardSlider />

                </div>
            </div>
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

export default Flights