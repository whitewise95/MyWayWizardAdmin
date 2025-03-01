'use client';

import React, {useState} from 'react';
import DefaultButton from "@/component/button/DefaultButton";
import {useRouter} from "next/navigation";
import api from "@/axiox/api";

function Page() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [type, setType] = useState('IN_NOTICE'); // 기본값 설정

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post('/admin/api/notice', {
            title,
            content,
            noticeType: type
        });

        router.push('/notice');
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
                            <option value="IN_NOTICE">로비 공지</option>
                            <option value="INSPECTION">긴급 공지</option>
                            <option value="NOTICE">점검중 공지</option>
                        </select>
                    </div>
                    <div className={"flex justify-center gap-2 w-full"}>
                        <DefaultButton onclickFn={handleSubmit}>등록</DefaultButton>
                        <DefaultButton color={"danger"}
                                       onclickFn={() => router.push("/notice?defaultActiveKey=")}>취소</DefaultButton>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Page;
