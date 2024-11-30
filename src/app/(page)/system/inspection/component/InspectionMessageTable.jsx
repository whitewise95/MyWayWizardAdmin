'use client'

import React, { useState } from 'react';
import useInspectionStore from "@/store/system/inspection/useInspectionStore";

const defaultMessages = [
  { id: 1, name: "John Brown", isDisabled: false },
  { id: 2, name: "Jim Green", isDisabled: false },
  { id: 3, name: "Joe Black", isDisabled: false },
  { id: 4, name: "Disabled User", isDisabled: true },
];

const InspectionMessageTable = ({messages = defaultMessages}) => {

  const setMessageId = useInspectionStore((state) => {
    return  state.setMessageId
  });
  const [selectedUser, setSelectedUser] = useState(null);


  const handleSelection = (id) => {
    setSelectedUser(id);
    setMessageId(id)
  };

  return (
      <div className="w-full h-full">
        <div className="bg-blue-100 p-4">
          <table className="min-w-full table-auto">
            <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-center" colSpan={2}>메세지</th>
            </tr>
            </thead>
            <tbody>
            {messages.map(message => (
                <tr
                    key={message.id}
                    className={`hover:bg-blue-50 ${selectedUser === message.id ? 'bg-blue-200' : ''}`}
                    onClick={() => handleSelection(message.id)}
                >
                  <td className="pl-4 py-2" rowSpan={1}>
                    <input
                        type="radio"
                        id={`user-${message.id}`}
                        name="user"
                        checked={selectedUser === message.id}
                        onChange={() => handleSelection(message.id)}
                        disabled={message.isDisabled}
                    />
                  </td>
                  <td className="">
                    {message.name}
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default InspectionMessageTable;
