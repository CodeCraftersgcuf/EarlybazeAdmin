import React from 'react';
import MoreDropdown from '../../../globalComponents/MoreDropdown';

const PayoutRulesRow = ({ displayData, index }) => {
    return (
        <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
            <td className='px-4 py-2 text-nowrap'>{displayData.user}</td>
            <td className='px-4 py-2 min-w-[300px]'>{displayData.details}</td>
            <td className='px-4 py-2 text-nowrap text-center'>{displayData.accountsExempted}</td>
            <td className='px-4 py-2 text-nowrap text-center'>{displayData.transactionsExempted}</td>
            <td className='px-4 py-2 text-nowrap'>{displayData.dateCreated}</td>
            <td className='px-4 py-2'>
                <div className={`h-6 w-1 rounded-full mx-auto ${displayData.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </td>
            <td className='px-4 py-2'>
                <div className='flex items-center gap-4'>
                    <button className="bg-[#25AE7A] text-white px-4 py-2 rounded-lg">Exemptions</button>
                    <MoreDropdown>
                        <div className=''>
                                working
                        </div>
                    </MoreDropdown>
                </div>
            </td>
        </tr>
    );
};

export default PayoutRulesRow;
