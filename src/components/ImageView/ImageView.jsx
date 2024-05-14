import { Button, Card } from 'antd'
import React from 'react'

function ImageView() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ width: "85%", border: "1px solid gray", padding: "10px", height: "400px", borderRadius: "10px", backgroundImage: "url(https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover" }}>
                    <div style={{ margin: "50px", width: "50%" }}>
                        <h1 style={{ color: "white" }}>Savor the Sun Sale</h1>
                        <br />
                        <p style={{ color: "white" }}>Kick off summer with a vacation with all your favorite people and get 25% off or more* on select hotels with Member Prices.</p>
                        <br />
                        <Button type="primary" size="large">
                            Explore Deals
                        </Button>
                    </div>
                </div>


            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%" }}>
                    <div style={{ display: "flex" }}>
                        <Card
                            style={{
                                width: "350px",
                                height: "200px",
                                padding: "0px",
                                borderRadius: "10px",
                                overflow: "none",
                                margin: "2px"
                                // border: "1px solid gray"
                            }}
                            bodyStyle={{ padding: "0px" }}

                        >
                            <div style={{ height: "130px", border: "1px solid white", borderRadius: "10px 10px 0px 0px", backgroundImage: "url(https://plus.unsplash.com/premium_photo-1677343210638-5d3ce6ddbf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsfGVufDB8fDB8fHww)", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", marginTop: "70px" }} > Find Your Prefect Trip</h3>
                            </div>
                            <p style={{ textAlign: "start", margin: "3px", color: "black" }}>aut doloremque, tenetur aliquam illum enim sequi libero!</p>

                        </Card>
                        <Card
                            style={{
                                width: "350px",
                                height: "200px",
                                padding: "0px",
                                borderRadius: "10px",
                                overflow: "none",
                                margin: "2px"

                                // border: "1px solid gray"
                            }}
                            bodyStyle={{ padding: "0px" }}

                        >
                            <div style={{ height: "130px", border: "1px solid white", borderRadius: "10px 10px 0px 0px", backgroundImage: "url(https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ2fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", marginTop: "100px" }} > Find Your Prefect Trip</h3>
                            </div>
                            <p style={{ textAlign: "start", margin: "3px", color: "black" }}>aut doloremque, tenetur aliquam illum enim sequi libero!</p>

                        </Card>
                        <Card
                            style={{
                                width: "350px",
                                height: "200px",
                                padding: "0px",
                                borderRadius: "10px",
                                overflow: "none",
                                margin: "2px"

                                // border: "1px solid gray"
                            }}
                            bodyStyle={{ padding: "0px" }}

                        >
                            <div style={{ height: "130px", border: "1px solid white", borderRadius: "10px 10px 0px 0px", backgroundImage: "url(https://images.unsplash.com/photo-1557750505-e7b4d1c40410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUyfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundSize: "cover" }}>
                                <h3 style={{ color: "white", marginTop: "70px" }} > Find Your Prefect Trip</h3>
                            </div>
                            <p style={{ textAlign: "start", margin: "3px", color: "black" }}>aut doloremque, tenetur aliquam illum enim sequi libero!</p>

                        </Card>

                    </div>
                </div >

            </div >
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "4px", marginBottom: "20px" }}>
                <div style={{ width: "85%" }}>
                    <div style={{ display: "flex" }}>
                        <Card

                            bordered={false}
                            style={{
                                width: "50%",
                                margin: "2px"

                            }}
                            bodyStyle={{ padding: "0px" }}
                        >
                            <div style={{ width: "100%", height: "300px", border: "1px solid white", borderRadius: "10px", backgroundImage: "url(https://images.unsplash.com/photo-1565201847371-7232810d9957?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU4fHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <div style={{ margin: "60px 30px" }} >
                                    <h3 style={{ color: "white", margin: "5px" }}>Savor the Sun Sale</h3>
                                    <p style={{ color: "white", margin: "5px" }}>Kick off summer with a vacation with all your favorite people and get 25% off or more* on select hotels with Member Prices.
                                    </p>
                                    <br></br>
                                    <Button type="primary" size="large">
                                        Expolre Deals
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: "50%",
                                margin: "2px"

                            }}
                            bodyStyle={{ padding: "0px" }}
                        >
                            <div style={{ width: "100%", height: "300px", border: "1px solid white", borderRadius: "10px", backgroundImage: "url(https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgzfHx0cmF2ZWx8ZW58MHx8MHx8fDA%3D)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <div style={{ margin: "60px 30px" }} >
                                    <h3 style={{ color: "white", margin: "5px" }}>Savor the Sun Sale</h3>
                                    <p style={{ color: "white", margin: "5px" }}>Kick off summer with a vacation with all your favorite people and get 25% off or more* on select hotels with Member Prices.
                                    </p>
                                    <br></br>
                                    <Button type="primary" size="large">
                                        Expolre Deals
                                    </Button>
                                </div>
                            </div>
                        </Card>
                       
                    </div>
                </div >

            </div >
        </>
    )
}

export default ImageView