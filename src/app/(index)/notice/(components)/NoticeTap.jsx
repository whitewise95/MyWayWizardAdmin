import React from 'react';
import DefaultTap from "@/component/tap/DefaultTap";
import Notice from "@/app/(index)/notice/(components)/Notice";

function NoticeTap() {
    return (
        <DefaultTap tabMenus={[
            {
                key: 'notice',
                label: '점검중 공지',
                children: <Notice tapInfo={NOTICE}/>,
            },
            {
                key: 'in_notice',
                label: '로비 공지',
                children: <Notice tapInfo={IN_NOTICE}/>,
            },
            {
                key: 'inspection',
                label: '긴급 공지',
                children: <Notice tapInfo={INSPECTION}/>,
            },
        ]}></DefaultTap>
    );
}

const NOTICE = {
    api_url: "",
    key: "notice",
}

const IN_NOTICE = {
    api_url: "",
    key: "in_notice",
}

const INSPECTION = {
    api_url: "",
    key: "inspection",
}

export default NoticeTap;