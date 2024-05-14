import { Card, Image } from 'antd'
import React from 'react'

function HelpView() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "85%", padding: "10px" }}>
                    <h3 >Here to help keep you on the move</h3>
                    <br></br>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <Card

                            bordered={true}
                            style={{
                                width: "33%",
                            }}
                        >

                            <div>
                                <h3>Change or cencle a trip</h3>

                            </div>
                            <br></br>
                            <p>
                                Get helpful alerts about flight status and gate numbers</p>
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: "33%",
                            }}
                        >

                            <div>
                                <h3>Change or cencle a trip</h3>

                            </div>
                            <br></br>
                            <p>
                                Get helpful alerts about flight status and gate numbers</p>
                        </Card>
                        <Card

                            bordered={true}
                            style={{
                                width: "33%",
                            }}
                        >

                            <div>
                                <h3>Change or cencle a trip</h3>

                            </div>
                            <br></br>
                            <p>
                                Get helpful alerts about flight status and gate numbers</p>
                        </Card>
                       

                    </div>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "85%", padding: "10px" }}>
                    <h3 >Here to help keep you on the move</h3>
                    <br></br>
                    <div style={{ display: "flex", width: "100%",height:"270px", border: "1px solid gray", justifyContent: "space-between" }}>

                        <Image
                            width="37%"
                            height="100%"

                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />




                        <div
                            style={{ padding: " 30px 15px", width: "55%", height: "100%" }}>
                            <h2>Sit amet consectetur adipisicing elit</h2>
                            <br></br>
                            <p><ul>
                                <li>Lorem ipsum dolor sit amet consectetur Ratione, dignissimos?</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dignissimos?</li>
                                <li>Lorem  adipisicing elit. Ratione, dignissimos?</li>
                            </ul></p>
                            <br></br>
                            <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default HelpView