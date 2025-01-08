import React from 'react';
import DefaultTap from "@/component/tap/DefaultTap";
import Notice from "@/app/(index)/notice/(components)/Notice";

function NoticeTap() {

    const tabMenus = [
        {
            key: 'notice',
            label: '점검중 공지',
            children: 'Content of Tab Pane 1',
        },
        {
            key: 'in_notice',
            label: '로비 공지',
            children: <Notice/>,
        },
        {
            key: 'inspection',
            label: '긴급 공지',
            children: 'Content of Tab Pane 3',
        },
    ];

    return (
        <DefaultTap tabMenus={tabMenus}></DefaultTap>
    );
}

export default NoticeTap;