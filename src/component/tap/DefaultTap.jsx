'use client'

import React from 'react';
import { Tabs } from 'antd';

const onChange = (key) => {
    console.log(key);
};

const defaultItems = [
    {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'Tab 3',
        children: 'Content of Tab Pane 3',
    },
];

function DefaultTap({tabMenus = defaultItems}) {
    return (
        <Tabs defaultActiveKey="1" items={tabMenus} onChange={onChange} />
    );
}

export default DefaultTap;