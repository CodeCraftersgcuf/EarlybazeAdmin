import React from 'react'
import Filter from '../../../globalComponents/Filter';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract the last segment from the pathname
    const getLastSegment = () => {
        const pathArray = location.pathname.split('/').filter(segment => segment);
        return pathArray.length ? pathArray[pathArray.length - 1] : '';
    };
    const tabs = [
        { value: 'management', name: 'fee management', heading: 'fee management' },
        { value: 'exchangerate', name: 'exchange rate', heading: 'exchange rate' },
        { value: 'minimumtrade', name: 'minimum trade', heading: 'Minimun Trade' }
    ]
    // making match heading with tabs values 
    const activeTab = tabs.find(tab => tab.value == getLastSegment());
    const handleFilterValue = (value)=>{
        navigate(`/fee/${value}`);
    }
    return (
        <div className='flex items-center justify-between gap-8'>
            <h1 className='text-4xl font-bold'>Fee Management</h1>
            <Filter
                tabs={tabs}
                activeTab={activeTab.name}
                handleValue={handleFilterValue}
            />
        </div>
    )
}

export default Header
