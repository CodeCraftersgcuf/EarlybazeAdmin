import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddingButton from '../../../globalComponents/AddingButton';
import ConfirmationPopup from '../../../globalComponents/ConfirmationPopup';
import BankCard from './components/BankCard';
import AddEditBankModal from './components/AddEditBankModal';

const BankDetail = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [showconfirmDelete, setshowconfirmDelete] = useState(false)
    const [deletebank, setdeletebank] = useState(null)
    const [showEditModal, setShowEditModal] = useState(false);
    const [editAccount, setEditAccount] = useState(null);

    // Sample bank account data
    const [bankAccounts, setBankAccounts] = useState([
        {
            id: 1,
            bankName: 'Access Bank',
            accountName: 'Qamardeen Abdul malik',
            accountNumber: '123456789',
        },
        {
            id: 2,
            bankName: 'Access Bank',
            accountName: 'Qamardeen Abdul malik',
            accountNumber: '123456789',
        }
    ]);

    // Function to delete an account
    const handleDelete = (id) => {
        setdeletebank(id)
        setshowconfirmDelete(true)
    };
    const onConfirmDelete = () => {
        setBankAccounts(bankAccounts.filter(account => account.id !== deletebank));
        setshowconfirmDelete(false)
    }

    // Function to edit a bank account
    const handleEdit = (account) => {
        setEditAccount(account);
        setShowEditModal(true);
    };

    const handleSubmit = (values) => {
        console.log('Submitted values:', values);
        if (editAccount) {
            const updatedAccount = { ...editAccount, ...values };
            setBankAccounts(bankAccounts.map(account => account.id === updatedAccount.id ? updatedAccount : account));
            setShowEditModal(false);
        } else {
            const newAccount = {
                id: bankAccounts.length + 1,
                ...values,
            };
            setBankAccounts([...bankAccounts, newAccount]);
            setShowEditModal(false);
        }
    };

    return (
        <>
            <div className='flex items-center justify-between gap-8'>
                <div className='flex items-center gap-4'>
                    <div
                        onClick={() => navigate(-1)}
                        className='flex items-center justify-center cursor-pointer p-1 px-2 rounded-lg border border-[#25AE7A]'
                    >
                        <i className="bi bi-chevron-left text-xl"></i>
                    </div>
                    <h1 className='text-4xl text-white'>Bank Details</h1>
                </div>
                <div className='flex items-center gap-4'>
                    <AddingButton title={'Add New'} handlefunction={()=>setShowEditModal(true)} />
                </div>
            </div>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
                {bankAccounts.map((account) => (
                    <BankCard
                        onedit={handleEdit}
                        ondelete={handleDelete}
                        account={account}
                    />
                ))}
            </div>
            {showconfirmDelete && <ConfirmationPopup onConfirm={onConfirmDelete} onClose={() => setshowconfirmDelete(false)} />}
            {showEditModal && (
                <AddEditBankModal
                    initialValues={editAccount}
                    closeModal={() => setShowEditModal(false)}
                    onSubmit={handleSubmit}
                />
            )}
        </>
    );
};

export default BankDetail;
