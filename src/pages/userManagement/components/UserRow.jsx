import React from 'react'

const UserRow = ({ displayData, index }) => {
    return (
        <tr
            className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""
                }`}
        >
            <td className="px-4 py-2">{displayData.name}</td>
            <td className="px-4 py-2">{displayData.email}</td>
            <td className="px-4 py-2">{displayData.phone}</td>
            <td className="px-4 py-2">
                <div className='w-full p-2 pl-4'>
                    <div className={`h-10 w-1 rounded-sm ${displayData.status == 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
            </td>
            <td className=" py-2">
                <div className='flex items-center gap-4'>
                    <button className='bg-[#25AE7A] px-4 rounded-xl py-2 '>Customer Details</button>
                    <button className='bg-[#084B82] px-4 rounded-xl py-2 '>Transactions</button>
                </div>
            </td>
            <td>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='border w-10 h-10 flex items-center justify-center rounded-lg '> 
                        <i className="bi bi-three-dots-vertical"></i>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default UserRow
