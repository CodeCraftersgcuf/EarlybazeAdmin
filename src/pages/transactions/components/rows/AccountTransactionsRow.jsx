import React, { useState } from 'react';
import BtcIcon from '../../../../assets/icons/DummyIcon/btc.png';
import MoreDropdown from '../../../../globalComponents/MoreDropdown';
import kycDetial from '../../../../assets/icons/kycDetial.png';
import TransactionModal from '../models/TransactionModal';  // Import your modal
import ReceiptDiv from '../small_comp/ReceiptDiv';  // Assuming you have this component for receipts
import successIcon from '../../../../assets/icons/successIcon.png';

const AccountTransactionsRow = ({ displayData = {}, index = 1 }) => {
    const [showDetailModel, setShowDetailModel] = useState(false);

    const transactionDetails = [
        { label: "Token Name", value: "Bitcoin" },
        { label: "Network", value: "Bitcoin" },
        { label: "Amount in BTC", value: "0.00000234 BTC" },
        { label: "Amount in USD", value: "$1,500.23" },
        { label: "Recipient Address", value: "0xdfgjkfkkfn...bkkbm", copyable: true },
        { label: "TX Hash", value: "esfjfgnkkfn...bkkbm", copyable: true },
        { label: "Fees in BTC", value: "0.00000012 BTC" },
        { label: "Fees in USD", value: "$12" },
        { label: "Date", value: "12 - 22 - 24 / 11:22 AM" },
    ];

    return (
        <>
            <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
                <td className="px-4 py-2">
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" />
                        <div className='flex items-center gap-2'>
                            <img
                                src={displayData.typeimg ? displayData.typeimg : `https://randomuser.me/api/portraits/men/44.jpg`}
                                alt={displayData.username}
                                className="w-8 h-8 rounded-full"
                            />
                            <span>{displayData.username}</span>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-2">{displayData.transaction_type}</td>
                <td>
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
                </td>
                <td className="px-4 py-2">
                    <div className='flex items-center gap-2'>
                        <img
                            src={displayData.typeimg ? displayData.typeimg : BtcIcon}
                            alt={displayData.type}
                            className="w-6 h-6"
                        />
                        <span>{displayData.network}</span>
                    </div>
                </td>
                <td className="px-4 py-2">
                    <div className='flex flex-col gap-4'>
                        <span>{displayData.amount}</span>
                        <span>{displayData.amountUSD}</span>
                    </div>
                </td>
                <td className='px-4 py-2'>
                    <div className={`w-1 h-10 rounded-lg mx-auto bg-${displayData.status == 'success' ? 'green-500' : 'red-600'}`}></div>
                </td>
                {displayData.fees && (
                    <td className="px-4 py-2">
                        <div className='flex flex-col gap-4'>
                            <span>{displayData.fees}</span>
                            <span>{displayData.feesUSD}</span>
                        </div>
                    </td>
                )}
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
                            <div className="flex items-center gap-2" onClick={() => setShowDetailModel(true)}>
                                <img src={kycDetial} alt="more" className='h-5 w-5' />
                                <span className='p-0 m-0'>View More</span>
                            </div>
                        </div>
                    </MoreDropdown>
                </td>
            </tr>

            {/* Detail Modal */}
            {showDetailModel && (
                <TransactionModal
                    status={displayData.status}
                    statusName="Transaction Successful"
                    options={transactionDetails}
                    accounts={{ id: "1", account: 'account 1', bankName: "Access Bank", accountName: "EarlyBase", accountNumber: "123456789" }}
                    onClose={() => setShowDetailModel(false)}
                >
                    <ReceiptDiv
                        accoutHolder={'qamardeen abdul malik'}
                        amount={'123456789'}
                        receipt={successIcon}
                    />
                </TransactionModal>
            )}
        </>
    );
};

export default AccountTransactionsRow;
