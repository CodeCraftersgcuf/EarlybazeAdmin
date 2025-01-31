import React from 'react'
import BtcIcon from '../../../../../assets/icons/DummyIcon/btc.png'
import MoreDropdown from '../../../../../globalComponents/MoreDropdown'

const AccountTransactionsRow = ({ displayData = {}, index = 1 }) => {
  return (
    <tr
      className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""
        }`}
    >
      <td className="px-4 py-2 ">
        <div className='flex items-center gap-2'>
          <input type="checkbox" />
          <div className='flex items-center gap-2'>
            <img
              src={displayData.typeimg ? displayData.typeimg : BtcIcon}
              alt={displayData.type}
              className="w-8 h-8"
            />
            <div className='flex flex-col'>
              <span className='text-sm opacity-50'>{displayData.asset}</span>
              <span>{displayData.network}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-2">{displayData.network}</td>
      <td className="px-4 py-2">{displayData.receivingAddress || displayData.sendToGmail}</td>
      <td className="px-4 py-2">
        <div className='flex flex-col gap-4'>
          <span>{displayData.amount}</span>
          <span>{displayData.amountUSD}</span>
        </div>
      </td>
      <td className='px-4 py-2'>
        <div className={`w-1 h-10 rounded-lg mx-auto bg-${displayData.status == 'success' ? 'green-500' : 'red-600'}`}>
        </div>
      </td>
      {displayData.fees &&
        <td className="px-4 py-2">
          <div className='flex flex-col gap-4'>
            <span>{displayData.fees}</span>
            <span>{displayData.feesUSD}</span>
          </div>
        </td>
      }
      <td className="px-4 py-2 flex flex-col gap-4">
        <span>{displayData.date}</span>
        <span>{displayData.time}</span>
      </td>
      <td className='px-4 py-2'>
        <MoreDropdown
          iconClass="bi bi-three-dots-vertical"
          menuClass="bg-theme-dark min-w-[150px]"
        >
          <div className="bg-theme-light p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              View More
            </div>
          </div>
        </MoreDropdown>
      </td>
    </tr>
  )
}

export default AccountTransactionsRow
