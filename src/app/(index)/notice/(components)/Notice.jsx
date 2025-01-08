'use client'

import React from 'react';
import DefaultInput from "@/component/input/DefaultInput";
import DefaultTable from "@/component/table/DefaultTable";
import DefaultButton from "@/component/button/DefaultButton";

function Notice(props) {
    const onSearch = (keyword) => {
        console.log(keyword)
    }

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"w-[250px] flex gap-3"}>
                <DefaultInput onclickFn={onSearch}/>
                <DefaultButton>공지 등록</DefaultButton>
            </div>
            <div className={""}>
                <DefaultTable></DefaultTable>
            </div>
        </div>
    );
}

export default Notice;