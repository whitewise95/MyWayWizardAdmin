import React from 'react';

function DefaultTable(props) {

    const header = [
        {
            key: "긴급 점검 메세지",
            label: "긴급 점검 메세지"
        },
        {
            key: "긴급 점검 메세지",
            label: "긴급 점검 메세지"
        },
        {
            key: "긴급 점검 메세지",
            label: "긴급 점검 메세지"
        }
    ]

    return (
        <div>
            <div className={"flex justify-between bg-gray-100"}>
                {header.map(item => <div key={item.key}>{item.label}</div>)}
            </div>
        </div>
    );
}

export default DefaultTable;