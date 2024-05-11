import React from 'react'
import { Button, Input } from 'antd';
function Login() {
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ width: "70%", padding: "10px", display: "flex", justifyContent: "center" }}>
                <div style={{ marginTop: "50px", border: "1px solid gray", padding: "20px" }}>

                    <h2 style={{ textAlign: "center" }}>Login</h2>
                    <Input style={{ marginTop: "20px", }} placeholder="Email" />
                    <Input style={{ marginTop: "20px", }} type="password" placeholder="PAssword" />
                    <Button style={{ marginTop: "20px", }} type="primary" size="large">Login</Button>
                </div>
            </div>

        </div>
    )
}

export default Login