import React from 'react'
import { useNavigate } from 'react-router-dom'
import CvIcon from '../../../assets/icons/ReadCvLogo.png'
import wallet from '../../../assets/icons/wallet.png'
import TotalCard from '../../../globalComponents/TotalCard'
import Money from '../../../assets/icons/Money.png'
import Filter from '../../../globalComponents/Filter'
import Button from '../../../globalComponents/Button'
import SearchFilter from '../../../globalComponents/SearchFilter'
import Dropdown from '../../../globalComponents/Dropdown'
import TableCan from '../../../globalComponents/table/TableCan'
import AccountTransactionsRow from './components/AccountTransactionsRow'

const AccountTransactions = () => {
  const navigate = useNavigate()
  const transactions_cardValues = [
    {
      icon: CvIcon,
      iconBg: 'bg-[#B95A12]',
      heading: 'total',
      subheading: 'transactions',
      cardValue: '2,000',
      valueStatus: false,
    },
    {
      icon: wallet,
      iconBg: 'bg-[#CA1919]',
      heading: 'total',
      subheading: 'wallets',
      cardValue: '10',
      valueStatus: true,
    },
    {
      icon: Money,
      iconBg: 'bg-[#78CA19]',
      heading: 'total',
      subheading: 'revenue',
      cardValue: '5,500',
      valueStatus: true,
      cardUnit: 'USD'
    }
    // #78CA19
  ]
  const tabs = [
    { value: 'all', name: 'all' },
    { value: 'send', name: 'send' },
    { value: 'receive', name: 'receive' },
    { value: 'buy', name: 'buy' },
    { value: 'swap', name: 'swap' },
    { value: 'withdraw', name: 'withdraw' },
  ]
  const periodFilter = {
    options: [
      { value: 'week', name: 'This week' },
      { value: 'month', name: 'This month' },
      { value: 'day', name: 'Today' },
    ],
    selected: 'This month',
    placeholder: 'Select a period'
  };
  const assetFilter = {
    options: [
      { value: 'all', name: 'all' },
      { value: 'btc', name: 'btc' },
      { value: 'trx', name: 'trx' },
      { value: 'sol', name: 'sol' },
      { value: 'usdt', name: 'usdt' },
    ],
    selected: 'all',
    placeholder: 'all'
  };
  const table_th = [
    'asset',
    'network',
    'receivong address',
    'amount',
    'status',
    'fee',
    'date',
    'more',
  ]
  const table_td = [
    {
      "asset": "BTC",
      "network": "Bitcoin",
      "receivingAddress": "0xdfk...345",
      "amount": "0.00234.34 BTC",
      "amountUSD": "$2,500",
      "status": "success",
      "fees": "0.0000012 BTC",
      "feesUSD": "$13",
      "date": "12-22-24",
      "time": "11:23 AM"
    },
    {
      "asset": "BTC",
      "network": "Bitcoin",
      "receivingAddress": "0xdfk...345",
      "amount": "0.00234.34 BTC",
      "amountUSD": "$2,500",
      "status": "success",
      "fees": "0.0000012 BTC",
      "feesUSD": "$13",
      "date": "12-22-24",
      "time": "11:23 AM"
    },
    {
      "asset": "BTC",
      "network": "Bitcoin",
      "receivingAddress": "0xdfk...345",
      "amount": "0.00234.34 BTC",
      "amountUSD": "$2,500",
      "status": "success",
      "fees": "0.0000012 BTC",
      "feesUSD": "$13",
      "date": "12-22-24",
      "time": "11:23 AM"
    },
    {
      "asset": "BTC",
      "network": "Bitcoin",
      "receivingAddress": "0xdfk...345",
      "amount": "0.00234.34 BTC",
      "amountUSD": "$2,500",
      "status": "success",
      "fees": "0.0000012 BTC",
      "feesUSD": "$13",
      "date": "12-22-24",
      "time": "11:23 AM"
    },
    {
      "asset": "BTC",
      "network": "Bitcoin",
      "receivingAddress": "0xdfk...345",
      "amount": "0.00234.34 BTC",
      "amountUSD": "$2,500",
      "status": "success",
      "fees": "0.0000012 BTC",
      "feesUSD": "$13",
      "date": "12-22-24",
      "time": "11:23 AM"
    }
  ]
  const handleFilter = (value) => {
    console.log(value)
  }
  return (
    <>
      <div className='flex items-center justify-between mb-8'>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => navigate(-1)}
            className='flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]'
          >
            <i className="bi bi-chevron-left text-xl text-white"></i>
          </button>
          <h1 className='text-4xl font-bold text-white'>Transactions</h1>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        {
          transactions_cardValues.map((item, index) => {
            return (
              <TotalCard
                key={index}
                icon={item.icon}
                iconBg={item.iconBg}
                heading={item.heading}
                subheading={item.subheading}
                cardValue={item.cardValue}
                cardUnit={item.cardUnit}
                valueStatus={item.valueStatus}
              />
            )
          })
        }
      </div>
      <div className='my-8 flex items-center justify-between'>
        <Filter
          tabs={tabs}
          activeTab={tabs[0].name}
          handleValue={handleFilter}
        />
        <div className='flex items-center gap-4'>
          <Button
            navigationName='Export CSV'
          />
          <SearchFilter
            handleFunction={handleFilter}
          />
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <Dropdown
          options={assetFilter.options}
          placeholder={assetFilter.placeholder}
          onChange={handleFilter}
          selected={assetFilter.selected}
          borderColor={"[#25AE7A]"}
          bgColor='theme-dark'
          roundedValue='full'
          position='left-0'
          paddingY='2'
          gap='4'
        />
        <Dropdown
          options={periodFilter.options}
          placeholder={periodFilter.placeholder}
          onChange={handleFilter}
          selected={periodFilter.selected}
          borderColor={"[#25AE7A]"}
          bgColor='theme-dark'
          roundedValue='full'
          position='left-0'
          paddingY='2'
          gap='4'
        />
      </div>
      <div className='mt-8'>
        <TableCan
          headerTr={table_th}
          dataTr={table_td}
          TrName={AccountTransactionsRow}
        />
      </div>
    </>
  )
}

export default AccountTransactions
