import React from 'react';
import dollarIcon from '../../../../assets/icons/dollar.png';
import nairaIcon from '../../../../assets/icons/naira.png';

const ProfileDetail = ({ email, phone, kycStatus, cryptoWallet, nairaWallet }) => {
    return (
        <div className="bg-gradient-to-r from-[#1c4e80] to-[#1c67b3] rounded-lg p-6 text-white shadow-lg">
            <div className="grid grid-cols-3 gap-4">
                <div className="relative col-span-2 flex flex-col gap-4">
                    <div className="flex items-center gap-4 mb-2">
                        <i className="bi bi-envelope text-4xl"></i>
                        <div>
                            <p className="text-xl opacity-80">Email</p>
                            <p className="font-semibold text-lg">{email}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mb-2">
                        <i className="bi bi-telephone text-4xl"></i>
                        <div>
                            <p className="text-xl opacity-80">Phone</p>
                            <p className="font-semibold text-lg">{phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <i className="bi bi-shield text-4xl"></i>
                        <div>
                            <p className="text-xl opacity-80">KYC Status</p>
                            <p className={`font-semibold text-2xl capitalize ${kycStatus === 'unverified' ? 'text-red-500' : 'text-green-500'}`}>
                                {kycStatus} {kycStatus == 'verified' && <i className="bi bi-patch-check-fill"></i> }
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-0 flex gap-4 mt-4">
                        <i className="bi bi-calendar text-2xl cursor-pointer"></i>
                        <i className="bi bi-bell text-2xl cursor-pointer"></i>
                        <i className="bi bi-envelope text-2xl cursor-pointer"></i>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="bg-[#154c79] rounded-lg p-4 text-center shadow-md flex items-center justify-center flex-col gap-2">
                        <p className="text-sm">Crypto Wallet</p>
                        <img src={dollarIcon} alt="dollarimg" className='block mx-auto h-12 w-12 rounded-full'/>
                        <p className="text-xl font-bold text-green-400">${cryptoWallet}</p>
                    </div>
                    <div className="bg-[#154c79] rounded-lg p-4 text-center shadow-md flex items-center justify-center flex-col gap-2">
                        <p className="text-sm">Naira Wallet</p>
                        <img src={nairaIcon} alt="dollarimg" className='block mx-auto h-12 w-12 rounded-full'/>
                        <p className="text-xl font-bold text-green-400">₦{nairaWallet}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;
