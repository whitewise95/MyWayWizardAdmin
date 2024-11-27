'use client'

import React, {useState} from 'react';
import {Menu} from "antd";
import Link from "next/link";

const menu = [
    {
        key: `시스템관리`,
        // icon: React.createElement(icon),
        label: `시스템관리`,
        children: [
            {
                key: "점검관리",
                label: (<Link href={"/notice"}>점검관리</Link>),
            }
        ]
    }
]

function SideMenu() {



    const [current, setCurrent] = useState('home');

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="inline" items={menu} />
}

export default SideMenu;