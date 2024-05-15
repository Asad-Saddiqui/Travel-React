import React from 'react'
import { Checkbox, Menu, Tabs } from 'antd';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { TreeSelect } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Modal, Form } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
const { RangePicker } = DatePicker;
const { Option } = Select;
function Flights() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [btvalue, setbtvalue] = useState("Economy");
    const [stay, setStay] = useState(true)
    const [Flight, setFlight] = useState(true)
    const [inputs, setInputs] = useState(["Flight 1"])
    const [Car, setCar] = useState(false)
    const [travelsvalue, settravelsvalue] = useState([{
        Room: "",
        Adults: 2,
        Children: {
            total: 0,
            ages: [],
        }
    }]);
    let totalAdults = 0;
    let totalChildren = 0;
    travelsvalue.forEach(room => {
        totalAdults += room.Adults;
        totalChildren += room.Children.total;
    });
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const onChange = (key) => {
        console.log(key);
    };

    const handleChangeAdultsminus = (index, dec) => {
        const updatedTravelsvalue = [...travelsvalue]; // Create a copy of the state array
        const room = updatedTravelsvalue[index]; // Get the room object to update
        if (room.Adults > 1) {
            room.Adults -= dec;
            settravelsvalue(updatedTravelsvalue); // Set the state with the updated array
        }
    };
    const handleChangechildrensminus = (index, dec) => {
        const updatedTravelsvalue = [...travelsvalue]; // Create a copy of the state array
        const room = updatedTravelsvalue[index]; // Get the room object to update
        if (room.Children.total > 0) {
            room.Children.total -= dec;
            room.Children.ages.pop(); // Update the number of adults
            settravelsvalue(updatedTravelsvalue); // Set the state with the updated array
        }
    };
    const handleChangeAdults = (index, increment) => {
        const updatedTravelsvalue = [...travelsvalue]; // Create a copy of the state array
        const room = updatedTravelsvalue[index]; // Get the room object to update
        room.Adults += increment; // Update the number of adults
        settravelsvalue(updatedTravelsvalue); // Set the state with the updated array
    };
    const handleChangechildren = (index, increment) => {
        const updatedTravelsvalue = [...travelsvalue]; // Create a copy of the state array
        const room = updatedTravelsvalue[index]; // Get the room object to update
        room.Children.total += increment; // Update the number of adults
        room.Children.ages.push(0); // Update the number of adults
        settravelsvalue(updatedTravelsvalue); // Set the state with the updated array
    };
    const handleChangeselect = (index, i, e) => {
        const updatedTravelsvalue = [...travelsvalue];
        const room = updatedTravelsvalue[index];
        room.Children.ages[i] = e
        settravelsvalue(updatedTravelsvalue); // Set the state with the updated array
    }
    const options_ = Array.from({ length: 18 }, (_, index) => index);
    const items = [
        {
            label: "Economy",
            key: '0',
        },
        {
            label: "Bussness Class",
            key: '1',
        },

    ];
    const onItemClick = (value) => {
        setbtvalue(value.key)
    }
    const menu = (
        <Menu onClick={onItemClick}>
            {items.map((item) => (
                <Menu.Item key={item.label}>{item.label}</Menu.Item>
            ))}
        </Menu>
    );

    const CommonSearch = () => {
        return (<div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Select
                showSearch
                style={{
                    width: "23%",
                    margin: "5px"
                }}
                placeholder="Leaving From"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                suffixIcon={<EnvironmentOutlined />}
                options={[
                    // {
                    //     value: '1',
                    //     label: 'Not Identified',
                    // },
                ]}
            />

            <Select
                showSearch
                style={{
                    width: "24%",
                    margin: "5px"
                }}
                placeholder="Going to"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                suffixIcon={<EnvironmentOutlined />}
                options={[
                    // {
                    //     value: '1',
                    //     label: 'Not Identified',
                    // },
                ]}
            />
            <RangePicker style={{
                width: "24%",
                margin: "5px"
            }} />
            <div style={{
                width: "24%",
                margin: "5px",
                border: "1px solid #d9d9d9",
                color: "#d9d9d9",
                borderRadius: "5px",
                display: "flex",
                backgroundColor: "white",
                paddingLeft: "5px",
                alignItems: "center"
            }} onClick={showModal} ><div><UserOutlined />{travelsvalue ? <>{totalAdults + totalChildren} Travelers,{travelsvalue.length} Room</> : "Click  to open popup"}</div></div>

            <Modal
                title="Travelers Details"
                open={isModalVisible}
                maskClosable={false}
                onCancel={handleCancel}
                footer={null}
            >
                {travelsvalue.map((item, i) => {
                    return (<div key={i} style={{ padding: "10px" }}>
                        <h3>Room {i + 1}  </h3>
                        <div style={{ width: "100%", display: "flex", height: "50px", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ width: "30%" }}>
                                Adults
                            </div>
                            <div style={{ width: "25%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <MinusCircleOutlined onClick={() => handleChangeAdultsminus(i, 1)} // Increment adults by 1
                                    style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }} />
                                <div>{item.Adults}</div>
                                <PlusCircleOutlined
                                    onClick={() => handleChangeAdults(i, 1)} // Increment adults by 1
                                    style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }}
                                />

                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", height: "50px", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ width: "30%" }}>
                                Children
                            </div>
                            <div style={{ width: "25%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <MinusCircleOutlined
                                    onClick={() => handleChangechildrensminus(i, 1)}
                                    style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }} />
                                <div>{item.Children.total}</div>
                                <PlusCircleOutlined
                                    onClick={() => handleChangechildren(i, 1)} // Increment adults by 1
                                    style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }}
                                />

                            </div>

                        </div>
                        <div>
                            {item.Children.ages.map((age, in_) => [
                                <Select key={in_} onChange={(e) => handleChangeselect(i, in_, e)} defaultValue={`Select Children ${in_ + 1} Age`} style={{ width: "100%", marginTop: "4px" }}>

                                    {options_.map(option => (
                                        <Option key={option} value={option}>
                                            {option}
                                        </Option>
                                    ))}
                                </Select>
                            ])}

                        </div>
                        {travelsvalue.length > 1 &&
                            <div style={{ color: "blue", cursor: "pointer" }} onClick={() => {
                                const updatedTravelsvalue = travelsvalue.filter((room, index) => index !== i);
                                settravelsvalue(updatedTravelsvalue);
                            }}>Remove Room</div>
                        }

                    </div>)
                })}
                <div style={{ color: "blue", cursor: "pointer" }} onClick={() => {
                    let obj = {
                        Room: "",
                        Adults: 1,
                        Children: {
                            total: 0,
                            ages: [],
                        }
                    }
                    const updatedTravelsvalue = [...travelsvalue, obj];
                    settravelsvalue(updatedTravelsvalue);
                }}>Add a room</div>
            </Modal>
            <Button type="primary" style={{ margin: "5px" }}>Search</Button>
            <br></br>

        </div >)
    }
    const FlightSearch = () => {
        return (<div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            <Select
                showSearch
                style={{
                    width: "32%",
                    margin: "5px",
                    height: "50px"
                }}
                placeholder="Leaving From"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                suffixIcon={<EnvironmentOutlined />}
                options={[
                    // {
                    //     value: '1',
                    //     label: 'Not Identified',
                    // },
                ]}
            />

            <Select
                showSearch
                style={{
                    width: "32%",
                    margin: "5px",
                    height: "50px"
                }}
                placeholder="Going to"
                optionFilterProp="children"
                filterOption={(input, option) => (option?.label ?? '').includes(input)}
                filterSort={(optionA, optionB) =>
                    (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                }
                suffixIcon={<EnvironmentOutlined />}
                options={[
                    // {
                    //     value: '1',
                    //     label: 'Not Identified',
                    // },
                ]}
            />
            <RangePicker style={{
                width: "32%",
                margin: "5px",
                height: "50px"
            }} />


        </div >)
    }
    const items_ = [
        {
            key: '1',
            label: 'Roundtrip',
            children: <>
                <CommonSearch />
                <Checkbox style={{
                    margin: "5px"
                }} >Add a place to stay</Checkbox>
                <Checkbox >Add a Car</Checkbox>
            </>
        },
        {
            key: '2',
            label: 'One-Way',
            children: (
                <>
                    <CommonSearch />

                </>
            ),
        },
        {
            key: '3',
            label: 'Multi-City',
            children: (
                <>
                    <div>
                        <div style={{
                            width: "50%",
                            margin: "5px",
                            height: "50px",
                            border: "1px solid #d9d9d9",
                            color: "#d9d9d9",
                            borderRadius: "5px",
                            display: "flex",
                            backgroundColor: "white",
                            paddingLeft: "5px",
                            alignItems: "center"
                        }} onClick={showModal} ><div><UserOutlined />{travelsvalue ? <>{totalAdults + totalChildren} Travelers,{travelsvalue.length} Room</> : "Click  to open popup"}</div></div>

                        <Modal
                            title="Travelers Details"
                            open={isModalVisible}
                            maskClosable={false}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            {travelsvalue.map((item, i) => {
                                return (<div key={i} style={{ padding: "10px" }}>
                                    <h3>Room {i + 1}  </h3>
                                    <div style={{ width: "100%", display: "flex", height: "50px", alignItems: "center", justifyContent: "space-between" }}>
                                        <div style={{ width: "30%" }}>
                                            Adults
                                        </div>
                                        <div style={{ width: "25%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <MinusCircleOutlined onClick={() => handleChangeAdultsminus(i, 1)} // Increment adults by 1
                                                style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }} />
                                            <div>{item.Adults}</div>
                                            <PlusCircleOutlined
                                                onClick={() => handleChangeAdults(i, 1)} // Increment adults by 1
                                                style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }}
                                            />

                                        </div>
                                    </div>
                                    <div style={{ width: "100%", display: "flex", height: "50px", alignItems: "center", justifyContent: "space-between" }}>
                                        <div style={{ width: "30%" }}>
                                            Children
                                        </div>
                                        <div style={{ width: "25%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <MinusCircleOutlined
                                                onClick={() => handleChangechildrensminus(i, 1)}
                                                style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }} />
                                            <div>{item.Children.total}</div>
                                            <PlusCircleOutlined
                                                onClick={() => handleChangechildren(i, 1)} // Increment adults by 1
                                                style={{ cursor: "pointer", fontSize: '24px', color: 'gray' }}
                                            />

                                        </div>

                                    </div>
                                    <div>
                                        {item.Children.ages.map((age, in_) => [
                                            <Select key={in_} onChange={(e) => handleChangeselect(i, in_, e)} defaultValue={`Select Children ${in_ + 1} Age`} style={{ width: "100%", marginTop: "4px" }}>

                                                {options_.map(option => (
                                                    <Option key={option} value={option}>
                                                        {option}
                                                    </Option>
                                                ))}
                                            </Select>
                                        ])}

                                    </div>
                                    {travelsvalue.length > 1 &&
                                        <div style={{ color: "blue", cursor: "pointer" }} onClick={() => {
                                            const updatedTravelsvalue = travelsvalue.filter((room, index) => index !== i);
                                            settravelsvalue(updatedTravelsvalue);
                                        }}>Remove Room</div>
                                    }

                                </div>)
                            })}
                            <div style={{ color: "blue", cursor: "pointer" }} onClick={() => {
                                let obj = {
                                    Room: "",
                                    Adults: 1,
                                    Children: {
                                        total: 0,
                                        ages: [],
                                    }
                                }
                                const updatedTravelsvalue = [...travelsvalue, obj];
                                settravelsvalue(updatedTravelsvalue);
                            }}>Add a room</div>
                        </Modal>

                        {inputs.map((flight) => {
                            return (<div>
                                <h2>{flight}</h2>
                                <br />
                                <FlightSearch />
                            </div>)

                        })}

                        <Button type="primary" onClick={() => {
                            let value = "Fligt " + (inputs.length + 1)
                            let updatedarray = [...inputs, value]
                            setInputs(updatedarray)
                        }}>Add Flights</Button>
                        <Button type="primary">Search</Button>


                    </div>

                </>
            )
        },
        {
            key: '3',
            label: <><Dropdown
                className='pakegName_'
                overlay={menu} trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        {btvalue}
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown></>,
            children: (
                <>

                </>
            )
        },
    ];
    return (
        <>

            <Tabs defaultActiveKey="1" items={items_} onChange={onChange} />


        </>
    )
}

export default Flights