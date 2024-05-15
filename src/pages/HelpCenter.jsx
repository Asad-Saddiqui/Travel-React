import React from 'react'
import Navbar from '../components/Navbar'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { Col, Row } from 'antd';
import HelpCards from '../components/helpCards/HelpCards';
import AppFooter from '../components/AppFooter/AppFooter';

const { Search } = Input;
function HelpCenter() {
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />

    const onSearch = (value, _e, info) => console.log(info?.source, value);
    let data = [
        {
            title: "Flights",
            content: [{
                title: "Flight to Paris",
                description: "Enjoy a luxurious flight to the romantic city of Paris. Experience world-class service and comfort."
            }]
        },
        {
            title: "Hotels",
            content: [{
                title: "Luxury Suite at Grand Hotel",
                description: "Indulge in opulence with our luxurious suites at the Grand Hotel. Experience unparalleled comfort and service."
            }]
        },
        {
            title: "Tours",
            content: [{
                title: "Historical Tour of Rome",
                description: "Embark on a fascinating historical journey through the ancient streets of Rome. Explore iconic landmarks and hidden gems."
            }]
        },
        {
            title: "Car Rentals",
            content: [
                {
                    title: "SUV Rental for Family Adventures",
                    description: "Rent a spacious SUV for your family adventures. Enjoy ample space and comfort for long journeys."
                },
                {
                    title: "Convertible for Stylish Getaways",
                    description: "Cruise in style with a sleek convertible. Perfect for romantic getaways and scenic drives."
                },
                {
                    title: "Economy Car for Budget Travel",
                    description: "Opt for an economy car for budget-friendly travel. Save money without compromising on quality."
                },
                {
                    title: "Luxury Sedan for Business Trips",
                    description: "Travel in sophistication with a luxury sedan. Impress clients and colleagues with premium comfort and style."
                },
            ]
        },
        {
            title: "Cruises",
            content: [{
                title: "Mediterranean Cruise",
                description: "Set sail on a breathtaking Mediterranean cruise. Explore stunning coastal cities and picturesque islands."
            }]
        },
        {
            title: "Activities",
            content: [{
                title: "Adventure Sports Package",
                description: "Experience adrenaline-pumping adventure sports with our exciting package. Thrill-seekers will love this!"
            }]
        },
    ];

    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ width: "80%", marginTop: "20px", marginBottom: "20px" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Welcome to Help Center</h2>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "20px", marginBottom: "20px" }}>
                <div style={{ width: "80%", marginTop: "20px", marginBottom: "20px" }}>
                    <Row>

                        <HelpCards cards={data} />
                    </Row>

                </div>

            </div>
            <AppFooter />

        </>
    )
}

export default HelpCenter