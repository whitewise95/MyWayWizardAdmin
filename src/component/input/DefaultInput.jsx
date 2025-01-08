'use client'

import React, {useState} from 'react';

function DefaultInput({onclickFn}) {
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (onclickFn) {
            onclickFn(searchText); // 현재 상태값 전달
        }
    };

    return (
        <form onSubmit={handleSearch}
              className={"flex items-center border border-solid border-gray-300 rounded-lg p-[5px]"}>
            <input
                type="text"
                name="search"
                className="flex-1 border-none outline-none px-2"
            />
            <button
                type="submit"
                className="bg-transparent border-none cursor-pointer px-2"
            >
                🔍
            </button>
        </form>
    );
}

export default DefaultInput;