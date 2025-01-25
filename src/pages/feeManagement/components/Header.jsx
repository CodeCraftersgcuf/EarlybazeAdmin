import React from 'react'
import Filter from '../../../globalComponents/Filter';
import { useLocation } from 'react-router-dom';

const Header = ({ handleFilterValue }) => {
    const location = useLocation();

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
    return (
        <div className='flex items-center justify-between gap-8'>
            <h1 className='text-4xl font-bold'>Fee Management</h1>
            <Filter
                tabs={tabs}
                activeTab={activeTab.name}
                handleValue={handleFilterValue ? handleFilterValue : () => { return }}
            />
        </div>
    )
}

export default Header
