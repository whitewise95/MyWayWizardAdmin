'use client'

import React from 'react';
import DefaultInput from "@/component/input/DefaultInput";
import DefaultTable from "@/component/table/DefaultTable";
import DefaultButton from "@/component/button/DefaultButton";
import {useRouter} from "next/navigation";

function Notice({tapInfo}) {
    const nav = useRouter();
    const onSearch = (keyword) => {
        console.log(keyword)
    }

    const writeNotice = () => {
        nav.push("/notice/create")
    }

    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"w-[250px] flex gap-3"}>
                <DefaultInput onclickFn={onSearch}/>
                <DefaultButton onclickFn={writeNotice}>공지 등록</DefaultButton>
            </div>
            <div className={""}>
                <DefaultTable></DefaultTable>
            </div>
        </div>
    );
}

export default Notice;