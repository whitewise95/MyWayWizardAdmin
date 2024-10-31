import React from 'react';
import Link from "next/link";

function Layout({children}) {
    return (
        <div className={"flex h-full w-full"}>
            <div className={"w-[250px] flex flex-col border-solid border-r-gray-300 border-r-[1px]"}>
                <div className={"border-solid border-b-gray-300 border-b-[1px] p-5 font-bold bg-gray-100"}>몬스터빌리지 CMS
                </div>
                <div
                    className={"border-solid border-b-gray-300 border-b-[1px] p-5 hover: hover:bg-gray-100 cursor-pointer"}>스킬관리
                </div>
                <div
                    className={"border-solid border-b-gray-300 border-b-[1px] p-5 hover: hover:bg-gray-100 cursor-pointer"}>장비관리
                </div>
                <div
                    className={"border-solid border-b-gray-300 border-b-[1px] p-5 hover: hover:bg-gray-100 cursor-pointer"}>가차관리
                </div>
                <div
                    className={"border-solid border-b-gray-300 border-b-[1px] p-5 hover: hover:bg-gray-100 cursor-pointer"}>시스템관리
                </div>
            </div>
            <div className={"w-full"}>
                <div className={"border-solid border-b-gray-300 border-b-[1px] p-5 font-light bg-gray-100 w-full flex flex-col items-end"}>
                    <Link className={""} href={""}>
                        home
                    </Link>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;