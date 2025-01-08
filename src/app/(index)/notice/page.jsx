import React from 'react';
import NoticeTap from "@/app/(index)/notice/(components)/NoticeTap";

function Page() {
    return (
        <div className={"p-3"}>
            <h1 className={"font-bold text-2xl mb-3"}>점검관리</h1>
            <NoticeTap></NoticeTap>
        </div>
    );
}

export default Page;