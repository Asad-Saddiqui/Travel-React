import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer } = Layout;

const AppFooter = () => (
    <Footer style={{ textAlign: 'center' }}>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
                <h3>Links</h3>
                <ul>
                    <li style={{listStyle:"none"}}><a href="#">Home</a></li>
                    <li style={{ listStyle: "none" }}><a href="#">About</a></li>
                    <li style={{ listStyle: "none" }}><a href="#">Services</a></li>
                    <li style={{ listStyle: "none" }}><a href="#">Contact</a></li>
                </ul>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <h3>Contact</h3>
                <p>123 Main Street</p>
                <p>City, State ZIP</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: example@example.com</p>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <h3>Social Media</h3>
                <ul>
                    <li style={{ listStyle: "none" }}><a href="#">Facebook</a></li>
                    <li style={{ listStyle: "none" }}><a href="#">Twitter</a></li>
                    <li style={{ listStyle: "none" }}><a href="#">Instagram</a></li>
                </ul>
            </Col>
            <Col xs={24} sm={12} md={6}>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
            </Col>
        </Row>
    </Footer>
);

export default AppFooter;
