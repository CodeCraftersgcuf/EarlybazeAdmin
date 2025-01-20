import React, { useState } from 'react'
import Filter from '../../globalComponents/Filter';
import Apis from './portions/Apis';
import Activity from './portions/Activity';
import Other from './portions/Other';

const Security = () => {
    const [activeTab, setActiveTab] = useState('users');
    const [portion, setPortion] = useState(<Apis />);

    const tabs = [
        { name: 'Apis', value: 'apis', component: <Apis /> },
        { name: 'Activity log', value: 'activity', component: <Activity /> },
        { name: 'Others', value: 'others', component: <Other /> },
    ];

    const handleTabChange = (value) => {
        setActiveTab(value);
        const selectedTab = tabs.find((tab) => tab.value === value);
        setPortion(selectedTab.component);
    };
    return (
        <>
            <div className='flex items-center justify-between gap-4'>
                <h1 className='text-4xl font-bold'>Security</h1>
                <Filter
                    tabs={tabs}
                    activeTab={activeTab}
                    handleValue={handleTabChange}
                    tabPadding="3"
                />
            </div>
            <div className="mt-14">
                {portion}
            </div>
        </>
    )
}

export default Security
