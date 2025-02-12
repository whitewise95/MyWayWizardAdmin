'use client'

import React, {useState} from 'react';
import DefaultInput from "@/component/input/DefaultInput";
import DefaultTable from "@/component/table/DefaultTable";
import DefaultButton from "@/component/button/DefaultButton";
import {useRouter} from "next/navigation";
import {useQuery} from "@tanstack/react-query";
import api from "@/axiox/api";

function Notice({tapInfo}) {
    const [keyword, setKeyword] = useState("");
    const [page, setPage] = useState(1);
    const limit = 20; // 고정 값 (필요하면 상태로 변경 가능)
    const sortField = "createdAt";
    const orderType = "DESC";

    const nav = useRouter();
    const onSearch = (keyword) => {
        setKeyword(keyword)
    }

    const writeNotice = () => {
        nav.push("/notice/create")
    }

    const fetchData = async () => {
        const uri = api.getUri();
        debugger
        const response = await api.get(`/admin/api/notice/NOTICE`, {
            params: {
                page,
                limit,
                sortField,
                orderType,
                keyword, // 검색어 추가
            },
            // headers: {
            //     Authorization: `Bearer ${localStorage.getItem('token')}`, // 동적으로 설정
            // },
        });

        return response.data; // axios의 응답 데이터 반환
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
                <DefaultTable dataList={data.result}></DefaultTable>
            </div>
        </div>
    );
}

export default Notice;