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
            <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "60vh", marginBottom: "20px", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww)", backgroundSize: "cover" }}>
                <div style={{ width: "80%", marginTop: "20px", marginBottom: "20px", }}>
                    <h2>Search Vacation Packages</h2>
                    <br></br>
                    <Package />
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "10px", marginBottom: "20px" }}>
                <div style={{ width: "85%" }}>
                    <h2>Featured travel</h2>
                    <br></br>
                    <h3>Travel advice and inspiration from the experts</h3>
                    <br></br>
                    <div style={{ display: "flex" }}>
                        <Card

                            bordered={false}
                            style={{
                                width: 350,
                                height: "200px",
                                margin: "5px",
                            }}
                            bodyStyle={{ padding: "0px" }}
                        >
                            <div style={{ width: "100%", height: "150px", backgroundImage: "url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: 350,
                                height: "200px",
                                margin: "5px",
                            }}
                            bodyStyle={{ padding: "0px" }}
                        >
                            <div style={{ width: "100%", height: "150px", backgroundImage: "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: "350px",
                                height: "200px",
                                margin: "5px",
                            }}
                            bodyStyle={{ padding: "0px" }}
                        >
                            <div style={{ width: "100%", height: "150px", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1679917737897-9b373261ad57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
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
                    <CardSlider />
                </div >

            </div >
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "85%", padding: "10px" }}>
                    <h3 >Here to help keep you on the move</h3>
                    <br></br>
                    <div style={{ display: "flex", width: "100%", height: "270px", border: "1px solid gray", justifyContent: "space-between" }}>

                        <Image
                            width="37%"
                            height="100%"

                            src="https://plus.unsplash.com/premium_photo-1714839368898-970c54384f3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D"
                        />




                        <div
                            style={{ padding: "20px", width: "55%", height: "100%" }}>
                            <h3>Vacation Ideas</h3>
                            <br></br>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam quia aperiam est magnam quibusdam eius commodi tenetur, officia repudiandae consectetur impedit, id excepturi recusandae dolorem ab dolore quos et hic. Repellendus earum, eaque id assumenda consequatur fuga laudantium nulla officia veritatis culpa dolorem doloremque quidem perspiciatis nostrum accusantium voluptas quis. Vero amet, quod dolores facere sequi assumenda dolor modi dolorum quidem molestiae voluptatibus nostrum a corrupti eveniet, repellat debitis. Voluptatem!</p>
                        </div>



                    </div>
                </div>

            </div>
            <AppFooter />
        </>
    )
}

export default VacationPackage