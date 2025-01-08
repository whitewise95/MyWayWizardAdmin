import React from 'react';

function DefaultTable(props) {

    const data = [
        {
            id: 1,
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park",
            tags: ["NICE", "DEVELOPER"],
        },
        {
            id: 2,
            name: "Jim Green",
            age: 42,
            address: "London No. 1 Lake Park",
            tags: ["LOSER"],
        },
        {
            id: 3,
            name: "Joe Black",
            age: 32,
            address: "Sydney No. 1 Lake Park",
            tags: ["COOL", "TEACHER"],
        },
    ];

    return (
        <div className="">
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Age</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Address</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tags</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">
                            <a href="#" className="text-blue-500 hover:underline">
                                {item.name}
                            </a>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">{item.age}</td>
                        <td className="border border-gray-300 px-4 py-2">{item.address}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            {item.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className={`inline-block px-2 py-1 mr-2 text-xs font-semibold rounded ${
                                        tag === "LOSER"
                                            ? "bg-red-500 text-white"
                                            : tag === "NICE"
                                                ? "bg-green-500 text-white"
                                                : tag === "COOL"
                                                    ? "bg-teal-500 text-white"
                                                    : "bg-blue-500 text-white"
                                    }`}
                                >
                    {tag}
                  </span>
                            ))}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded mr-2">
                                Invite
                            </button>
                            <button className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default DefaultTable;