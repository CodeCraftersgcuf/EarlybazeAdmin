import React, { useState } from 'react';
import EditIcon from '../../../../assets/icons/edit.png';
import delIcon from '../../../../assets/icons/delIcon.png';
import MoreDropdown from '../../../../globalComponents/MoreDropdown';
import kycDetial from '../../../../assets/icons/kycDetial.png';
import KYCDetailsModal from './KYCDetailsModal';

const KycRow = ({ displayData, index }) => {
    const [editData, seteditData] = useState(displayData);
    const [showDetail, setshowDetail] = useState(false);

    const onDetail = () => {
        setshowDetail(true);
    };

    const onDelete = () => {
        console.log('Delete', displayData.firstName);
    };
 console.log('askdjaksdjkasjd');
    const onSubmit = (values) => {
        console.log('askdjaksdjkasjd');
        
        console.log(values, " : Updated Data");
    };

    return (
        <>
            <tr className={`hover:bg-green-800 hover:cursor-pointer ${index % 2 === 0 ? "bg-green-950" : ""}`}>
                <td className='py-2'>
                    <div className='flex items-center gap-4 px-4 py-2'>
                        <input type="checkbox" />
                        <img src={displayData.img ? displayData.img : "https://randomuser.me/api/portraits/men/44.jpg"}
                            alt="profile" className='w-10 h-10 rounded-full' />
                    </div>
                </td>
                <td className='px-4 py-2 text-white'>
                    <h1 className='text-white font-semibold'>{displayData.firstName} {displayData.lastName}</h1>
                </td>
                <td className='px-4 py-2 text-white'>{displayData.dob}</td>
                <td className='px-4 py-2 text-white'>{displayData.address}</td>
                <td className='px-4 py-2 text-white whitespace-pre'>{displayData.timestamp}</td>
                <td className='px-4 py-2'>
                    <div className={`w-1 h-8 rounded-full ${displayData.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </td>
                <td className='px-4 py-2'>
                    <div className='flex items-center gap-2'>
                        <MoreDropdown buttonClass='border-[#25AE7A]' menuClass='bg-[#042619]'>
                            <div onClick={onDetail} className='bg-theme-dark-800 text-white py-4 px-2 rounded-lg min-w-[150px] flex items-center justify-center gap-4'>
                                <img src={kycDetial} alt="detail" className='w-5 h-5' />
                                <h1 className='text-nowrap'>View Detail</h1>
                            </div>
                        </MoreDropdown>
                        <button
                            className='border border-[#25AE7A] hover:bg-[#25AE7A] hover:text-black p-2 rounded-lg text-white font-bold'
                            onClick={onDelete}
                        >
                            <img src={delIcon} alt="Delete" className='w-5 h-5 object-cover' />
                        </button>
                    </div>
                </td>
            </tr>
            {showDetail && (
                <KYCDetailsModal
                    initialValues={editData}
                    closeModal={() => setshowDetail(false)}
                    onSubmit={onSubmit}
                />
            )}
        </>
    );
};

export default KycRow;

