import React, { useState, useEffect } from 'react';
import BtcIcon from '../../../../../assets/icons/DummyIcon/btc.png';
import AddingButton from '../../../../../globalComponents/AddingButton';
import TokenAvailabilityModal from './TokenAvailabilityModal';
import AddWalletModal from '../crypto_comp/addwallet/AddWalletModal';

const NairaPortionRow = ({ displayData = {}, index = 1 }) => {
    const [showModal, setShowModal] = useState(false);
    const [showWalletModal, setShowWalletModal] = useState(false);

    // Log the state changes after submission
    useEffect(() => {
        console.log('Updated showModal:', showModal);
    }, [showModal]);  // Trigger when showModal changes

    useEffect(() => {
        console.log('Updated showWalletModal:', showWalletModal);
    }, [showWalletModal]);  // Trigger when showWalletModal changes

    const handleStatusChange = (formData) => {
        console.log("Token Data Submitted:", formData);
        // Show the AddWalletModal after submitting the token modal
        setShowModal(false);  // Close the TokenAvailabilityModal
        setShowWalletModal(true);  // Open the AddWalletModal
    };

    const handleWalletSubmit = (walletData) => {
        console.log("Wallet Data Submitted:", walletData);
        setShowWalletModal(false);  // Close the AddWalletModal after submitting
    };

    return (
        <>
            <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
                <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" />
                        <div className="flex items-center gap-2">
                            <img
                                src={displayData.typeimg || BtcIcon}
                                alt={displayData.type}
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex flex-col">
                                <span className="text-sm opacity-50">{displayData.asset}</span>
                                <span>{displayData.network}</span>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                        <img
                            src={displayData.typeimg || BtcIcon}
                            alt={displayData.type}
                            className="w-5 h-5 rounded-full"
                        />
                        {displayData.network}
                    </div>
                </td>
                <td className="px-4 py-2">
                    <div className={`w-1 h-10 rounded-lg mx-auto ${displayData.status === 'success' ? 'bg-green-500' : 'bg-red-600'}`}></div>
                </td>
                <td className="px-4 py-2">{displayData.reason || 'N/A'}</td>
                <td className="px-4 py-2 flex flex-col gap-4">
                    <span>{displayData.date}</span>
                    <span>{displayData.time}</span>
                </td>
                <td className="px-4 py-2">
                    <AddingButton title="Change Status" handlefunction={() => setShowModal(true)} />
                </td>
            </tr>

            {showModal && (
                <TokenAvailabilityModal
                    onSubmit={handleStatusChange}  // Pass the handleStatusChange function
                    onClose={() => setShowModal(false)}
                />
            )}

            {showWalletModal && (
                <AddWalletModal
                    onSubmit={handleWalletSubmit}
                    onClose={() => setShowWalletModal(false)}
                />
            )}
        </>
    );
};

export default NairaPortionRow;
