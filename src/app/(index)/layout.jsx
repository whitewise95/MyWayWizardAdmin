import React from 'react';
import Link from "next/link";
import SideMenu from "@/component/menu/SideMenu";

function Layout({children}) {


    return (
        <div className={"flex h-full w-full"}>
            <div className={"w-[250px] flex flex-col border-solid border-r-gray-300 border-r-[1px]"}>
                <SideMenu>

                </SideMenu>
            </div>
            <div className={"w-full h-full flex flex-col"}>
                <div className={"border-solid border-b-gray-300 border-b-[1px] p-5 font-light bg-gray-100 w-full flex flex-col items-end"}>
                    <Link className={""} href={""}>
                        home
                    </Link>
                </div>
                <div className={"h-full"}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;