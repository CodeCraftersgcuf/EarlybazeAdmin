import React from 'react'
import Filter from '../../globalComponents/Filter';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import AddingButton from '../../globalComponents/AddingButton';


const FeeManagement = () => {
    const tabs = [
        {value:''}
    ]
    return (
        <>
            <Header/>
            <div className='flex justify-end items-center gap-4 mt-8'>
                <AddingButton
                    title='Add new fee'
                    icon='bi bi-plus'
                />
            </div>
            <div className='mt-8'>
                <Filter
                />
            </div>
        </>
    )
}

export default FeeManagement
