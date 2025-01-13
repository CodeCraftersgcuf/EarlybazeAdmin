import React from 'react'

const CryptoTr = ({displayData,index}) => {
    return (
        <tr
            className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""
                }`}
        >
            <td className="px-4 py-2 flex items-center gap-2">
                <img
                    src={displayData.tokenImg}
                    alt={displayData.name}
                    className="w-6 h-6"
                />
                <div className='flex flex-col'>
                    <span className='text-sm opacity-50 capitalize'>{displayData.name}</span>
                    <span className=''>{displayData.rating}</span>
                </div>
            </td>
            <td className="px-4 py-2 capitalize">{displayData.price}</td>
            <td className="px-4 py-2 capitalize">{displayData.change}</td>
        </tr>
    )
}

export default CryptoTr
