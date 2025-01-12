'use client';

import React, { useState } from 'react';
import DefaultButton from "@/component/button/DefaultButton";
import {useRouter} from "next/navigation";

function Page() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [type, setType] = useState('general'); // 기본값 설정

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // 등록 로직 (API 호출 등)
        console.log('공지 등록:', { title, content, type });
        alert('공지사항이 등록되었습니다.');
        setTitle('');
        setContent('');
        setType('general'); // 콤보박스 기본값으로 초기화
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-700">공지사항 등록</h2>
                <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-600">
                            제목
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="제목을 입력하세요"
                            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-600">
                            내용
                        </label>
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="내용을 입력하세요"
                            rows="5"
                            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-600">
                            타입
                        </label>
                        <select
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            required
                        >
                            <option value="in_notice">로비 공지</option>
                            <option value="inspection">긴급 공지</option>
                            <option value="notice">점검중 공지</option>
                        </select>
                    </div>
                    <div className={"flex justify-center gap-2 w-full"}>
                        <DefaultButton>등록</DefaultButton>
                        <DefaultButton color={"danger"} onclickFn={() => router.push("/notice?defaultActiveKey=")}>취소</DefaultButton>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Page;
