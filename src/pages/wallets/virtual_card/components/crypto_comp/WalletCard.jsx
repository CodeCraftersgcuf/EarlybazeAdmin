import React from 'react';
import btcIcon from '../../../../../assets/icons/DummyIcon/btc.png'; // Ensure the icon path is correct
import MoreDropdown from '../../../../../globalComponents/MoreDropdown';
import { walletOptions } from '../../../dummyData';
import { h1 } from 'framer-motion/client';

const WalletCard = ({ wallet }) => {
    return (
        <div className="bg-theme-dark border relative border-green-950 rounded-lg p-4 text-white shadow-lg">
            <div className="flex items-center gap-4 mb-12">
                <img src={wallet.icon || btcIcon} alt="Bitcoin" className="h-8 w-8" />
                <div>
                    <div className="opacity-50">{wallet.asset}</div>
                    <div className="font-bold">{wallet.network}</div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <div className="text-sm opacity-50">Balance BTC</div>
                    <div>{wallet.balanceBtc}</div>
                </div>
                <div>
                    <div className="text-sm opacity-50">Balance USD</div>
                    <div>{wallet.balanceUsd}</div>
                </div>
            </div>
            <div className="cursor-pointer absolute top-5 right-5">
                <MoreDropdown iconClass="bi bi-three-dots-vertical" menuClass="bg-theme-dark min-w-[150px]" buttonClass='w-8 h-8 border-green-950'>
                    <div className="bg-theme-light p-4 flex flex-col gap-4">
                        {
                            walletOptions.map((item, index) => (
                                <h1 className='text-lg capitalize' key={index}>{item}</h1>
                            ))
                        }
                    </div>
                </MoreDropdown>
            </div>
        </div>
    );
};

export default WalletCard;
