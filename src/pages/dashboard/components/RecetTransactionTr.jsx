import React from 'react'

const RecetTransactionTr = ({displayData,index}) => {
    //  console.log(displayData)
    return (
            <tr 
                className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""
                    }`}
            >
                <td className="px-4 py-2 ">
                    <div className='flex items-center gap-2'>
                        <img
                            src={displayData.typeimg}
                            alt={displayData.type}
                            className="w-6 h-6"
                        />
                        <div className='flex flex-col'>
                            <span className='text-sm opacity-50'>{displayData.type}</span>
                            <span>{displayData.action}</span>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-2">{displayData.user}</td>
                <td className="px-4 py-2">{displayData.amount}</td>
                <td className="px-4 py-2">
                    <div className='flex flex-col'>
                        <h1 className='text-nowrap'>
                            {displayData.date}
                        </h1>
                        <h1 className='text-nowrap'>
                            {displayData.time}
                        </h1>
                    </div>
                </td>
            </tr>
    )
}

export default RecetTransactionTr
