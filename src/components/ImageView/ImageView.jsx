import { Button, Card } from 'antd'
import React from 'react'

function ImageView() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ width: "85%", border: "1px solid gray", padding: "10px", height: "400px", borderRadius: "10px", backgroundImage: "url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                    <div style={{ margin: "100px" }}>
                        <h3 style={{ color: "white" }}>Savor the Sun Sale</h3>
                        <p style={{ color: "white" }}>Kick off summer with a vacation with all your favorite people and get 25% off or more* on select hotels with Member Prices.
                        </p>
                        <Button type="primary" size="large">
                            Expolre Deals
                        </Button>
                    </div>
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
                            </div>
                            <p> aut doloremque, tenetur aliquam illum enim sequi libero!</p>
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
                            }}
                        >
                            <div style={{ width: "100%", height: "300px", backgroundImage: "url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <div >
                                    <h3 style={{ color: "white" }}>Savor the Sun Sale</h3>
                                    <p style={{ color: "white" }}>Kick off summer with a vacation with all your favorite people and get 25% off or more* on select hotels with Member Prices.
                                    </p>
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
                            }}
                        >
                            <div style={{ width: "100%", height: "300px", backgroundImage: "url(https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png)", backgroundRepeat: "no repeat", backgroundSize: "cover" }}>
                                <div >
                                    <h3 style={{ color: "white" }}>Savor the Sun Sale</h3>
                                    <p style={{ color: "white" }}>Kick off summer with a vacation with all your favorite people and get 25% off or more* on select hotels with Member Prices.
                                    </p>
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