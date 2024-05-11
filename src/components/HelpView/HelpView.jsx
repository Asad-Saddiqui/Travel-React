import { Card, Image } from 'antd'
import React from 'react'

function HelpView() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ width: "85%", padding: "10px" }}>
                    <h3 >Here to help keep you on the move</h3>
                    <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                        <Card

                            bordered={false}
                            style={{
                                width: "33%",
                            }}
                        >

                            <h3>title</h3>
                            <p>Card content</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: "33%",
                            }}
                        >

                            <h3>title</h3>
                            <p>Card content</p>
                        </Card>
                        <Card

                            bordered={false}
                            style={{
                                width: "33%",
                            }}
                        >

                            <h3>title</h3>
                            <p>Card content</p>
                        </Card>

                    </div>
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
                             style={{ padding:"20px",width:"55%",height:"250px"}}>
                            <h3>title</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ad, tempore nihil, temporibus asperiores eaque at perspiciatis ratione facere delectus obcaecati odit aliquid pariatur nostrum rerum iure? Molestiae, asperiores impedit.</p>
                        </div>



                    </div>
                </div>

            </div>
        </>
    )
}

export default HelpView