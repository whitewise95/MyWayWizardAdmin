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
    const [page, setPage] = useState(1);  // 현재 페이지
    const limit = 20; // 페이지당 개수
    const sortField = "createdAt";
    const orderType = "DESC";

    const nav = useRouter();

    const onSearch = (keyword) => {
        setKeyword(keyword);
        setPage(1); // 검색 시 첫 페이지로 이동
    };

    const writeNotice = () => {
        nav.push("/notice/create");
    };

    const fetchData = async () => {
        const response = await api.get(`/admin/api/notice/${tapInfo.key}`, {
            params: {
                page,
                limit,
                sortField,
                orderType,
                keyword, // 검색어 추가
            },
        });
        return response.data; // axios 응답 데이터 반환
    };

    // ✅ 페이지 값이 변경될 때마다 데이터를 다시 가져오도록 설정
    const {data, isLoading, isError} = useQuery({
        queryKey: ['notices', page, keyword], // 페이지와 검색어가 변경될 때 다시 불러오기
        queryFn: fetchData,
        keepPreviousData: true, // 이전 데이터를 유지하면서 새로운 데이터를 가져옴
    });

    // ✅ 페이지 이동 함수
    const goToPrevPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const goToNextPage = () => {
        if (data?.pageTotal && page < data.pageTotal) setPage((prev) => prev + 1);
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading notices</p>;

    return (
        <div className="flex flex-col gap-2">
            <div className="w-[250px] flex gap-3">
                <DefaultInput onclickFn={onSearch}/>
                <DefaultButton onclickFn={writeNotice}>공지 등록</DefaultButton>
            </div>

            <DefaultTable dataList={data?.results}/>

            {/* ✅ 페이징 버튼 추가 */}
            <div className="flex justify-center items-center gap-3 mt-4">
                <button
                    onClick={goToPrevPage}
                    disabled={page === 1}
                    className={`px-4 py-2 border rounded ${page === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                >
                    이전 페이지
                </button>

                <span>페이지 {page} / {data?.pageTotal || 1}</span>

                <button
                    onClick={goToNextPage}
                    disabled={page >= (data?.pageTotal || 1)}
                    className={`px-4 py-2 border rounded ${page >= (data?.pageTotal || 1) ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
                >
                    다음 페이지
                </button>
            </div>
        </div>
    );
}

export default Notice;
