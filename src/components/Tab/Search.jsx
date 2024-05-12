import React from 'react'
import { Tabs } from 'antd';
import { Input } from 'antd';
import { Button, Flex } from 'antd';
import { DatePicker, Space } from 'antd';
import { Select } from 'antd';

import Package from '../Search/Package';
import Stay from '../Search/Stay';
const { RangePicker } = DatePicker;
const { Option } = Select;
function Search() {

    const onChange = (key) => {
        console.log(key);
    };


    const items = [
        {
            key: '1',
            label: 'Stays',
            children: <Stay />
        },
        {
            key: '2',
            label: 'Flights',
            children: (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Input placeholder="Basic usage" style={{ margin: "5px" }} />
                        <RangePicker showTime style={{ margin: "5px" }} />
                        <Input placeholder="Basic usage" style={{ margin: "5px" }} />
                        <Button type="primary" style={{ margin: "5px" }}>Search</Button>
                    </div>
                </>
            ),
        },
        {
            key: '3',
            label: 'Cars',
            children: (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Input placeholder="Basic usage" style={{ margin: "5px" }} />
                        <RangePicker showTime style={{ margin: "5px" }} />
                        <Input placeholder="Basic usage" style={{ margin: "5px" }} />
                        <Button type="primary" style={{ margin: "5px" }}>Search</Button>
                    </div>
                </>
            )
        },
        {
            key: '4',
            label: 'Packages',
            children: (
                <>
                    <Package />
                </>
            )
        },
        {
            key: '5',
            label: 'Things to do',
            children: (
                <>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Input placeholder="Basic usage" style={{ margin: "5px" }} />
                        <RangePicker showTime style={{ margin: "5px" }} />
                        <Input placeholder="Basic usage" style={{ margin: "5px" }} />
                        <Button type="primary" style={{ margin: "5px" }}>Search</Button>
                    </div>
                </>
            )
        },
    ];
    return (
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{ width: "85%", border: "1px solid gray", padding: "10px" }}>
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </div>

        </div>
    )
}

export default Search