import React from 'react'
import wallet_image from "../../../assets/icons/Wallet.png";
import BTC from "../../../assets/icons/DummyIcon/btc.png";
import trx from "../../../assets/icons/DummyIcon/trx.png";
import usdt from "../../../assets/icons/DummyIcon/usdt.png";
import sol from "../../../assets/icons/DummyIcon/sol.png";
import TotalCard from '../../../globalComponents/TotalCard';
import Button from '../../../globalComponents/Button';
import SearchFilter from '../../../globalComponents/SearchFilter';
import TableCan from '../../../globalComponents/table/TableCan';
import UserRow from '../../userManagement/components/UserRow';
import CryptoBalanceRow from '../components/CryptoBalanceRow';

const Crypto = () => {
    const dashboard_cardValues = [
        {
            icon: wallet_image,
            iconBg: "bg-[#CA1919]",
            heading: "total user",
            subheading: "Wallets",
            cardValue: "500",
            valueStatus: true,
        },
        {
            icon: wallet_image,
            iconBg: "bg-[#CA1919]",
            heading: "total user",
            subheading: "Balance in USD",
            cardValue: "1000",
            valueStatus: true,
        },
        {
            icon: wallet_image,
            iconBg: "bg-[#CA1919]",
            heading: "total user",
            subheading: "Balance in NGN",
            cardValue: "27,750",
            valueStatus: true,
        },
    ];
    const tokenData = [
        {
            "symbol": "BTC",
            "name": "Bitcoin",
            "quantity": 200,
            "balance": "0.00023 BTC",
            "value": "$27,567,556",
            "logo": "https://cryptologos.cc/logos/bitcoin-btc-logo.png"
        },
        {
            "symbol": "USDT",
            "name": "Tether",
            "quantity": 123,
            "balance": "12.456 USDT",
            "value": "$27,567,556",
            "logo": "https://cryptologos.cc/logos/tether-usdt-logo.png"
        },
        {
            "symbol": "SOL",
            "name": "Solana",
            "quantity": 148,
            "balance": "20 SOL",
            "value": "$27,567,556",
            "logo": "https://cryptologos.cc/logos/solana-sol-logo.png"
        },
        {
            "symbol": "TRX",
            "name": "Tron",
            "quantity": 23,
            "balance": "245 TRX",
            "value": "$27,567,556",
            "logo": "https://cryptologos.cc/logos/tron-trx-logo.png"
        }
    ]


    const table_th = [
        'token',
        'total users',
        'total balance',
        'Total Balance ($)',
        'Actions'
    ]
    const handleSearch = (search) => {
        console.log(search)
    }
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {dashboard_cardValues.map((item, index) => {
                    return (
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
                    );
                })}
            </div>
            <div className='mt-[80px] flex justify-end items-center gap-8'>
                <Button
                    navigationName='Export CSV'
                />
                <SearchFilter handleFunction={handleSearch} />
            </div>
            <div className='mt-8'>
                <TableCan
                    headerTr={table_th}
                    dataTr={tokenData}
                    TrName={CryptoBalanceRow}
                />
            </div>
        </>
    )
}

export default Crypto
