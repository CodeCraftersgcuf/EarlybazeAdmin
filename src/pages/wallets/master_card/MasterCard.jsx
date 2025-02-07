import React, { useState } from 'react'
import AddingButton from '../../../globalComponents/AddingButton'
import TotalCard from '../../../globalComponents/TotalCard'
import wallet_image from '../../../assets/icons/Wallet.png'
import Dropdown from '../../../globalComponents/Dropdown'
import Button from '../../../globalComponents/Button'
import SearchFilter from '../../../globalComponents/SearchFilter'
import WalletCard from '../virtual_card/components/crypto_comp/WalletCard'
import TableCan from '../../../globalComponents/table/TableCan'
import NairaPortionRow from '../virtual_card/components/naira_comp/NairaPortionRow'
import AddWalletModal from '../virtual_card/components/crypto_comp/addwallet/AddWalletModal'

const MasterCard = () => {
    const [showWalletModal, setShowWalletModal] = useState(false);
    const cardData = [
        {
            icon: wallet_image,
            iconBg: "bg-[#CA1919]",
            heading: "total",
            subheading: "wallets",
            cardValue: "1,750",
            valueStatus: true,
        },
        {
            icon: wallet_image,
            iconBg: "bg-[#CA1919]",
            heading: "active",
            subheading: "wallets",
            cardValue: "25,000",
            valueStatus: true,
        },
        {
            icon: wallet_image,
            iconBg: "bg-[#CA1919]",
            heading: "inactive",
            subheading: "wallets",
            cardValue: "750",
            valueStatus: true,
        },
    ]
    const statusFilter = {
        options: [
            { value: 'all', name: 'all' },
            { value: 'active', name: 'active' },
            { value: 'inactive', name: 'inactive' },
            { value: 'frozen', name: 'frozen' },
        ],
        selected: 'all',
        placeholder: 'all'
    };
    const tokenFilter = {
        options: [
            { value: 'all', name: 'all' },
            { value: 'btc', name: 'btc' },
            { value: 'trx', name: 'trx' },
            { value: 'sol', name: 'sol' },
        ],
        selected: 'token',
        placeholder: 'all'
    };
    const networkFilter = {
        options: [
            { value: 'network', name: 'network' },
            { value: 'bitcoin', name: 'bitcoin' },
        ],
        selected: 'network',
        placeholder: 'all'
    };
    const availiabitiyFilter = {
        options: [
            { value: 'available', name: 'available' },
            { value: 'Not available', name: 'Not available' },
        ],
        selected: 'available',
        placeholder: 'all'
    };
    const wallet = [
        { asset: "BTC", network: "Bitcoin", balanceBtc: "0.00234", balanceUsd: "23,500" },
        { asset: "ETH", network: "Ethereum", balanceBtc: "0.1367", balanceUsd: "2,700" },
        { asset: "XRP", network: "Ripple", balanceBtc: "500.0", balanceUsd: "10,500" },
        { asset: "LTC", network: "Litecoin", balanceBtc: "1.234", balanceUsd: "12,000" },
        { asset: "BCH", network: "Bitcoin Cash", balanceBtc: "0.5678", balanceUsd: "5,678" },
        { asset: "EOS", network: "EOS.IO", balanceBtc: "2.345", balanceUsd: "1,234" },
        { asset: "ADA", network: "Cardano", balanceBtc: "1000", balanceUsd: "15,000" },
        { asset: "DOT", network: "Polkadot", balanceBtc: "0.8967", balanceUsd: "8,967" },
    ];
    const tablebody = [
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "status": "successful",
            "date": "12-22-24",
            "time": "11:23 AM",
            'reason': 'Not available, try again in 24 hours',
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "status": "successful",
            "date": "12-22-24",
            "time": "11:23 AM",
            'reason': 'Not available, try again in 24 hours',
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "status": "successful",
            "date": "12-22-24",
            "time": "11:23 AM",
            'reason': 'Not available, try again in 24 hours',
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "status": "successful",
            "date": "12-22-24",
            "time": "11:23 AM",
            'reason': 'Not available, try again in 24 hours',
        },
        {
            "asset": "BTC",
            "network": "Bitcoin",
            "status": "successful",
            "date": "12-22-24",
            "time": "11:23 AM",
            'reason': 'Not available, try again in 24 hours',
        }
    ]
    const handleFilter = (value) => {
        console.log(value)
    }
    return (
        <>
            <div className='flex items-center justify-between gap-8'>
                <h1 className='text-4xl font-bold'>Master Wallet</h1>
                <AddingButton
                    title={'add wallet'}
                    buttonClass='px-8 py-2'
                    handlefunction={()=>setShowWalletModal(true)}
                />
            </div>
            <div className='grid grid-cols-3 gap-4 my-8 mb-20'>
                {cardData.map((item, index) => (
                    <TotalCard
                        icon={item.icon}
                        iconBg={item.iconBg}
                        heading={item.heading}
                        subheading={item.subheading}
                        cardValue={item.cardValue}
                        valueStatus={item.valueStatus}
                        cardUnit={item.cardUnit}
                        key={index}
                    />
                ))}
            </div>
            <div className='my-8'>
                <div className='flex items-center justify-between gap-8 mb-8'>
                    <Dropdown
                        options={statusFilter.options}
                        placeholder={statusFilter.placeholder}
                        onChange={handleFilter}
                        selected={statusFilter.selected}

                        // styling
                        borderColor={"[#25AE7A]"}
                        bgColor='theme-dark'
                        roundedValue='full'
                        position='left-0'
                        paddingY='2'
                        gap='4'
                    />
                    <div className='flex items-center gap-8'>
                        <Button
                            navigationName='export csv'
                        />
                        <SearchFilter
                            handleFunction={handleFilter}
                        />
                    </div>
                </div>
                <div className='grid grid-cols-4 my-4 gap-4'>
                    {wallet.map((item, index) => (
                        <WalletCard key={index} wallet={item} />
                    ))}
                </div>
            </div>
            <div className='my-8 mt-[80px]'>
                <h1 className='text-2xl font-bold'>Token Availability</h1>
                <div className='my-8 flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <Dropdown
                            options={tokenFilter.options}
                            placeholder={tokenFilter.placeholder}
                            onChange={handleFilter}
                            selected={tokenFilter.selected}

                            // styling
                            borderColor={"[#25AE7A]"}
                            bgColor='theme-dark'
                            roundedValue='full'
                            position='left-0'
                            paddingY='2'
                            gap='4'
                        />
                        <Dropdown
                            options={networkFilter.options}
                            placeholder={networkFilter.placeholder}
                            onChange={handleFilter}
                            selected={networkFilter.selected}

                            // styling
                            borderColor={"[#25AE7A]"}
                            bgColor='theme-dark'
                            roundedValue='full'
                            position='left-0'
                            paddingY='2'
                            gap='4'
                        />
                        <Dropdown
                            options={availiabitiyFilter.options}
                            placeholder={availiabitiyFilter.placeholder}
                            onChange={handleFilter}
                            selected={availiabitiyFilter.selected}

                            // styling
                            borderColor={"[#25AE7A]"}
                            bgColor='theme-dark'
                            roundedValue='full'
                            position='left-0'
                            paddingY='2'
                            gap='4'
                        />
                    </div>
                    <div className='flex items-center gap-4'>
                        <Button
                            navigationName='export csv'
                        />
                        <SearchFilter
                            handleFunction={handleFilter}
                        />
                    </div>
                </div>
                <div className='my-4'>
                    <TableCan
                        headerTr={['asset','network','status','reason','date','actions']}
                        dataTr={tablebody}
                        TrName={NairaPortionRow}
                    />
                </div>
            </div>
            {showWalletModal && (
                <AddWalletModal
                    onSubmit={handleFilter}
                    onClose={() => setShowWalletModal(false)}
                />
            )}
        </>
    )
}

export default MasterCard
