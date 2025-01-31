import React,{useState} from 'react'
import Filter from '../../../globalComponents/Filter';
import CryptoPortion from './components/portions/CryptoPortion';
import NairaPortion from './components/portions/NairaPortion';
const UserBalance = () => {
    const [activeTab, setActiveTab] = useState('Crypto');
    const [portion, setPortion] = useState(<CryptoPortion />);

    const tabs = [
        { name: 'Crypto', value: 'crypto', component: <CryptoPortion /> },
        { name: 'Naira', value: 'naira', component: <NairaPortion /> },
    ];

    const handleTabChange = (value) => {
        setActiveTab(value);
        const selectedTab = tabs.find((tab) => tab.value === value);
        setPortion(selectedTab.component);
    };
    return (
        <>
            <div className='flex items-center justify-between gap-8'>
                <h1 className='text-4xl font-bold'>Virtual Wallet</h1>
                <Filter
                    tabs={tabs}
                    activeTab={activeTab}
                    handleValue={handleTabChange}
                    tabPadding="3"
                />
            </div>
            <div className='mt-8'>
                {portion}
            </div>
        </>
    )
}

export default UserBalance
