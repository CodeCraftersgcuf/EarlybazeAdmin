import React from 'react';

const MarketRow = ({ displayData ,index}) => {
    return (
        <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
            <td className=' px-4 py-2'>
                <div className='flex items-center gap-4 px-4 py-2'>
                    <input type="checkbox" />
                    <div className='flex items-center gap-4'>
                        <img src={displayData.logo ? displayData.logo : 'https://cdn-icons-png.flaticon.com/512/189/189664.png'} alt={displayData.name} width="30" />
                        <div>
                            <h1>{displayData.symbol}</h1>
                            <h1>{displayData.name}</h1>
                        </div>
                    </div>
                </div>
            </td>
            <td className=' px-4 py-2'>{displayData.price}</td>
            <td style={{ color: displayData.change_24h.includes('▲') ? 'green' : 'red' }} className=' px-4 py-2'>{displayData.change_24h}</td>
            <td style={{ color: displayData.change_7d.includes('▲') ? 'green' : 'red' }} className=' px-4 py-2'>{displayData.change_7d}</td>
            <td style={{ color: displayData.change_30d.includes('▲') ? 'green' : 'red' }} className=' px-4 py-2'>{displayData.change_30d}</td>
            <td className='text-center px-4 py-2'>{displayData.market_cap}</td>
            <td className='text-center px-4 py-2'>{displayData.volume}</td>
            <td className='text-center px-4 py-2'>{displayData.supply}</td>
            <td className='px-4 py-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/189/189664.png" alt="chart" width="40" className='mx-auto' />
            </td>
        </tr>
    );
};

export default MarketRow;
