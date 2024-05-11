import React from "react";
import { Menu } from "antd";

const LeftMenu = ({ mode }) => {
    return (
        <Menu style={{ backgroundColor: "#0a438b", }} mode={mode}>
            <Menu.Item key="Pakeges" style={{ color: "white" }}>More Travels</Menu.Item>
            <Menu.Item key="Stays" style={{ color: "white" }}>Stays</Menu.Item>
            {/* <Menu.Item key="Cars">Cars</Menu.Item>
            <Menu.Item key="Flights">Flights</Menu.Item>
            <Menu.Item key="travels">Travels Deal</Menu.Item> */}
        </Menu>
    );
};

export default LeftMenu;