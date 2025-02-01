'use client'

import React from 'react';
import DefaultInput from "@/component/input/DefaultInput";
import DefaultTable from "@/component/table/DefaultTable";
import DefaultButton from "@/component/button/DefaultButton";
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";

function Notice({tapInfo}) {
    const nav = useRouter();
    const onSearch = (keyword) => {
        console.log(keyword)
    }

    const writeNotice = () => {
        nav.push("/notice/create")
    }

    const fetchData = async () => {
        const {data} = await axios.get('http://localhost:8090/admin/api/notice');
        debugger
        return data;
    };


    const {data, isLoading, isError} = useQuery({
        queryKey: ['notices'],
        queryFn: fetchData
    });


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading notices</p>;


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