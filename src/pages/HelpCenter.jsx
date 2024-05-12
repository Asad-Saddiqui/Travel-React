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
    let data = [{
        title: "Flights",
        content: [{
            title: "abcd",
            description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
        }]
    },
        {
            title: "Flights",
            content: [{
                title: "abcd",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
            }]
        },
        {
            title: "Flights",
            content: [{
                title: "abcd",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
            }]
        },
        {
            title: "Flights",
            content: [
                {
                title: "lkjsalk",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
                },
                {
                title: "lksdjflask",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
                },
                {
                title: "lkasjdlas",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
                },
                {
                title: "klasjd",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
                },
        ]
        },
        {
            title: "Flights",
            content: [{
                title: "abcd",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
            }]
        },
        {
            title: "Flights",
            content: [{
                title: "abcd",
                description: "askmdflkasdflk askdjf aksdf aksdjf akjsdf ajsdf "
            }]
        },
    
    ]
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
            <AppFooter/>

        </>
    )
}

export default HelpCenter