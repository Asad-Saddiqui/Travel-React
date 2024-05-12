import React from "react";
import { Button, Menu } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const LeftMenu = ({ mode }) => {
    return (
        <>
            <div>
                <Button style={{ backgroundColor: '#f0f0f0', color: 'rgba(0, 0, 0, 0.65)' }} shape="round" icon={<DownloadOutlined />} >
                    Get the app
                </Button>
                <Link to="/helpcenter" style={{ marginLeft: "20px", color: "white" }}>Supports</Link>
                <Link style={{ marginLeft: "20px", color: "white" }}>Trips</Link>
                <Link style={{ marginLeft: "20px", color: "white", marginRight: "40px" }} to="/login">Sigin</Link>
            </div>
        </>
    );
};

export default LeftMenu;