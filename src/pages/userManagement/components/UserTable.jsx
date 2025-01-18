import React from 'react'
import TableCan from '../../../globalComponents/table/TableCan'
import Filter from '../../../globalComponents/Filter'
import { users_table } from '../../../dummyData/Data'
import UserRow from './UserRow'
import Button from '../../../globalComponents/Button'
import SearchFilter from '../../../globalComponents/SearchFilter'

const UserTable = () => {
    const [usersData, setusersData] = React.useState(users_table)
    console.log(usersData, 'The data')
    const filterData = (status) => {
        console.log(status)
        let filterdata = users_table.filter(item => item.status === status);
        // if the filterdata is empty 
        if (filterdata.length === 0) {
            setusersData(users_table);
            console.log(usersData)
        } else {
            setusersData(filterdata);
        }
    };

    const tabs = [
        { name: 'All', value: 'all' },
        { name: 'Online', value: 'online' },
        { name: 'Offline', value: 'offline' },
    ];

    const user_headerTr = [
        'Name',
        'Email',
        'Phone',
        'Status',
        'Action',
        'More'
    ]
    const handleSearch = (value) => {
        console.log("Search Value:", value);
        if (value == ''){
            setusersData(users_table);
            return false;
        }
        const filteredData = usersData.filter(
            (item) =>
                item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.email.toLowerCase().includes(value.toLowerCase()) ||
                item.phone.toLowerCase().includes(value.toLowerCase())
        );
        setusersData(filteredData);
    };
    return (
        <>
            <div className='mt-[100px] mb-8 flex lg:items-center gap-4 justify-between flex-col-reverse lg:flex-row'>
                <Filter tabs={tabs} handleValue={filterData} />
                <div className='flex items-center gap-2 justify-end'>
                    <Button
                        navigationName='Export CSV'
                    />
                    <SearchFilter handleFunction={handleSearch} />
                </div>
            </div>
            <div>
                <TableCan
                    // th in first tr
                    headerTr={user_headerTr}
                    // td data display
                    dataTr={usersData}

                    // name of tr using 
                    TrName={UserRow}
                />
            </div>
        </>
    )
}

export default UserTable
