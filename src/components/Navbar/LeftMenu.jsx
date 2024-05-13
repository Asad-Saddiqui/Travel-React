import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


const LeftMenu = () => {
    const [links, setLinks] = useState(false);

    return (
        <>
            <div>
                <Link onClick={() => setLinks(!links)} style={{ color: "white", width: "200px", cursor: "pointer" }}>More Travels <DownOutlined /> </Link>
                <div style={{
                    backgroundColor: "white",
                    width: "200px",
                    display: links ? "block" : "none",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" // Add box shadow
                }}>
                    <div style={{ height: "40px", marginTop: "3px", padding: "5px 15px" }}>
                        <Link to="/Vacation-Packages" style={{ backgroundColor: "white" }}>Packages</Link>
                    </div>
                    <div style={{ height: "40px", marginTop: "3px", padding: "5px 15px" }}>
                        <Link to="/Hotels" style={{ backgroundColor: "white" }}>Stays</Link>
                    </div>
                    <div style={{ height: "40px", marginTop: "3px", padding: "5px 15px" }}>
                        <Link to="/Cars" style={{ backgroundColor: "white" }}>Cars</Link>
                    </div>
                    <div style={{ height: "40px", marginTop: "3px", padding: "5px 15px" }}>
                        <Link style={{ backgroundColor: "white" }}>Flights</Link>
                    </div>
                    <br></br>
                </div>

            </div>
        </>
    );
};

export default LeftMenu;
